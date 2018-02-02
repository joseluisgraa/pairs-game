var gulp = require('gulp');
var gls = require('gulp-live-server');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var copy = require('gulp-copy');

gulp.task('express', ['build'], function () {
    var server = gls.new('config/server.js');
    server.start();

    // Restart the server when file changes
    //gulp.watch(['src/**/*'], server.notify);
});

gulp.task('build', ['sass'], function(){
    return gulp.src('src/**/!(*.scss)*')
        .pipe(copy('build',{prefix:1}));
});

gulp.task('sass', ['clean'],  function () {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('clean', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});

// define tasks here
gulp.task('default', function(){
    // run tasks here
    // set up watch handlers here
});