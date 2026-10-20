#!/usr/bin/env node
/**
 * Compare shacl-engine and mdld-shapes against the assembled demo.
 *
 * Run with `npm test`, or pass a different MD-LD file directly:
 * `node compare-validators.js path/to/file.md`
 */

import assert from 'node:assert/strict'
import test from 'node:test'
import Validator from 'shacl-engine/Validator.js'
import { validate as mdldValidate } from './mdld-shapes.js'
import { parse, DataFactory } from 'mdld-parse'
import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { classifyQuads } from './detector.js'

const projectDir = dirname(fileURLToPath(import.meta.url))
const filePath = resolve(projectDir, process.argv[2] || 'shacl-demo.md')

// Store implementation for shacl-engine
class MyCustomStore {
    constructor(quads = []) {
        this._quads = new Set()
        for (const q of quads) this.add(q)
    }

    get size() { return this._quads.size }

    add(quad) { this._quads.add(quad); return this }

    delete(quad) {
        for (const q of this._quads) {
            if (this._quadsMatch(q, quad)) this._quads.delete(q)
        }
        return this
    }

    has(quad) {
        for (const q of this._quads) {
            if (this._quadsMatch(q, quad)) return true
        }
        return false
    }

    match(subject, predicate, object, graph) {
        const matches = []
        for (const q of this._quads) {
            if (
                (!subject || this._termEquals(q.subject, subject)) &&
                (!predicate || this._termEquals(q.predicate, predicate)) &&
                (!object || this._termEquals(q.object, object)) &&
                (!graph || this._termEquals(q.graph, graph))
            ) {
                matches.push(q)
            }
        }
        return new MyCustomStore(matches)
    }

    [Symbol.iterator]() { return this._quads[Symbol.iterator]() }

    addQuad(quad) { return this.add(quad) }
    getQuads() { return [...this._quads] }

    _termEquals(t1, t2) {
        if (!t1 || !t2) return false
        if (typeof t1.equals === 'function') return t1.equals(t2)
        return t1.value === t2.value && t1.termType === t2.termType
    }

    _quadsMatch(q1, q2) {
        return (
            this._termEquals(q1.subject, q2.subject) &&
            this._termEquals(q1.predicate, q2.predicate) &&
            this._termEquals(q1.object, q2.object) &&
            this._termEquals(q1.graph, q2.graph)
        )
    }
}

const factory = {
    ...DataFactory,
    dataset: () => new MyCustomStore()
}

function termValue(term) {
    return term?.value || 'Unknown'
}

function pathValue(path) {
    if (Array.isArray(path)) {
        return path.map(segment => {
            if (Array.isArray(segment.predicates)) {
                return segment.predicates.map(predicate => predicate.id || predicate.value || '').join('/')
            }
            return segment.id || segment.value || ''
        }).join('|')
    }
    return termValue(path)
}

function componentValue(result, key) {
    return termValue(result[key])
}

function normalizedViolations(report, componentKey) {
    return report.results.map(result => ({
        focusNode: termValue(result.focusNode),
        path: pathValue(result.path),
        component: componentValue(result, componentKey),
        severity: termValue(result.severity)
    })).sort((left, right) => JSON.stringify(left).localeCompare(JSON.stringify(right)))
}

function constraintCounts(report, componentKey) {
    const counts = {}
    for (const result of report.results) {
        const component = componentValue(result, componentKey).replace('http://www.w3.org/ns/shacl#', '')
        counts[component] = (counts[component] || 0) + 1
    }
    return counts
}

test('shacl-engine and mdld-shapes agree on the assembled SHACL demo', async () => {
    const fileContent = readFileSync(filePath, 'utf8')
    const parsed = parse({ text: fileContent })
    const { shapes, data } = classifyQuads(parsed.quads)

    const shapesDataset = factory.dataset()
    const dataDataset = factory.dataset()
    for (const quad of shapes) shapesDataset.addQuad(quad)
    for (const quad of data) {
        dataDataset.addQuad(factory.quad(quad.subject, quad.predicate, quad.object))
    }

    const engineValidator = new Validator(shapesDataset, { factory })
    const engineReport = await engineValidator.validate({ dataset: dataDataset })
    const mdldReport = mdldValidate({
        shapes: shapesDataset.getQuads(),
        data: dataDataset.getQuads()
    })

    const engineConstraints = constraintCounts(engineReport, 'constraintComponent')
    const mdldConstraints = constraintCounts(mdldReport, 'component')
    const engineViolations = normalizedViolations(engineReport, 'constraintComponent')
    const mdldViolations = normalizedViolations(mdldReport, 'component')

    console.log(`Fixture: ${filePath}`)
    console.log(`Parsed ${parsed.quads.length} quads (${shapes.length} shapes, ${data.length} data)`)
    console.log(`shacl-engine: ${engineReport.results.length} violations; mdld-shapes: ${mdldReport.results.length} violations`)

    assert.equal(mdldReport.conforms, engineReport.conforms, 'conformance results differ')
    assert.deepEqual(mdldConstraints, engineConstraints, 'violation counts by constraint component differ')
    assert.deepEqual(mdldViolations, engineViolations, 'normalized validation results differ')

    console.log('Conformance, constraint counts, and normalized violations match.')
})
