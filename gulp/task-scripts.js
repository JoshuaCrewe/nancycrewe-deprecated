module.exports = function(gulp, config) {

    var concat      = require('gulp-concat'),
        plumber     = require('gulp-plumber'),
        uglify      = require('gulp-uglify'),
        notify      = require('gulp-notify'),
        include     = require('gulp-include'),
        browserSync = require('browser-sync'),
        reload      = browserSync.reload;

    gulp.task('scripts', function () {
        var scripts = config.gulp.scripts;

        scripts.forEach(function(jsFile) {
            return gulp.src(jsFile.src)
                .pipe(plumber({
                    errorHandler: notify.onError("Error: <%= error.message %>")
                }))
                .pipe(concat(jsFile.name + '.min.js'))
                .pipe(include())
                .pipe(uglify())
                .pipe(gulp.dest(jsFile.dest))
                .pipe(reload({stream:true}));
        });
    });
};
