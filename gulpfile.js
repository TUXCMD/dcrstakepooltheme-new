var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    htmlmin = require('gulp-htmlmin');
    del = require('del');

sass.compiler = require('node-sass');


// Styles
gulp.task('styles', function() {
  return gulp.src('src/styles/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('vendor', function() {
  return gulp.src('src/scripts/vendor/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('dist/scripts/vendor'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts/vendor'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Scripts
gulp.task('global', function() {
  return gulp.src('src/scripts/global.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('global.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src('src/img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

// Fonts
gulp.task('fonts', function () {
  return gulp.src('src/styles/fonts/**/*')
    .pipe(gulp.dest('dist/styles/fonts'))
    .pipe(notify({ message: 'Fonts task complete' }));
});

// HTML
gulp.task('minify', function() {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'HTML Minification Complete' }));
});

// Clean
gulp.task('clean', function() {
  return del(['dist']);
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'vendor', 'global', 'images', 'fonts', 'minify');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/scripts/**/*.js', ['global']);

  // Watch image files
  gulp.watch('src/img/**/*', ['images']);

  // Watch html files
  gulp.watch('src/**/*.html', ['minify']);

  // Watch font files
  gulp.watch('src/styles/fonts/**/*', ['fonts']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);

});
