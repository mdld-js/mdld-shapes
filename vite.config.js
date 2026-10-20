export default {
    build: {
        lib: {
            entry: 'index.js',
            name: 'mdld-shapes',
            fileName: 'mdld-shapes',
            formats: ['es']
        },
        target: 'es2020',
        outDir: 'dist',
        minify: false,
        sourcemap: false,
    }
}