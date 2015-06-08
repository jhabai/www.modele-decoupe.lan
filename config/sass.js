module.exports = {
  options: {
    includePaths: ['private/vendor/foundation/scss']
  },
  dist: {
    options: {
      outputStyle: 'expanded',
      sourceMap: true
    },
    files: {
      'public/css/app.min.css': 'private/scss/app.scss'
    }
  }
};