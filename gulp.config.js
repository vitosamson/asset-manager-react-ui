'use strict';

var srcRoot = 'src/',
    buildRoot = 'build/',
    bowerRoot = 'bower_components/',
    npmRoot = 'node_modules/';

var app = {
  js: {
    glob: srcRoot + 'js/**/*.js',
    src: srcRoot + 'js/index.js',
    build: 'app.js'
  },
  html: buildRoot + 'index.html'
};

var vendorScripts = [
  bowerRoot + 'jquery/dist/jquery.min.js',
  bowerRoot + 'react/react.js',
  bowerRoot + 'react-router/build/umd/ReactRouter.js',
  bowerRoot + 'semantic-ui/dist/semantic.js',
  bowerRoot + 'reflux/dist/reflux.js',
  npmRoot + 'react-semantify/dst/react-semantify.js',
  npmRoot + 'moment/moment.js',
  npmRoot + 'lodash/index.js',
  npmRoot + 'restful.js/dist/restful.min.js'
];

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
  'react-semantify': 'Semantify',
  'reflux': 'Reflux',
  'jQuery': '$',
  'moment': 'moment',
  'lodash': '_',
  'restful.js': 'restful'
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
    },
    devtool: 'inline-source-map'
  }
};

module.exports = {
  app: app,
  vendor: vendor,
  dirs: dirs,
  webpack: webpack
};
