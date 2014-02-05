module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        watch: {
            files: '**/*.html',
            options: {
              livereload: true,
            },
        },
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', 'watch');
}