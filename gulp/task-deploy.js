module.exports = function(gulp) {

    var prompt = require('prompt');
    var chalk = require('chalk');
    var path = require('path');
    var shell = require('./utils/shell');

    gulp.task('deploy', function(cb) {

        // first prompt for input
        prompt.start();

        // prompt.message = getTimestamp();
        prompt.message = '';

        var project_name = path.basename(process.cwd());

        prompt.get({
            properties: {
                username: {
                    description: 'The username for the remote host',
                    default: project_name
                },
                url: {
                    description: 'The URL for the remote host',
                    default: '217.115.119.177'
                },
                password: {
                    description: 'The password for the remote host',
                    default: ' '
                }
            }
        }, function(err, result) {

            var args = [
                result.username,
                result.url,
                result.password
            ];

            shell('./gulp/bin/deploy.sh', args, function(code) {
                cb();
            });
        });
    });

};
