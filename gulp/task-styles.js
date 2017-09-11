module.exports = function(gulp, config) {

    // dependencies
    var autoprefixer = require('gulp-autoprefixer'),
        concat       = require('gulp-concat'),
        cleanCSS     = require('gulp-clean-css'),
        notify       = require('gulp-notify'),
        plumber      = require('gulp-plumber'),
        sass         = require('gulp-sass'),
        scsslint     = require('gulp-scss-lint'),
        sourcemaps   = require('gulp-sourcemaps');


    gulp.task('styles', function() {
        var styles = config.gulp.styles;

        styles.forEach(function(sassFile) {

            return gulp.src(sassFile.src)
                .pipe(plumber({
                    errorHandler: notify.onError("Error: <%= error.message %>")
                }))
                .pipe(sourcemaps.init())
                .pipe(sass()
                    .on('error', sass.logError)
                )
                .pipe(cleanCSS())
                .pipe(concat(sassFile.name + '.min.css'))
                .pipe(autoprefixer('last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
                .pipe(sourcemaps.write('.'))
                .pipe(gulp.dest(sassFile.dest));

        });

    });
};
