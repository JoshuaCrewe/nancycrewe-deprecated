module.exports = function(cmd, args, cb) {

    var spawn = require('child_process').spawn;
    var gutil = require('gulp-util');

    var args = args || [];

    var child = spawn(cmd, args, {
        cwd: process.cwd()
    });

    var stdout = '';
    var stderr = '';

    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function(data) {
        stdout += data;
        gutil.log(data.replace(/\n$/, ''));
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function(data) {
        stderr += data;
        gutil.log(gutil.colors.red(data.replace(/\n$/, '')));
        gutil.beep();
    });

    child.on('close', cb);
};
