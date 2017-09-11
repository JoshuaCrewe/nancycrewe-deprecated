module.exports = function(gulp, config) {

    var browserSync = require('browser-sync'),
        reload      = browserSync.reload;

    gulp.task('server', function() {

        browserSync.init({
            proxy: 'localhost',
            notify: false,
            files: [config.gulp.server.files],
            open: false,
        });
    });

};
