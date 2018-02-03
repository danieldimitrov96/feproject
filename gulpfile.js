/* eslint-disable */

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
const babel = require('gulp-babel');


// Minify compiled CSS
gulp.task('minify-css', function () {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/css'))
});

//copy ready min.js files
gulp.task('copy-js', function () {
  return gulp.src('js/min/*.js')
    .pipe(gulp.dest('dist/js'))
});

//minify + babel js
gulp.task('minify-js', function () {
  return gulp.src('js/*.js') 
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/js'))
});


//watch
gulp.task('watch', function () {
  gulp.watch('js/*.js',  gulp.series('minify-js'));
  gulp.watch('css/*.css', gulp.series('minify-css'));
});