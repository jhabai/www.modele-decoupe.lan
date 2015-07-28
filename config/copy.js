module.exports = {
    main: {
        files: [{
            expand: true,
            src: [
                'config/*',
                'includes/**/*',
                'private/scss/**',
                'private/js/**',
                'public/**/*',
                '*.php',
                '*.json',
                '*.js',
                '.bowercc'
            ],
            dest: 'V:/www.modele-decoupe.lan/str'
        },
        ],
    }
};