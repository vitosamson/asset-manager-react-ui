'use strict';

var srcRoot = 'src/',
    buildRoot = 'build/',
    bowerRoot = 'bower_components/';

var app = {
  js: {
    glob: srcRoot + 'js/**/*.js',
    src: srcRoot + 'js/index.js',
    build: 'app.js'
  },
  html: buildRoot + 'index.html'
};

var vendorScripts = [
  'jquery/dist/jquery.min.js',
  'react/react.min.js',
  'react-router/build/umd/ReactRouter.min.js',
].map(function(s) { return bowerRoot + s; });

var vendorCss = [
  'semantic-ui/dist/semantic.min.css',
].map(function(f) { return bowerRoot + f; });

var vendor = {
  js: {
    src: vendorScripts,
    build: 'vendor.js'
  },
  css: {
    src: vendorCss,
    build: 'vendor.css'
  }
};

var dirs = {
  build: buildRoot,
  js: buildRoot + 'js/',
  styles: buildRoot + 'css/'
};

var externals = {
  'react': 'React',
  'react-router': 'ReactRouter',
  'jQuery': '$'
};

var webpack = {
  bundle: {
    externals: externals,
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }
};

module.exports = {
  app: app,
  vendor: vendor,
  dirs: dirs,
  webpack: webpack
};
