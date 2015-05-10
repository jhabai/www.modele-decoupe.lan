// Gruntfile.js
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    //loads the various task configuration files
    var configs = require('load-grunt-configs')(grunt);
    grunt.initConfig(configs);

    // Les tâches par défaut
    grunt.registerTask('default', 'watch');

    // Serveur PHP
    grunt.registerTask('server', [
        'php'
    ]);

    // Les tâches de productions
    grunt.registerTask('prod', [
        'concat',
        'uglify',
        'sass',
        'combine_mq',
        'cssmin',
        'notify:prod'
    ]);
};