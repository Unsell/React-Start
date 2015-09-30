var gulp = require('gulp');
var sass = require('gulp-sass');
var pre = require('gulp-autoprefixer');

gulp.task('sass',function(){
    gulp.src('style/*.scss')
        .pipe(sass())
	.pipe(pre())
	.pipe(gulp.dest('css/'));
})
gulp.task('default',function() {
  console.log('123');

})


gulp.task('watch',function(){

   gulp.watch('style/*.scss',['sass']);
})
