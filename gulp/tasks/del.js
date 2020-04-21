const gulp = require('gulp');
const del = require("del")
const config = require('../config.js')

gulp.task('del',(callback)=>{
    return del([config.dest.root], callback);
})