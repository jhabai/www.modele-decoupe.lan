module.exports = {
  scripts: {
    files: ['js/*.js', 'js/**/*.js'],
    tasks: ['concat', 'notify:concat'],
    options: {
      spawn: false
    }
  },
  sass: {
    files: 'scss/**/**/*.scss',
    tasks: ['sass', 'notify:sass']
  }
};