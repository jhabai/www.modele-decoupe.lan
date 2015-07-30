module.exports = {
    dist: {
        src: [
            'private/js/_setting.js',
            'private/js/ice/function.js',
            'private/js/ice/container.js',
            'private/js/plugin/minwidth-relocate.min.js',
            'private/js/ice/relocate.js',
            'private/vendor/jquery/dist/jquery.min.js',
            'private/vendor/foundation/js/foundation/foundation.js',
            'private/vendor/foundation/js/foundation/foundation.equalizer.js',
            'private/vendor/foundation/js/foundation/foundation.interchange.js',
            'private/vendor/slick-carousel/slick/slick.min.js',
            'private/js/ice/navigation.js',
            'private/js/ice/grid.js',
            'private/js/app.js'
        ],
        dest: 'public/js/app.min.js'
    }
};