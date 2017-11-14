'use strict';

import webpackProductionConfig from './production';
import webpackDevConfig from './dev';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const DEVELOPMENT = process.env.NODE_ENV === 'development';

let webpackConfig = {
  entry: './src/index.js',
  resolve: {
    alias: {
      jquery: path.join(__dirname, '../node_modules/jquery/dist/jquery'),
      base: path.resolve(__dirname, '../src/base'),
      common: path.resolve(__dirname, '../src/common'),
      components: path.resolve(__dirname, '../src/components'),
      configs: path.resolve(__dirname, '../src/configs'),
      directives: path.resolve(__dirname, '../src/directives'),
      modules: path.resolve(__dirname, '../src/modules'),
      objects: path.resolve(__dirname, '../src/objects'),
      services: path.resolve(__dirname, '../src/services'),
      styles: path.resolve(__dirname, '../src/styles'),
      i18n: path.resolve(__dirname, '../i18n')
    }
  },
  output: DEVELOPMENT ? webpackDevConfig.output : webpackProductionConfig.output,
  stats: { children: false },
  module: DEVELOPMENT ? webpackDevConfig.module : webpackProductionConfig.module,
  plugins: DEVELOPMENT ? webpackDevConfig.plugins : webpackProductionConfig.plugins
};

export default webpackConfig;
