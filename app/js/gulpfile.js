/*
* @Author: MIse
* @Date:   2017-05-24 15:03:43
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-24 15:40:20
*/

'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

/**
 * gulp.task是自定义任务，browser-sync是任务的名称
 * 最下面gulp.task default 是定义默认任务，
 */

//静态服务器
gulp.task('browser-sync',function(){

    browserSync.init({
        server:{
            baseDir:"./"
        }
    });

    gulp.watch("**/*.html").on('change', browserSync.reload);
    gulp.watch("**/*.js", ['js'])
})

gulp.task('default',['browser-sync']); //定义默认任务