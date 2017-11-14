'use strict';

import gulp from 'gulp';
import templateCache from 'gulp-angular-templatecache';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import htmlMin from 'gulp-htmlmin';
import { APP_TEMPLATES, TEMPLATE_CACHE, TEMPLATE_CACHE_MODULE, BUILD_PATH } from '../const';

gulp.task('templates', () => {
  return gulp.src(APP_TEMPLATES)
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(templateCache({ standalone: true, module: TEMPLATE_CACHE_MODULE }))
    .pipe(uglify())
    .pipe(rename(TEMPLATE_CACHE))
    .pipe(gulp.dest(BUILD_PATH));
});
