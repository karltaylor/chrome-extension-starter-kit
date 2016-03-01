var gulp      = require('gulp'),
    jade      = require('gulp-jade'),
    imagemin  = require('gulp-imagemin')

gulp.task('html', function() {
  gulp.src('src/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist'))
})

gulp.task('images', function() {
  gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images/'))
})

gulp.task('copy', function() {
  gulp.src('src/manifest.json')
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['copy', 'html', 'images'])
