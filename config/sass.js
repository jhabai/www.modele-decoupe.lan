module.exports = {
  options: {
    includePaths: ['<%= config.bower %>/foundation/scss']
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