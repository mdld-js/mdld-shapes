#!/usr/bin/env node
import Validator from 'shacl-engine/Validator.js'
import { parse, DataFactory } from 'mdld-parse'
import { readFileSync } from 'fs'
import { resolve } from 'path'

/*
 * STANDALONE SHACL VALIDATION TOOL
 * 
 * Uses mdld-parse to convert MDLD to RDF quads, then shacl-engine for validation.
 * 
 * KNOWN LIMITATIONS:
 * - shacl-engine requires clownface/rdf-ext for RDF list support (sh:and, sh:or, sh:xone)
 * - Currently using N3 Store which lacks .list() method, causing errors with logical constraints
 * - Simple constraints (sh:class, sh:datatype, sh:minCount, sh:maxCount, etc.) work correctly
 * 
 * Ideally, we would reuse the DataFactory from mdld-parse, but implementing a compatible
 * Store with list support from scratch is beyond current scope.
 */

export class MyCustomStore {
    constructor(quads = []) {
        this._quads = new Set();
        for (const q of quads) {
            this.add(q);
        }
    }

    get size() {
        return this._quads.size;
    }

    // --- Standard RDF/JS DatasetCore Methods ---

    add(quad) {
        this._quads.add(quad);
        return this;
    }

    delete(quad) {
        for (const q of this._quads) {
            if (this._quadsMatch(q, quad)) {
                this._quads.delete(q);
            }
        }
        return this;
    }

    has(quad) {
        for (const q of this._quads) {
            if (this._quadsMatch(q, quad)) return true;
        }
        return false;
    }

    match(subject, predicate, object, graph) {
        const matches = [];
        for (const q of this._quads) {
            if (
                (!subject || this._termEquals(q.subject, subject)) &&
                (!predicate || this._termEquals(q.predicate, predicate)) &&
                (!object || this._termEquals(q.object, object)) &&
                (!graph || this._termEquals(q.graph, graph))
            ) {
                matches.push(q);
            }
        }
        return new MyCustomStore(matches);
    }

    [Symbol.iterator]() {
        return this._quads[Symbol.iterator]();
    }

    // --- N3.js Compatibility Aliases (Fixes your current errors) ---

    addQuad(quad) {
        return this.add(quad);
    }

    getQuads() {
        return [...this._quads];
    }

    // --- Helpers ---

    _termEquals(t1, t2) {
        if (!t1 || !t2) return false;
        if (typeof t1.equals === 'function') return t1.equals(t2);
        return t1.value === t2.value && t1.termType === t2.termType;
    }

    _quadsMatch(q1, q2) {
        return (
            this._termEquals(q1.subject, q2.subject) &&
            this._termEquals(q1.predicate, q2.predicate) &&
            this._termEquals(q1.object, q2.object) &&
            this._termEquals(q1.graph, q2.graph)
        );
    }
}

const factory = {
    ...DataFactory,
    dataset: () => new MyCustomStore()
}

// Parse command line arguments
const args = process.argv.slice(2)
const filePath = args[0]

if (!filePath) {
    console.error('Usage: node validate.js <file.md>')
    process.exit(1)
}

async function main() {
    try {
        console.log(`📄 Loading file: ${filePath}`)

        // Read the MDLD file
        const fileContent = readFileSync(resolve(filePath), 'utf8')

        // Parse MDLD to RDF quads using mdld-parse
        const result = parse({ text: fileContent })
        console.log(`📊 Parsed ${result.quads.length} RDF quads from MDLD`)

        // Separate shapes from data
        // Shapes are typically marked with sh:NodeShape or sh:PropertyShape
        const shapesDataset = factory.dataset()
        const dataDataset = factory.dataset()

        result.quads.forEach(quad => {
            // Check if this is a shape-related triple
            const isShape = quad.object.value.includes('NodeShape') ||
                quad.object.value.includes('PropertyShape') ||
                quad.predicate.value.includes('http://www.w3.org/ns/shacl#') ||
                quad.subject.value.includes('Shape')

            if (isShape) {
                shapesDataset.addQuad(quad)
            } else {
                // Put data in default graph (no graph context)
                const defaultGraphQuad = factory.quad(quad.subject, quad.predicate, quad.object)
                dataDataset.addQuad(defaultGraphQuad)
            }
        })

        console.log(`📊 Shapes: ${shapesDataset.getQuads().length} quads`)
        console.log(`📊 Data: ${dataDataset.getQuads().length} quads`)

        // Create SHACL validator
        const validator = new Validator(shapesDataset, { factory })
        console.log('⚙️  Validator created, starting validation...')

        // Perform validation
        const report = await validator.validate({ dataset: dataDataset })
        console.log('✅ Validation completed')

        // Process results
        const violations = report.results.map((r, i) => {
            const violation = {
                id: i + 1,
                severity: r.severity?.value || 'Violation',
                focusNode: r.focusNode?.value || 'Unknown',
                path: r.path?.map(p => p.predicates).flat().map(p => p.id).join(', ') || 'Unknown',
                constraint: r.constraintComponent?.value || 'Unknown',
                message: null
            }
            return violation
        })

        const validationReport = {
            conforms: report.conforms,
            totalViolations: report.results.length,
            violations: violations
        }

        // Output results
        if (validationReport.conforms) {
            console.log('✅ CONFORMS - No violations found')
        } else {
            console.log(`❌ VIOLATIONS - ${validationReport.totalViolations} violation(s) found`)

            if (validationReport.violations && validationReport.violations.length > 0) {
                console.log('\nViolation Details:')
                validationReport.violations.forEach(v => {
                    console.log(`  ${v.id}. [${v.severity}] ${v.focusNode}`)
                    console.log(`     Path: ${v.path}`)
                    console.log(`     Constraint: ${v.constraint}`)
                    if (v.message) console.log(`     Message: ${v.message}`)
                    console.log()
                })
            }
        }

    } catch (error) {
        console.error('❌ Error:', error.message)
        console.error(error.stack)
        process.exit(1)
    }
}

main()
