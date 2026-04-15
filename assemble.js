import { assemble } from '../mdld-assemble/index.js'
import { getNodePathUtils, createNodeDocumentGetter } from '../mdld-assemble/utils.js'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

const pathUtils = await getNodePathUtils()
const originalDocumentGetter = await createNodeDocumentGetter()

const configs = [
    {
        name: 'Complete catalog',
        indexFile: resolve('./index.md'),
        documentGetter: originalDocumentGetter,
        outputFile: 'shacl.md'
    },
    {
        name: 'Ontology only',
        indexFile: resolve('./index.ontology.md'),
        documentGetter: async (path) => {
            if (path.endsWith('.demo.md')) {
                throw new Error('Skipping demo file for ontology assembly')
            }
            return originalDocumentGetter(path)
        },
        outputFile: 'shacl-ontology.md'
    },
    {
        name: 'Demo only',
        indexFile: resolve('./index.demo.md'),
        documentGetter: async (path) => {
            if (!path.endsWith('.demo.md')) {
                throw new Error('Skipping non-demo file for demo assembly')
            }
            return originalDocumentGetter(path)
        },
        outputFile: 'shacl-demo.md'
    }
]

for (const config of configs) {
    const result = await assemble({
        indexFile: config.indexFile,
        baseDir: resolve('./'),
        documentGetter: config.documentGetter,
        pathUtils
    })

    await writeFileSync(config.outputFile, result.content)
    console.log(`✅ Assembled ${config.name} → ${config.outputFile}`)
}