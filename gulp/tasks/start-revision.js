'use strict';

import gulp from 'gulp';
import gulpRev from 'gulp-rev-all';
import { BUILD_PATH, PUBLIC_JS, PUBLIC_STYLE, PUBLIC_TEMPLATE, PUBLIC_FAVICON } from '../const';

gulp.task('start-revision', () => {
  let revFiles = gulp.src([ PUBLIC_TEMPLATE, PUBLIC_JS, PUBLIC_STYLE, PUBLIC_FAVICON ]);
  return revFiles
    .pipe(gulpRev.revision({ includeFilesInManifest: ['.css', '.js', '.ico', '.png'] }))
    .pipe(gulp.dest(BUILD_PATH))
    .pipe(gulpRev.manifestFile())
    .pipe(gulp.dest(BUILD_PATH));
});
