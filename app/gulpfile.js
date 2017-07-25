/*
* @Author: MIse
* @Date:   2017-05-24 15:03:43
* @Last Modified by:   MIse
* @Last Modified time: 2017-05-24 19:21:33
*/

/**
 * packpage 已经包含了这些模块 npm执行cnpm install 即可
 * 需要替换的就是将文件保存目录和文件源目录替换即可
 * 执行命令 gulp bulid ---- 压缩、打包html/css/js文件
 * 执行命令 gulp ---- 启用browsersync服务，自动刷新
 * 执行命令 gulp autoBulidserve ---- 自动将less等转回css、文件变化时自动刷新
 *
 * uglify ---- js压缩模块
 * concat ---- js合并模块
 * cssnano ---- css压缩模块
 * less ---- less文件编译
 * imagemin ---- 图片压缩模块
 * htmlmin ---- html压缩模块
 * del ---- 文件删除模块
 */

'use strict';

var gulp = require('gulp');                     //获取gulp
var browsersync = require('browser-sync')       //获取browsersync

//删除dist目录下文件
var del = require('del');
gulp.task('clean',function(cb){
    return del([
        'dist/*',           //我们希望把这个目录清除掉
        '!dist/framework',   //不希望把这个目录清除掉，所以取反
        '!dist/json'
    ],cb);
})

//操作js文件
var uglify = require('gulp-uglify');               //js压缩模块
var concat = require('gulp-concat');               //js合并模块
gulp.task('scripts', function() {
    gulp.src('js/*.js')               //您的源文件
        .pipe(uglify())               //压缩js文件
        .pipe(concat('app.js'))       //将js压缩并更名为app.js
        .pipe(gulp.dest('dist/js'))   //把已经压缩好的文件放到dist/js目录下
        .pipe(browsersync.stream());  //文件更新自动执行
});

//操作css文件
var cssnano = require('gulp-cssnano');    //css压缩模块
//var less=require('gulp-less')           //less文件编译模块
gulp.task('style', function() {
    gulp.src('style/*.css')
       // .pipe(less())                   //执行编译less文件
        .pipe(cssnano())                  //css文件压缩
        .pipe(gulp.dest('dist/style'))
        .pipe(browsersync.stream());
});

//操作图片  没有启动，因为在后面73行gulp.start的时候没有配置进去
var imagemin = require('gulp-imagemin');    //图片压缩模块
gulp.task('image', function() {
    gulp.src('img/*.{png,jpg,jpeg,gif}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        .pipe(browsersync.stream());
});

var htmlmin = require('gulp-htmlmin');      //html压缩模块
gulp.task('html', function() {
    gulp.src('**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,            //压缩html
            collapseBooleanAttributes: true,     //省略布尔属性的值
            removeComments: true,                //清除html注释
            removeEmptyAttributes: true,         //删除所有空格作为属性值
            removeScriptTypeAttributes: true,    //删除type=text/javascript
            removeStyleLinkTypeAttributes: true, //删除type=text/css
            minifyJS:true,                       //压缩页面js
            minifyCSS:true                       //压缩页面css
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browsersync.stream());
});

/**
 * gulp.task是自定义任务，browser-sync是任务的名称
 * 最下面gulp.task default 是定义默认任务.
 *
 * gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
 *
 * gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
 *
 * gulp.dest(path[, options]) 处理完后文件生成路径
 */

/**
 * gulp bulid
 * 压缩js/html/css文件，并合并js文件
 * 当显示Finished 'bulid'的字眼后,可按ctrl+c退出。
 */
gulp.task('bulid', ['clean'], function() {  //clean 是bulid的依赖
    gulp.start('scripts','style','html');   //clean 会在你任务之前完成
})

/**
 * gulp antoBulidserve
 * 执行首先清除目录文件，然后压缩js/html/css文件,当保存的时候自动刷新，重新生成
 *
 * 未完成未完成未完成未完成未完成未完成未完成未完成
 */
gulp.task('autoBulidserve', ['clean'], function() {
    gulp.start('scripts','style','image','html');
    browsersync.init({
        port: 3000,
        server: {
            baseDir: ['./']
        }
    });
    gulp.watch('js/*.js', ['scripts']);         //如果文件变化，则自动刷新
    gulp.watch('style/*.css', ['style']);
    gulp.watch('images/*.*', ['image']);
    gulp.watch('**/*.html', ['html']);
});

gulp.task('serve',function() {
    browsersync.init({
        port: 3000,
        server: {
            baseDir: ['./']
        }
    });
    gulp.watch('**/*.html').on('change',browsersync.reload);
    gulp.watch('**/*.js').on('change',browsersync.reload);
    gulp.watch('**/*.css').on('change',browsersync.reload);
});



gulp.task('default',['serve']); //定义默认任务