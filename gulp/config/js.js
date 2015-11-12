/*
============================================================
  JavaScript Config
============================================================
*/

// load config
var config = require('./');

// export settings
module.exports = {
  source: config.assetsPath + '/javascripts/**/*.js',
  destination: './',
  watch: config.assetsPath + '/javascripts/**/*.js',
  settings: {}
};
