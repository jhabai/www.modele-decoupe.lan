module.exports = {
    my_target: {
        options: {
            sourceMap: true,
            sourceMapName: '<%= config.publicJsPath %>/app.min.map'
        },
        files: {
            '<%= config.publicJs %>': ['<%= config.publicJs %>']
        }
    }
};