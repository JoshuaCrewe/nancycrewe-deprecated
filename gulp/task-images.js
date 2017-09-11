module.exports = function(gulp, config) {

    var imageMin = require('gulp-imagemin'), // Images
        notify   = require('gulp-notify'),
        plumber  = require('gulp-plumber'); // styles / scripts

    gulp.task('images', function () {
        return gulp.src(config.gulp.images.src)
            .pipe(plumber({
                errorHandler: notify.onError("Error: <%= error.message %>")
            }))
            .pipe(imageMin())
            .pipe(gulp.dest(config.gulp.images.dest));
    });

};
