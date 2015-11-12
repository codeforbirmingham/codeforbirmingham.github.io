/*
============================================================
  Stylesheet Config
============================================================
*/

// load config
var config = require('./');

// export settings
module.exports = {
  source: config.assetsPath + '/stylesheets/application.scss',
  destination: './',
  watch: config.assetsPath + '/stylesheets/**/*.scss',
  settings: {
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    csslint: {
      'box-model'          : false,
      'box-sizing'         : false,
      'font-sizes'         : false,
      'important'          : false,
      'regex-selectors'    : false,
      'universal-selector' : false,
      'unique-headings'    : false,
      'qualified-headings' : false
    },
    rename: {
      extname: '.css'
    },
    sass: {
      outputStyle: 'compressed' // nested, expanded, compact, compressed
    }
  }
};
