export default {
    build: {
        lib: {
            entry: { 'shacl-engine': 'index.js', 'mdld-shapes': 'mdld-shapes.js' },
            formats: ['es']
        },
        target: 'es2020',
        outDir: 'lib',
        minify: false,
        sourcemap: false,
    }
}