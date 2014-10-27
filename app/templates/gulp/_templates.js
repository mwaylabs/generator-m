'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('templates', function () {
  //combine all template files of the app into a js file
  gulp.src(
    [
      '!./app/index.html',
      '!./app/bower_components/**',
      './app/**/*.html'
    ]
  )
    .pipe($.plumber())
    .pipe($.angularTemplatecache('app/scripts/templates.js', { standalone: true }))
    .pipe(gulp.dest('./'));
});
