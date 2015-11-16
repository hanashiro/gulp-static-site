var gulp = require("gulp");

gulp.task('copy', function(){
    return gulp.src( [
        './dev/font/**/*',
        './dev/js/**/*',
        './dev/css/**/*.css',
        './dev/images/**/*',
        './dev/*.*'

    ], {'base' : './dev' })
        .pipe(gulp.dest('./prod'));
});