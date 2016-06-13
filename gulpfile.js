

 var gulp = require('gulp'),
 sass = require('gulp-sass');

 var raw_css = './src',
 com_css = './build';


 //每个gulp.task(name, fn)都是一个任务配置模块，如本代码段定义了名为"sass"的任务的执行流程
 gulp.task('sass', function () {
 return gulp.src(raw_css+'/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(com_css))
});


gulp.task("serve",['sass'],function() {
    gulp.watch(raw_css+'/**/*.scss',['sass']);
});

gulp.task("default", ["serve"]);


