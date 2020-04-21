const gulp = require("gulp");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const config = require('../config.js');


gulp.task("ejs",()=>{
    const devConfig = require('../../src/config/option.json');

    return gulp.src(config.src.html)
    .pipe(ejs({
        isProduction:devConfig.isProduction,
        hash:devConfig.hash
    }))
    .pipe(rename({extname:'.html'}))
    .pipe(gulp.dest(config.dest.html))
})

gulp.task('ejs:watch', function () {
    
    gulp.watch(config.watch.html, gulp.series('ejs','browser-reload'));
});