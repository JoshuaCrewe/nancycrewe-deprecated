module.exports = function(gulp) {

    var timestamp = require('time-stamp');
    var prompt = require('prompt');
    var chalk = require('chalk');
    var path = require('path');
    var shell = require('./utils/shell');

    function getTimestamp(){
      return '['+chalk.grey(timestamp('HH:mm:ss'))+']';
    }

    gulp.task('wp', function(cb) {

        // first prompt for input
        prompt.start();

        // prompt.message = getTimestamp();
        prompt.message = '';

        var project_name = path.basename(process.cwd());

        prompt.get({
            properties: {
                path: {
                    description: 'The path to download WordPress to',
                    default: 'wp'
                },
                theme: {
                    description: 'The name of the theme folder',
                    default: project_name
                },
                db: {
                    description: 'Database name',
                    default: project_name
                }
            }
        }, function(err, result) {

            var args = [
                result.path,
                result.theme,
                result.db
            ];

            shell('./gulp/bin/wp.sh', args, function(code) {
                cb();
            });
        });

    });

};
