/**
 * Created by gedionz on 9/6/17.
 */

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const nodemon = require('gulp-nodemon');

gulp.task('lint', () => {
  return gulp.src(['app/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('start', ['lint'], () => {
  nodemon({
    script: 'app/app.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' },
    watch: ['app/**/*.js']
  });
});
