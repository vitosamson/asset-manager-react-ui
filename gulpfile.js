'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    browserSync = require('browser-sync'),
    reactify = require('reactify'),
    plugins = require('gulp-load-plugins')(),
    sourceStream = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    bowerResolve = require('bower-resolve'),
    config = require('./gulp.config.js');

gulp.task('build:js:app', function() {
  var b = browserify({
    entries: [config.files.js.vendor.src, config.files.js.app.src],
    debug: true,
    transform: [reactify],
  });

  config.bowerDeps.forEach(function(dep) {
    b.external(dep);
  });

  return b.bundle()
    .pipe(sourceStream(config.files.js.app.build))
    .pipe(buffer())
    .pipe(plugins.sourcemaps.init({loadMaps: true}))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(config.dirs.js));
});

gulp.task('js:app:watch', ['build:js:app'], reload);

gulp.task('build:js:vendor', function() {

  var b = browserify({
    debug: true
  });

  config.bowerDeps.forEach(function(dep) {
    var path = bowerResolve.fastReadSync(dep);
    b.require(path, {
      expose: dep
    });
  });

  return b.bundle()
    .pipe(sourceStream(config.files.js.vendor.build))
    .pipe(buffer())
    .pipe(gulp.dest(config.dirs.js));
});

gulp.task('watch', function() {
  gulp.watch(config.files.js.app.glob,    ['js:app:watch']);

  browserSync.init({
    open: false,
    notify: false,
    port: 3001,
    server: {
      baseDir: config.dirs.build
    }
  });
});

gulp.task('build', [
  'build:js:vendor',
  'build:js:app'
]);

gulp.task('default', [
  'build',
  'watch'
]);

function reload() {
  return browserSync.reload();
}
