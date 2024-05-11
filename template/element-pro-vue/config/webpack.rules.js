'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'dev';
const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // thread-loader 开启多线程
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              // 开启babel缓存 webpack构建打包速度(第二次)更快
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          styleLoader,
          {
            loader: 'css-loader',
            options: {
              // 表示在次的调用下，当前loader 的前一个loader 处理，
              // 目的是为了解决，@import xxx.css 引入 的 样式 无法使用样式 兼容性的处理
              importLoaders: 1,
              // 配置解决，css 中通过 url 引入图片时，css-loader 会把url 替换为 require 的方式，改为不去替换
              esModule: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        type: 'asset/resource',
        generator: {
          filename: isDev
            ? 'assets/image/[name][ext]'
            : 'assets/image/[name].[hash:6][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb，设置阈值，小于这个大小的，会被处理成 base 64 的字符串，默认是8kb
          },
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: isDev
            ? 'assets/video/[name][ext]'
            : 'assets/video/[name].[hash:6][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb  指定大小
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: isDev
            ? 'assets/font/[name][ext]'
            : 'assets/font/[name].[hash:6][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb  指定大小
          },
        },
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },
};
