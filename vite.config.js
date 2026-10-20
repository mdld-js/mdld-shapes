export default {
    build: {
        lib: {
            entry: 'index.js',
            fileName: 'shacl-engine',
            formats: ['es']
        },
        target: 'es2020',
        outDir: 'lib',
        minify: false,
        sourcemap: false,
    }
}