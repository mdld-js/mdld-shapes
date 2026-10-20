#!/usr/bin/env node
import { validate } from './mdld-shapes.js'
import { parse } from 'mdld-parse'
import { readFileSync } from 'fs'
import { resolve } from 'path'

/*
 * STANDALONE SHACL VALIDATION TOOL
 * 
 * Uses mdld-parse to convert MDLD to RDF quads, then our zero-dependency
 * mdld-shapes validator for SHACL Core validation.
 * 
 * No external SHACL engine required — the entire validator is in mdld-shapes.js.
 */

// Parse command line arguments
const args = process.argv.slice(2)
const filePath = args[0]

if (!filePath) {
    console.error('Usage: node validate.js <file.md>')
    process.exit(1)
}

function main() {
    try {
        console.log(`📄 Loading file: ${filePath}`)

        // Read the MDLD file
        const fileContent = readFileSync(resolve(filePath), 'utf8')

        // Parse MDLD to RDF quads using mdld-parse
        const result = parse({ text: fileContent })
        console.log(`📊 Parsed ${result.quads.length} RDF quads from MDLD`)

        // Run validation — mdld-shapes auto-classifies shapes vs data
        console.log('⚙️  Validating...')
        const report = validate({ quads: result.quads })
        console.log('✅ Validation completed')

        // Process results
        const violations = report.results.map((r, i) => {
            const violation = {
                id: i + 1,
                severity: r.severity?.value?.replace('http://www.w3.org/ns/shacl#', '') || 'Violation',
                focusNode: r.focusNode?.value || 'Unknown',
                path: r.path?.value || 'Unknown',
                constraint: r.component?.value?.replace('http://www.w3.org/ns/shacl#', '') || 'Unknown',
                message: r.message || null
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
