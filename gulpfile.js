const del = require('del')
const gulp = require('gulp')
const webpack = require('webpack-stream')
const nothing = (done) => (done())

gulp.task('clean', (done) => (
  del(['dist/**/*'])
    .then((res) => (done()))
))

gulp.task('packageSrc', () => (
  gulp.src('src/**/*.js')
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(gulp.dest('dist'))
))

gulp.task('packageHtml', () => (
  gulp.src('html/**/*.html')
  .pipe(gulp.dest('dist'))
))

const buildSeries = (
  gulp.series('clean', 'packageSrc', 'packageHtml', nothing)
)
gulp.task('build', buildSeries)
