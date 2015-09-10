module.exports = {
    scripts: {
        files: ['private/js/*.js', 'private/js/**/*.js'],
        tasks: ['concat', 'notify:concat'],
        options: {
            spawn: false
        }
    },
    sass: {
        files: 'private/scss/**/**/*.scss',
        tasks: ['sass', 'notify:sass']
    }
};