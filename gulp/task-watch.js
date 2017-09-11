module.exports = function(gulp, config) {

    var browserSync = require('browser-sync'),
        reload      = browserSync.reload;

    gulp.task('watch', function() {
        for(var src in config.gulp.watch) {
            gulp.watch(src, config.gulp.watch[src]);
        }
        gulp.watch('**/*.php', reload);
    });

};
