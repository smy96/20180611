var gulp = require("gulp");
var server = require("gulp-webserver");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var minCss = require("gulp-clean-css");
var minJs = require("gulp-uglify");
var minHtml = require("gulp-htmlmin");
gulp.task("mincss", function() {
    gulp.src("src/css/*.scss")
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest("build/css"))
});
gulp.task("minjs", function() {
    gulp.src("src/js/*.js")
        .pipe(minJs())
        .pipe(gulp.dest("build/js"))
});
gulp.task("minhtml", function() {
    gulp.src("src/*.html")
        .pipe(minHtml({
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('build'))
});
gulp.task("server", function() {
    gulp.src("src")
        .pipe(server({
            port: 9090,
            middleware: function(req, res, next) {
                next()
            }
        }))
});

gulp.task("default", ["mincss", "minjs", "minhtml", "server"])
    // 1.使用gulp搭建前端环境  10分
    // 2.编写gulpfile.js文件   5分
    // 3.实现开发环境构建（less或者scss编译） 10分
    // 4.启动服务10分
    // 5.实现线上环境开发（less或者scss编译，css文件合并压缩） 10分
    // 6.实现线上环境开发（js文件合并压缩） 10分
    // 7.在 package 文件中scripts字段添加dev  和 build 两个命令  10分
    // 8.使用git关联远程仓库  5分
    // 9.在项目初始化，项目开发环境构建完成，项目运行环境构建完成，测试修改完成，都要使用git commit –m ‘’  10分
    // 10.测试无bug  10分
    // 11.代码注释清晰  10分