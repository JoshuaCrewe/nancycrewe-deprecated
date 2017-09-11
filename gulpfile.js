var gulp   = require('gulp');
var config = require('./project.json');

require('./gulp/task-server')(gulp, config);
require('./gulp/task-styles')(gulp, config);
require('./gulp/task-scripts')(gulp, config);
require('./gulp/task-images')(gulp, config);
require('./gulp/task-svg')(gulp, config);
require('./gulp/task-watch')(gulp, config);

require('./gulp/task-tests')(gulp, config);

require('./gulp/task-wp')(gulp, config);

// command line tasks
// build our app
gulp.task('build', ['styles', 'scripts']);
// Optimize media
gulp.task('media', ['images', 'svg']);
// server our app
gulp.task('serve', ['build', 'server']);
// default task
gulp.task('default', ['build', 'media', 'server', 'watch']);
