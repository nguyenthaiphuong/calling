'use strict';

import webpack from 'webpack';
import extractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

let webpackConfig = {
  output: {
    path: path.join(__dirname, '../public'),
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
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?{optipng: {optimizationLevel: 7}, gifsicle: {interlaced: false}, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
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
    new webpack.DefinePlugin({
      'API_URL': JSON.stringify(process.env.API_URL),
      'APP_URL': JSON.stringify(process.env.APP_URL),
      'APP_NAME': JSON.stringify(process.env.APP_NAME)
    }),
    new extractTextPlugin('style.css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      test: /\.(js)$/,
      compress: {
        dead_code: false,
        conditionals: false,
        unused: false,
        side_effects: false
      },
      comments: false
    })
  ]
};

export default webpackConfig;
