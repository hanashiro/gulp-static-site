var gulp = require("gulp"),
	path = require("path"),
    fileinclude = require('gulp-file-include');



// fileinclude: grab partials from templates and render out html files
// ==========================================
gulp.task('fileinclude', function() {
  return  gulp.src(path.join('./dev/templates/', '*.html'))
  	.pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(fileinclude())
    .pipe(gulp.dest('./prod/'));
});