var gulp = require('gulp');


gulp.task('watch', function(){
	gulp.watch(['./dev/css/**/*.scss'], ['sass']);

	gulp.watch([
		'./dev/font/**/*',
        './dev/js/**/*',
        './dev/css/**/*.css',
        './dev/images/**/*',
        './dev/*.*'
	], ['copy']);

	gulp.watch([
		'./dev/partials/**/*.html',
		'./dev/templates/**/*.html'
	], ['fileinclude']);
});