module.exports = {
  options: {
    includePaths: ['bower_components/foundation/scss']
  },
  dist: {
    options: {
      outputStyle: 'expanded',
      sourceMap: true
    },
    files: {
      'css/app.min.css': 'scss/app.scss'
    }
  }
};