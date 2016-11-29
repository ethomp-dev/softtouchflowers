var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var exec = require('child_process').exec;

gulp.task('styles', function() {
  return sass('public/css/scss/*.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('scripts', function() {
  return gulp.src('public/js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

gulp.task('ejs',function(){
    return gulp.src('views/*.ejs');
});

// setup watch for livereload, sass, ejs, js
gulp.task('watch', function() {
    gulp.watch('public/css/**/*.scss', ['styles']);
    gulp.watch('public/js/*.js', ['scripts']);
    gulp.watch('views/*.ejs', ['ejs']);
});

gulp.task('server',function(){
    nodemon({
       'ignore': 'public/js/*.js'
    });

    exec('nodemon ./bin/www', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
    });
});

gulp.task('serve', ['server','watch']);
