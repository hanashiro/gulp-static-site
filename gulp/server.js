var gulp = require('gulp'),
    gls = require('gulp-live-server');


gulp.task('server', function() {
    var sources = [
        './prod/**/*.html',
        './prod/**/*.css',
        './prod/**/*.js'
    ];

    var server = gls.static('./prod/',process.env.PORT, process.env.IP);
    server.start();

    //use gulp.watch to trigger server actions(notify, start or stop)
    return gulp.watch(sources, function (file) {
        server.notify.apply(server, [file]);
    });
}); 