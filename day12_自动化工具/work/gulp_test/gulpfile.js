/**
 * gulp三大特点
 * - 任务化
 * - 基于数据流
 * - 注册任务时，return：异步 ，不加return：同步
 */
var gulp = require('gulp')
var $ = require('gulp-load-plugins')()

var del = require('del');
var vinylPaths = require('vinyl-paths');
var open = require('open')

// var concat = require('gulp-concat')
// var rename = require('gulp-rename')
// var uglify = require('gulp-uglify')
// var less = require('gulp-less')
// var cleanCss = require('gulp-clean-css')
// var htmlmin = require('gulp-htmlmin')
// var livereload = require('gulp-livereload')
// var connect = require('gulp-connect')


gulp.task('js',function () {
    return gulp.src('./src/js/**/*.js')
        .pipe($.concat('bundle.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe($.rename({suffix:'.min'}))
        .pipe($.uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe($.livereload())
        .pipe($.connect.reload())
})

gulp.task('clean',function () {
    return gulp.src('./dist/')
        .pipe(vinylPaths(del));
})

gulp.task('less' ,function () {
    return gulp.src('./src/less/*.less')
        .pipe($.less())
        .pipe($.rename('test3.css'))
        .pipe(gulp.dest('./src/css/'))
        .pipe($.livereload())
        .pipe($.connect.reload())
})

gulp.task('css',['less'],function () {//添加依赖
    return gulp.src('./src/css/*.css')
        .pipe($.concat('bundle.css'))
        .pipe($.cleanCss())
        .pipe($.rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css/'))
        .pipe($.livereload())
        .pipe($.connect.reload())
})

gulp.task('html',function () {
    gulp.src('index.html')
        .pipe($.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
        .pipe($.livereload())
        .pipe($.connect.reload())
})

//半自动
gulp.task('watch',['default'],function () {
    $.livereload.listen();
    gulp.watch(['./src/css/*.css','src/less/*.less'], ['less','css']);
    gulp.watch('./src/js/*.js', ['js']);
    gulp.watch('./index.html', ['html']);
})

//全自动
gulp.task('server',['default'],function () {
    //配置加载的选项
    $.connect.server({
        root : 'dist/',//提供服务的根路径
        livereload : true,//是否实时刷新
        port : 9001//开启端口号
    });
    // 自动开启链接
    open('http://localhost:9001');//npm install open --save-dev
    // 监视目标文件
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch(['src/css/*.css', 'src/less/*.less'], ['css', 'less']);
    gulp.watch('./index.html', ['html']);
})

//手动打包时执行的任务
gulp.task('default',['js','css','less','html'])