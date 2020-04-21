const gulp = require('gulp');
const sass = require("gulp-sass");
const config = require('../config.js');
const postcss = require('gulp-postcss');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('autoprefixer');

gulp.task("sass",()=>{
    var plugins = [
        autoprefixer()
    ]
    return gulp.src(config.src.css, { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(gulp.dest(config.dest.css));
})

gulp.task("sass:build",()=>{
    var plugins = [
        autoprefixer()
    ]
    return gulp.src(config.src.css)
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(cleanCSS())
        .pipe(gulp.dest(config.dest.css));
})

gulp.task('sass:watch', function () {
    gulp.watch(config.watch.css, gulp.task('sass'));
});