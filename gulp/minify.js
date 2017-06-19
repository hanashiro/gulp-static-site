var gulp = require("gulp"),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-clean-css'),
    minifyHTML = require('gulp-minify-html');


gulp.task('uglify-js', function() {
  return gulp.src( [
        './prod/js/**/*.js',

    ], {'base' : './prod/' })
    .pipe(uglify())
    .pipe(gulp.dest('./prod'));
});



gulp.task('minify-css', function() {
  return gulp.src( [
        './prod/css/**/*.css',

    ], {'base' : './prod/' })
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./prod'));
});



gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src( [
        './prod/**/*.html',

    ], {'base' : './prod/' })
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./prod'));
});