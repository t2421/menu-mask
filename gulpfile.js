const gulp = require("gulp");
const requireDir = require('require-dir');
requireDir('./gulp/tasks',{recurse:true});

gulp.task('watch',
    gulp.series(
        gulp.parallel('webpack:watch','sass:watch','ejs:watch','imagemin:watch','copy:watch')
    )
);

gulp.task('default',
    gulp.series(
        'set-dev-node-env',
        //'createOptions',
        'serve',
        gulp.parallel('webpack','sass','ejs','imagemin','copy'),
        'watch'
    )
);

gulp.task('build',
    gulp.series(
        'set-prod-node-env',
        'createOptions',
        'del',
        gulp.parallel('webpack','sass:build','ejs','imagemin','copy')
    )
);