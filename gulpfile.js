var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('start', function() {

  return gulp.src('dist/scss/style.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
      .pipe(autoprefixer({
            browsers: ['last 100 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))

});
