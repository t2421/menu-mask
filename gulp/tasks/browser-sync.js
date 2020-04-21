const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const config = require('../config.js');

gulp.task("serve",(callback)=>{
   browsersync.init({
       server:{
           baseDir:config.dest.root
       }
   });
   callback();
})

gulp.task("browser-reload",(callback) =>{
    browsersync.reload();
    callback();
})
