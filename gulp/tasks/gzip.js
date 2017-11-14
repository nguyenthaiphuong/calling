'use strict';

import gulp from 'gulp';
import gzip from 'gulp-gzip';
import { BUILD_PATH, PUBLIC_MANIFEST } from '../const';
import fs from 'fs';

gulp.task('gzip', () => {
  fs.readFile(PUBLIC_MANIFEST, 'utf8', (error, data) => {
    const files = JSON.parse(data);
    const revFiles = [];
    for (const key in files) {
      const file = files[key];
      const ext = file.split('.').pop();
      if (['ico', 'png'].indexOf(ext) === -1) {
        revFiles.push(BUILD_PATH + file);
      }
    }
    gulp.src(revFiles).pipe(gzip({ append: true })).pipe(gulp.dest(BUILD_PATH));
  });
});
