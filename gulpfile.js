var gulp = require('gulp');
require('require-dir')('./gulp');


gulp.task('default',['serve']);


gulp.task('compile', ['fileinclude', 'sass', 'copy']);

gulp.task('minify-all', ['uglify-js','minify-css','minify-html']);

gulp.task('serve', ['compile','watch','server']);

gulp.task('build', ['compile'], function(){
	gulp.start('minify-all');
});