/*
 描述：
 配置文件 | NAV | 2017-12-07

 指南：
 1. 全局安装 gulp：
 npm install -g gulp
 2. 全局安装 browser-sync：
 npm install -g browser-sync
 3. 运行：
 gulp
 */

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
        files: ['index.html', 'css/style.css', 'js/data.js', 'js/script.js']
    })
})

gulp.task('default', ['browser-sync']);