const del = require('del')
const gulp = require('gulp')
const webpack = require('webpack-stream')
const nothing = (done) => (done())

gulp.task('clean', (done) => (
  del(['dist/**/*'])
    .then((res) => (done()))
))

gulp.task('packageSrc', (done) => (
  gulp.src('src/**/*.js')
  .pipe(webpack(require('./webpack.config.js')))
    .on('error', () => {
      console.error('an error occured')
      done()
    })
    .pipe(gulp.dest('dist'))
))

gulp.task('packageHtml', () => (
  gulp.src('html/**/*.html')
    .pipe(gulp.dest('dist'))
))

const buildSeries = (
  gulp.series('clean', 'packageHtml', 'packageSrc', nothing)
)
gulp.task('build', buildSeries)

const startSeries = (
  gulp.series('build')
)
gulp.task('start', () => (
  gulp.watch('src', gulp.series(startSeries))
))
