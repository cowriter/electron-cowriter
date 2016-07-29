// get the dependencies
var gulp      = require('gulp'),   
childProcess  = require('child_process'), 
ts            = require("gulp-typescript");
electron      = require('electron-prebuilt');


gulp.task("tsc", function () {
    var tsResult = gulp.src("*.ts")
        .pipe(ts({
              noImplicitAny: true,
        }));
    return tsResult.js.pipe(gulp.dest("./"));
});

// create the gulp task
gulp.task('run',["tsc"], function () { 
  childProcess.spawn(electron, ['--debug=5858','.'], { stdio: 'inherit' }); 
});

gulp.task('default', ['run']);