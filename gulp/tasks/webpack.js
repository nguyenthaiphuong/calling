'use strict';

import gulp from 'gulp';
import webpackStream from 'webpack-stream';
import webpackConfig from '../../webpack';
import { APP_JS, BUILD_PATH } from '../const';

gulp.task('webpack', () => {
  return gulp.src(APP_JS).pipe(webpackStream(webpackConfig)).pipe(gulp.dest(BUILD_PATH));
});
