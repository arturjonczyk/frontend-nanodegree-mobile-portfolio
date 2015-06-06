module.exports = function (grunt) {

    // Configure task(s)
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserSync: {
            bsFiles: {
                src: [
                    'css/*.css',
                    'index.html'
                ]
            },
            options: {
                server: {
                    baseDir: './'
                },
                browser: 'google chrome',
                notify: false,
                //tunnel: true,
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-browser-sync');

    // Register task(s)
    grunt.registerTask('default', []);
    grunt.registerTask('sync', ['browserSync']);
};
