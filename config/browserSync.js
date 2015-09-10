module.exports = {
    dev: {
        bsFiles: {
            src: ['**/*.php', 'public/js/*.js', 'public/css/*.css']
        },
        options: {
            proxy: '<%= php.dev.options.hostname %>:<%= php.dev.options.port %>', // our PHP server
            port: 8080, // our new port
            open: true,
            watchTask: true
        }
    }
};