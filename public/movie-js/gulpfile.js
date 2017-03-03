var gulp = require("gulp");
var babel = require("gulp-babel");
var plumber = require('gulp-plumber');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var samples = ['clapAlert', 'knockCookRecipe', 'snapCamera', 'knuckleKnockScroll', 'soundSearchEngine']
gulp.task('browserify', function(){
  samples.forEach((item) => {
    browserify({
      entries: ['./sample/' + item + '/main.js']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./sample/' + item));
  })
});

gulp.task('babel', function() {
  gulp.src('./es6/*.es6')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('./js/'))
});

gulp.task('watch', function() {
  gulp.watch('./es6/*.es6', ['babel'])
  // gulp.watch('./**/main.js', ['browserify'])
});

gulp.task('default', ['babel', 'watch']);
