'use strict';

import gulp from 'gulp';
import htmlMin from 'gulp-htmlmin';
import gulpRevReplace from 'gulp-rev-replace';
import { APP_URL, BUILD_PATH, PUBLIC_HTML, PUBLIC_MANIFEST } from '../const';

gulp.task('finish-revision', () => {
  let manifest = gulp.src(PUBLIC_MANIFEST);
  return gulp.src(PUBLIC_HTML)
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gulpRevReplace({ manifest: manifest, prefix: APP_URL }))
    .pipe(gulp.dest(BUILD_PATH));
});
