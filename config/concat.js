module.exports = {
    dist: {
        src: [
            '<%= config.privateJsPath %>/_setting.js',
            '<%= config.privateJsIce %>/function.js',
            '<%= config.privateJsIce %>/container.js',
            '<%= config.privateJsPath %>/plugin/minwidth-relocate.min.js',
            '<%= config.privateJsIce %>/relocate.js',
            '<%= config.bower %>/jquery/dist/jquery.min.js',
            '<%= config.bower %>/foundation/js/foundation/foundation.js',
            '<%= config.bower %>/foundation/js/foundation/foundation.abide.js',
            '<%= config.bower %>/foundation/js/foundation/foundation.interchange.js',
            '<%= config.bower %>/foundation/js/foundation/foundation.reveal.js',
            '<%= config.bower %>/slick-carousel/slick/slick.min.js',
            '<%= config.privateJsIce %>/navigation.js',
            '<%= config.privateJsIce %>/grid.js',
            '<%= config.privateJsPath %>/app.js'
        ],
        dest: '<%= config.publicJs %>'
    }
};