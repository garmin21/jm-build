'use strict';

const { _resolve } = require('./utils/path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: ['vue'],
  output: {
    path: _resolve('dll'),
    filename: 'vendor.js',
    library: _resolve('dllExample'),
  },
  plugins: [
    new webpack.DllPlugin({
      name: _resolve('dllExample'),
      path: _resolve('dll/manifest.json'),
    }),
  ],
};
