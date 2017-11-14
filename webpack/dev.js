'use strict';

import webpack from 'webpack';
import extractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

let webpackConfig = {
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: extractTextPlugin.extract('style', 'css!')
      },
      {
        test: /\.scss$/,
        loader: extractTextPlugin.extract('style', 'css!sass!')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]'
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new extractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'API_URL': JSON.stringify(process.env.API_URL),
      'APP_URL': JSON.stringify(process.env.APP_URL),
      'APP_NAME': JSON.stringify(process.env.APP_NAME)
    })
  ]
};

export default webpackConfig;
