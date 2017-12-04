// 引入插件
var gulp=require('gulp'),
    imgmin=require('gulp-imagemin'),
    cssmin=require('gulp-cssmin'),
    htmlmin=require('gulp-minify-html'),
    jsmin=require('gulp-uglify');
    // 压缩打包
gulp.task('css',function(){
    gulp.src('./css/*css')
    .pipe(cssmin())
    .pipe(gulp.dest('./releases/css'));
});
// 压缩html
gulp.task('html',function(){
    gulp.src('./*html')
    .pipe(htmlmin())
    .pipe(gulp.dest('./releases'));
});
//压缩图片
gulp.task('img',function(){
    gulp.src('./images/*')
    .pipe(imgmin())
    .pipe(gulp.dest('./releases/images'));
});
// 压缩js
gulp.task('js',function(){
    gulp.src('./js/*')
    .pipe(jsmin())
    .pipe(gulp.dest('./releases/js'));
})