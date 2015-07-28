var gulp = require('gulp'),
    cssVersioner = require('gulp-css-url-versioner');
    randomVersion = Math.floor(Math.random() * 10000) + 1;

gulp.task('styles', function () {
    return gulp.src('public/css/app.min.css')
    .pipe(cssVersioner({
        version: randomVersion
    }))
    .pipe(gulp.dest('public/css/'));
});