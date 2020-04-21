const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const config = require('../config.js');

gulp.task('imagemin', () => {
    return gulp.src(config.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest.img))
});

gulp.task('imagemin:watch', function () {
    gulp.watch(config.watch.img, gulp.task('imagemin'));
});
