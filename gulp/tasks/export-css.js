/*
============================================================
  Export Stylesheets
============================================================
*/

// load config
var config = require('../config/css');

// load dependencies
var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    csslint      = require('gulp-csslint'),
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass'),
    util         = require('gulp-util');

// customize logger
var cssLintLog = function(file) {

  util.log(util.colors.magenta(file.csslint.errorCount) + ' errors in ' + util.colors.magenta(file.path));

  file.csslint.results.forEach(function(result) {

    var errorLocation = (!result.error.rollup) ? result.error.line + ':' + result.error.col : 'Warning',
        errorMessage  = (result.error.message) ? result.error.message : 'N/A',
        errorLog      = (result.error.type === "error") ? '[' + util.colors.red(errorLocation) + '] ' + errorMessage : '[' + util.colors.yellow(errorLocation) + '] ' + errorMessage;

    util.log(errorLog);

  });

};

// run task
gulp.task('export:css', function() {

  return gulp.src(config.source)
    .pipe(sass(config.settings.sass).on('error', sass.logError))
    .pipe(autoprefixer(config.settings.autoprefixer))
    .pipe(csslint(config.settings.csslint))
    .pipe(csslint.reporter(cssLintLog))
    .pipe(rename(config.settings.rename))
    .pipe(gulp.dest(config.destination));

});
