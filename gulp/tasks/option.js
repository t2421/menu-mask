const gulp = require('gulp');
const md5 = require('md5');
const now = new Date();
const hash = md5(now.toString());
const outputPath = 'src/config';
const outputFile = 'option.json';

var fs = require("fs");

gulp.task('createOptions', function(callback) {
    var option = {};
    var isProduction = false;

    if(fs.existsSync(`./${outputPath}/${outputFile}`)){
        option = require(`../../${outputPath}/${outputFile}`);
    }
    
    if(process.env.NODE_ENV == "production"){
        var isProduction = true;
    }
    
    option.hash = hash;
    option.isProduction = isProduction;
    
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath);
    }
    fs.writeFileSync(`${outputPath}/${outputFile}`, JSON.stringify(option));
    callback();
});

