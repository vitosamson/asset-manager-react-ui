'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    plugins = require('gulp-load-plugins')(),
    config = require('./gulp.config.js');

gulp.task('build:js:app', function() {
  return gulp.src(config.app.js.src)
    .pipe(plugins.webpack(config.webpack.bundle))
    .pipe(plugins.rename(config.app.js.build))
    .pipe(gulp.dest(config.dirs.js));
});

gulp.task('js:app:watch', ['build:js:app'], reload);

gulp.task('build:js:vendor', function() {
  return gulp.src(config.vendor.js.src)
    .pipe(plugins.concat(config.vendor.js.build))
    .pipe(gulp.dest(config.dirs.js));
});

gulp.task('build:styles:vendor', function() {
  return gulp.src(config.vendor.css.src)
    .pipe(plugins.concat(config.vendor.css.build))
    .pipe(gulp.dest(config.dirs.styles));
});

gulp.task('watch', function() {
  gulp.watch(config.app.js.glob,    ['js:app:watch']);
  gulp.watch(config.app.html,              reload);

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
  'build:js:app',
  'build:styles:vendor'
]);

gulp.task('default', [
  'build',
  'watch'
]);

function reload() {
  return browserSync.reload();
}
