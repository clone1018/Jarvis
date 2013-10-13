module.exports = function (grunt) {

    grunt.initConfig({
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'bin',
                options: {
                    module: 'commonjs', //or commonjs
                    target: 'es5', //or es3
                    base_path: 'src',
                    sourcemap: false,
                    fullSourceMapPath: false,
                    declaration: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-typescript');

    // Default task(s).
    grunt.registerTask('default', ['typescript']);

};
