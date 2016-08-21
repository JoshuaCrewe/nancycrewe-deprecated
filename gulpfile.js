var gulp   = require('gulp'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  imageMin = require('gulp-imagemin'),
  minifyCSS = require('gulp-minify-css'),
  notify = require('gulp-notify'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  svgmin = require('gulp-svgmin'),
  include = require("gulp-include");

var src = {
  sass: 'assets/src/sass/**/*.scss',
  css: 'assets/css/**.css',
  js:  'assets/src/js/app.js',
  php: '**/*.php',
  images: 'assets/src/img/**/*',
  svg: 'assets/src/svg/**/*'
};

var dest = {
  js: 'assets/js',
  css: 'assets/css',
  images: './assets/img',
  svg: 'assets/svg'
};

gulp.task('bs', function() {
  browserSync.init({
    /*
       Heads Up:
       This assumes your are running WordPress fine on port 80 with something like MAMP or XAMP
       You might need to change this to localhost:8888 if you are running on a different port
       */
    proxy: 'http://localhost:8888',
    notify: false,
    files: [src.css],
    open: false
  });
});

gulp.task('styles', function() {
  return gulp.src(src.sass)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sourcemaps.init())
    .pipe(sass()
      .on('error', sass.logError)
    )
    .pipe(minifyCSS())
    .pipe(concat('app.min.css'))
    .pipe(autoprefixer('last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest.css));
});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('scripts', function () {
  return gulp.src(src.js)
    .pipe(plumber({
      errorHandler: handleError
    }))
    .pipe(concat('app.min.js'))
    .pipe(include())
    .pipe(uglify())
    .pipe(gulp.dest(dest.js))
    .pipe(reload({stream:true}));
});

gulp.task('images', ['svg'], function () {
  return gulp.src(src.images)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(imageMin())
    .pipe(gulp.dest(dest.images));
});

gulp.task('svg', function(){
  return gulp.src(src.svg)
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(gulp.dest(dest.svg));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch(src.sass, ['styles']);
  gulp.watch(src.js, ['scripts']);
  gulp.watch('assets/src/js/**/_*.js', ['scripts']);
  gulp.watch(src.svg, ['svg']);
  gulp.watch(src.php, reload);
});

gulp.task('default', ['styles', 'scripts', 'images', 'bs', 'watch']);
