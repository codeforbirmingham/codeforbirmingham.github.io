/*
============================================================
  Watch Assets
============================================================
*/

// load config
var js  = require('../config/js'),
    css = require('../config/css');

// load dependencies
var gulp = require('gulp');

// watch javascripts
gulp.task('watch:js', function() {
  return gulp.watch(js.watch, ['export:js']);
});

// watch stylesheets
gulp.task('watch:css', function() {
  return gulp.watch(css.watch, ['export:css']);
});

// watch all
gulp.task('watch:all', ['watch:js', 'watch:css']);
