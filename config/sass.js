module.exports = {
  options: {
    includePaths: ['bower_components/foundation/scss']
  },
  dist: {
    options: {
      outputStyle: 'compressed',
      sourceMap: true
    },
    files: {
      'css/app.min.css': 'scss/app.scss'
    }
  }
};