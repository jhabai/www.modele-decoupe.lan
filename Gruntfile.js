module.exports = function(grunt) {

    // On charge les tâches
    require('load-grunt-tasks')(grunt);

    // Toutes les configurations vont ici
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),



        // Serveur PHP
        // - - - - - - - - - - - -


        php: {
            server: {
                options: {
                    hostname: 'luminaires-online.lan',
                    port: 9000,
                    keepalive: true,
                    open: true
                }
            }
        },



        // Concaténation
        // - - - - - - - - - - - -

        concat: {
            dist: {
                src: [
                    'js/plugin/minwidth-relocate.min.js',
                    'js/ice/relocate.js',
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/foundation/js/foundation/foundation.js',
                    'bower_components/foundation/js/foundation/foundation.abide.js',
                    'bower_components/foundation/js/foundation/foundation.accordion.js',
                    'bower_components/foundation/js/foundation/foundation.alert.js',
                    'bower_components/foundation/js/foundation/foundation.clearing.js',
                    'bower_components/foundation/js/foundation/foundation.dropdown.js',
                    'bower_components/foundation/js/foundation/foundation.equalizer.js',
                    'bower_components/foundation/js/foundation/foundation.interchange.js',
                    'bower_components/foundation/js/foundation/foundation.joyride.js',
                    'bower_components/foundation/js/foundation/foundation.magellan.js',
                    'bower_components/foundation/js/foundation/foundation.offcanvas.js',
                    'bower_components/foundation/js/foundation/foundation.reveal.js',
                    'bower_components/foundation/js/foundation/foundation.slider.js',
                    'bower_components/foundation/js/foundation/foundation.tab.js',
                    'bower_components/foundation/js/foundation/foundation.tooltip.js',
                    'bower_components/foundation/js/foundation/foundation.topbar.js',
                    'bower_components/slick.js/slick/slick.min.js',
                    'js/ice/setting.js',
                    'js/ice/function.js',
                    'js/ice/navigation.js',
                    'js/ice/colorbox.js',
                    'js/ice/grid.js',
                    'js/app.js'
                ],
                dest: 'js/app.min.js'
            }
        },



        // Minification
        // - - - - - - - - - - - -

        uglify: {
            my_target: {
                files: {
                    'js/app.min.js': ['js/app.min.js']
                }
            }
        },



        // Combine media queries
        // - - - - - - - - - - - -

        combine_mq: {
            new_filename: {
                src: 'css/app.css',
                dest: 'css/app.css'
            }
        },



        // CSS Minifier
        // - - - - - - - - - - - -

        cssmin: {
            target: {
                files: {
                    'css/app.css': ['css/app.css']
                }
            }
        },



        // SASS
        // - - - - - - - - - - - -

        sass: {
            options: {
                includePaths: ['bower_components/foundation/scss']
            },
            dist: {
                options: {
                    outputStyle: 'compressed',
                    sourceMap: true,
                },
                files: {
                    'css/app.css': 'scss/app.scss'
                }
            }
        },



        // Watch
        // - - - - - - - - - - - -

        watch: {
            scripts: {
                files: ['js/*.js', 'js/**/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false
                }
            },

            sass: {
                files: 'scss/**/**/*.scss',
                tasks: ['sass']
            }
        }

    });

    // 4. Nous disons à Grunt quoi faire lorsque nous tapons "grunt" dans la console.

    // Les tâches par défaut
    grunt.registerTask('default', 'watch');
    grunt.registerTask('server', ['php']);

    // Les tâches de productions
    grunt.registerTask('prod', ['concat', 'uglify', 'sass', 'combine_mq', 'cssmin']);

};
