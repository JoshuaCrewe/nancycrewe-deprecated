module.exports = function(gulp, config) {

    var notify       = require('gulp-notify'),
        svgmin       = require('gulp-svgmin'), 
        plumber      = require('gulp-plumber');

    gulp.task('svg', function(){
        return gulp.src( config.gulp.svg.src )
            .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
            .pipe(svgmin({ js2svg: { pretty: true } }))
            .pipe(gulp.dest(config.gulp.svg.dest));
    });
};
