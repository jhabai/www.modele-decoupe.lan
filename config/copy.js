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
                '.bowerrc'
            ],
            dest: '<%= config.copy %>'
        },
        ],
    }
};