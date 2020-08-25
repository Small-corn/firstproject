var gulp=require("gulp");
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var babel = require("gulp-babel");
var nokey = require("gulp-tinypng-nokey");

//如何布置任务以及执行任务
//gulp.task("default",()=>{
//	console.log("跳舞");
//})
//gulp.task("eat",()=>{
//	console.log("吃饭");
//})
//gulp.task("sleep",()=>{
//	console.log("睡觉");
//})

//复制所有人
//gulp.task("copy",()=>{
//	gulp.src("src/*/*")
//		.pipe(gulp.dest("dist"))
//})

//复制 并 压缩css
//gulp.task("copymincss",()=>{
//	gulp.src("src/css/*")
//		.pipe(cssmin())
//		.pipe(gulp.dest("dist"))
//})

//复制 并 压缩 并 降级js
//gulp.task("copyminjs",()=>{
//	gulp.src("src/js/*")
//		.pipe(babel())
//		.pipe(uglify())
//		.pipe(gulp.dest("dist"))
//})

//图片压缩
//gulp.task("minimg",()=>{
//	gulp.src("src/img/*")
//		.pipe(nokey())
//		.pipe(gulp.dest("dist"))
//})

gulp.task("perfect",()=>{
	gulp.src("src/*/*.css")
		.pipe(cssmin())
		.pipe(gulp.dest("dist"))
		
	gulp.src("src/*/*.js")
		.pipe(babel())
		.pipe(uglify())
		.pipe(gulp.dest("dist"))
		
	gulp.src("src/*/*.{png,jpg,jpeg,gif,ico}")
		.pipe(nokey())
		.pipe(gulp.dest("dist"))
		
	gulp.src("src/*/*.html")
		.pipe(gulp.dest("dist"))
})


