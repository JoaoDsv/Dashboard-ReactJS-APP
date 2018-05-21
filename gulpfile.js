const gulp = require('gulp')
const stylus = require('gulp-stylus')

// Gulp task to compile .styl to .css
gulp.task('styles', () => {
  gulp.src('./src/assets/styles/master.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./src/build/styles'))
})

// Gulp task to watch at .styl changes to auto re-compile
gulp.task('watch:styles', () => {
  gulp.watch('**/*.styl', ['styles'])
})
