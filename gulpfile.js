"use strict";

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
     del = require('del'),
     gutil = require('gulp-util'),
     autoprefixer = require('gulp-autoprefixer'),
     browserSync = require('browser-sync').create(),
     htmlreplace = require('gulp-html-replace'),
     cssmin = require('gulp-cssmin'),
     tinypng = require('gulp-tinypng-compress');

gulp.task("concatScripts", function() {
    return gulp.src([
        'assets/js/vendor/jquery-3.3.1.min.js',
        'assets/js/vendor/popper.min.js',
        'assets/js/vendor/bootstrap.min.js',
        'assets/js/vendor/jquery.lazy.min.js',
        'assets/js/vendor/snazzy-info-window.min.js',
        'assets/js/functions.js',
        'assets/js/mapFunctions.js'
        ])
    .pipe(maps.init())
    .pipe(concat('main.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('assets/js'))
    .pipe(browserSync.stream());
});

gulp.task("minifyScripts", ["concatScripts"], function() {
  return gulp.src("assets/js/main.js")
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('compileSass', function() {
  return gulp.src("assets/css/main.scss")
      .pipe(maps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(maps.write('./'))
      .pipe(gulp.dest('assets/css'))
      .pipe(browserSync.stream());
});

gulp.task("minifyCss", ["compileSass"], function() {
  return gulp.src("assets/css/main.css")
    .pipe(cssmin())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('watchFiles', function() {
  gulp.watch('assets/css/**/*.scss', ['compileSass']);
  gulp.watch('assets/js/*.js', ['concatScripts']);
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('clean', function() {
  del(['dist', 'assets/css/main.css*', 'assets/js/main*.js*']);
});

gulp.task('renameSources', function() {
  return gulp.src(['*.html', '*.php'])
    .pipe(htmlreplace({
        'js': 'assets/js/main.min.js',
        'css': 'assets/css/main.min.css'
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task("build", ['minifyScripts', 'minifyCss'], function() {
  return gulp.src(['*.html', '*.php', 'favicon.ico',
                   "assets/img/**", "assets/fonts/**", "assets/media/**"], { base: './'})
            .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watchFiles'], function(){
  browserSync.init({
        server: "./"
    });

    gulp.watch("assets/css/**/*.scss", ['watchFiles']);
    gulp.watch(['*.html', '*.php']).on('change', browserSync.reload);
});

gulp.task("default", ["clean", 'build'], function() {
  gulp.start('renameSources');
});

gulp.task('tinypng', function () {
    gulp.src('assets/media/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'qzyNqTgrQUKdA4mhJlu8Svbn870QRcAN',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('assets/media'));
});
