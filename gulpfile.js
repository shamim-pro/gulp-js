var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var uglify = require('gulp-uglify');


gulp.task('css', function(){
//   console.log('hello how are you');
    return gulp.src('assets/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
});

gulp.task('cssmin', function(){
    //   console.log('hello how are you');
        return gulp.src('assets/scss/style.scss')
            .pipe(uglifycss())
            .pipe(gulp.dest('assets/css'))
});

gulp.task('jsmin', function(){
    //   console.log('hello how are you');
        return gulp.src('assets/scss/script.scss')
            .pipe(uglify())
            .pipe(gulp.dest('assets/js'))
});
 
