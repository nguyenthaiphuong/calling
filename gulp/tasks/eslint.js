'use strict';

import gulp from 'gulp';
import eslint from 'gulp-eslint';
import { APP_JS } from '../const';

gulp.task('eslint', () => {
  return gulp.src([APP_JS, '!src/common/theme.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
