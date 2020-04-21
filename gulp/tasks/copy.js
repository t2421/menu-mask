const gulp = require('gulp');
const config = require('../config.js')

gulp.task('copy',(callback)=>{
    return gulp.src(config.copy.root)
    .pipe(gulp.dest(config.dest.root))
})

gulp.task('copy:watch', function () {
    gulp.watch(config.watch.copy, gulp.series('copy','browser-reload'));
});