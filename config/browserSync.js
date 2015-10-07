module.exports = {
    dev: {
        bsFiles: {
            src: ['**/*.php', '<%= config.publicJsPath %>/*.js', '<%= config.publicCssPath %>/*.css']
        },
        options: {
            proxy: '<%= php.dev.options.hostname %>:<%= php.dev.options.port %>', // our PHP server
            port: 8080, // our new port
            open: true,
            watchTask: true
        }
    }
};