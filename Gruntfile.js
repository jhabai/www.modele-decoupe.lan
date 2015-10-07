// Gruntfile.js
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    //loads the various task configuration files
    var configs = require('load-grunt-configs')(grunt, {

        // Config path default
        config: {
            bower: 'private/vendor',
            privateScss: 'private/scss',
            publicCssPath: 'public/css',
            publicCss: '<%= config.publicCssPath %>/app.min.css',
            privateJs: 'private/js',
            privateJsIce: '<%= config.privateJs %>/ice',
            publicJsPath: 'public/js',
            publicJs: '<%= config.publicJsPath %>/app.min.js',
            copy: 'V:/www.modele-decoupe.lan/str'
        }

    });

    grunt.initConfig(configs);

    // Les tâches par défaut
    grunt.registerTask('default', 'watch', 'jshint');

    // Serveur PHP
    grunt.registerTask('serve', [
        'php',         // Start PHP Server
        'browserSync', // Using the php instance as a proxy
        'watch'        // Any other watch tasks you want to run
    ]);

    // Copie
    grunt.registerTask('copyy', [
        'copy',
        'notify:copy'
    ]);

    // Les tâches de productions
    grunt.registerTask('prod', [
        'jshint',
        'concat',
        'uglify',
        'sass',
        'combine_mq',
        'cssmin',
        'notify:prod'
    ]);
};