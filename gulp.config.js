'use strict';

var bowerResolve = require('bower-resolve'),
    bowerDeps = require('./bower.json').dependencies;

var srcRoot = 'src/',
    buildRoot = 'build/';

bowerDeps = Object.keys(bowerDeps);

var files = {
  js: {
    app: {
      glob: srcRoot + 'js/**/*.js',
      src: srcRoot + 'js/index.js',
      build: 'app.js'
    },
    vendor: {
      build: 'vendor.js'
    }
  }
};

var dirs = {
  build: buildRoot,
  js: buildRoot + 'js/'
};

module.exports = {
  files: files,
  dirs: dirs,
  bowerDeps: bowerDeps
};
