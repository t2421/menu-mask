module.exports = {
    copy: {
      'root': 'src/copy/**/*'
    },
    src: {
        'root': 'src',
        'html': ['src/compile/ejs/**/*.ejs', '!src/compile/ejs/**/_*.ejs'],
        'css': ['src/compile/styles/**/*scss','!src/compile/styles/**/_*scss'],
        'img':  ['src/compile/images/**/*','!src/compile/images/_**/*'],
      },
      dest: {
        'root': 'build',
        'html':      'build', 
        'css':       'build/styles',
        'img':       'build/images'
      },
      watch: {
        'html':  'src/compile/ejs/**/*.ejs',
        'css': 'src/compile/styles/**/*.scss',
        'img':  'src/compile/images/**/*',
        'js': 'src/compile/scripts/**/*.js',
        'copy': 'src/copy/**/*'
      },
      imagemin: {
        pngquant:{
          quality:  [ 0.60, 0.8 ]
        },
        src: ['src/compile/**/*.{gif,jpeg,jpg,png,webp}','!**/_*/**'],
        watch: ['src/compile/**/*.{gif,jpeg,jpg,png,webp}','!**/_*/**'],
        dest: 'build'
      }
};