'use strict';

import gulp from 'gulp';
import lintspaces from 'gulp-lintspaces';
import { APP_TEMPLATES } from '../const';

gulp.task('htmlindent', () => {
  return gulp.src(APP_TEMPLATES)
    .pipe(lintspaces({ indentation: 'spaces', trailingspaces: true }))
    .pipe(lintspaces.reporter({ breakOnWarning: true }));
});
