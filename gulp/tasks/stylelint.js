'use strict';

import gulp from 'gulp';
import stylelint from 'gulp-stylelint';
import { APP_SCSS } from '../const';

gulp.task('stylelint', () => {
  return gulp.src([APP_SCSS, '!src/styles/theme/**/*'])
    .pipe(stylelint({
      reporters: [{ formatter: 'string', console: true }]
    }));
});
