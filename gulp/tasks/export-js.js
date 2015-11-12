/*
============================================================
  Export JavaScripts
============================================================
*/

// load config
var config = require('../config/js');

// load dependencies
var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    eslint = require('gulp-eslint'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

// run task
gulp.task('export:js', function() {

  return gulp.src(config.source)
    .pipe(concat('application.js'))
    .pipe(eslint())
    .pipe(uglify())
    .pipe(gulp.dest(config.destination));

});
