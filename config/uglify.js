module.exports = {
    my_target: {
        options: {
            sourceMap: true,
            sourceMapName: 'public/js/app.min.map'
        },
        files: {
            'public/js/app.min.js': ['public/js/app.min.js']
        }
    }
};