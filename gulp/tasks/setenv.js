const gulp = require('gulp');

gulp.task('set-dev-node-env', function(callback) {
    process.env.NODE_ENV = 'development';
    callback();
});

gulp.task('set-prod-node-env', function(callback) {
    process.env.NODE_ENV = 'production';
    callback();
});