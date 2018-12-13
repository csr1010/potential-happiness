var gulp = require('gulp');
const shell = require('gulp-shell')
 
gulp.task('default', () => {
  return gulp.src('*.js', {read: false})
  .pipe(shell([
    'rsync -r --exclude \'node_modules\' . ubuntu@10.150.133.114:~/potential-happiness'
  ]))
})
