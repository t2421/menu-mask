const gulp = require('gulp');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
var webpackConfig = require("../../webpack.config");
const config = require('../config.js');

gulp.task('webpack',()=>{
    if(process.env.NODE_ENV == "production"){
        webpackConfig = require("../../webpack.prod.config");
    }else{
        webpackConfig = require("../../webpack.dev.config");
    }
    return webpackStream(webpackConfig,webpack)
    .pipe(gulp.dest(config.dest.root))
});

gulp.task('webpack:watch', function () {
    gulp.watch(config.watch.js, gulp.series('webpack','browser-reload'));
}); 