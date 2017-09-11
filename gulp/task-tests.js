module.exports = function(gulp, config) {

    gulp.task('test', function () {
        console.log("testing");
    });

    var scsslint     = require('gulp-scss-lint');

    gulp.task('scsslint', function() {
        return gulp.src(config.gulp.tests.scssFiles)
            .pipe(scsslint({
                'maxBuffer': false,
            }));

    });

    var jshint     = require('gulp-jshint'),
        stylish    = require('jshint-stylish');

    gulp.task('jslint', function() {
        return gulp.src(config.gulp.tests.jsFiles)
            .pipe(jshint())
            .pipe(jshint.reporter(stylish));
    });

    var browserSync = require('browser-sync'),
        reload      = browserSync.reload;

    gulp.task('tests', function() {
        gulp.watch(config.gulp.tests.jsFiles, ['jslint']);
        gulp.watch(config.gulp.tests.scssFiles, ['scsslint']);
    });

};
