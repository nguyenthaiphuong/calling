'use strict';

import gulp from 'gulp';
import htmlhint from 'gulp-htmlhint';
import { APP_TEMPLATES } from '../const';

gulp.task('htmlhint', () => {
  return gulp.src(APP_TEMPLATES)
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter('htmlhint-stylish'))
    .pipe(htmlhint.failReporter({ suppress: true }));
});
