module.exports = {
  options: {
    includePaths: ['<%= config.bower %>']
  },
  dist: {
    options: {
      outputStyle: 'expanded',
      sourceMap: true
    },
    files: {
      '<%= config.publicCss %>': '<%= config.privateScss %>/app.scss'
    }
  }
};