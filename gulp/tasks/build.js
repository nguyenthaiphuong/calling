'use strict';

import gulp from 'gulp';

gulp.task('build', ['html', 'assets', 'webpack', 'templates']);
