'use strict';

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const ImageMinimizerWebpackPlugin = require("image-minimizer-webpack-plugin")
const CompressionPlugin = require('compression-webpack-plugin');
const { _resolve } = require('./utils/path');

const prodConfig = {
  mode: 'production',
  target: 'browserslist',
  output: {
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].chunk.js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // 多进程
        parallel: true,
        //删除注释
        extractComments: false,
        terserOptions: {
          compress: {
            // 生产环境去除console
            drop_console: true,
            drop_debugger: true,
          },
        },
      }),
      // new ImageMinimizerWebpackPlugin({
      //   minimizer: {
      //     implementation: ImageMinimizerWebpackPlugin.imageminGenerate,
      //     options: {
      //       plugins: [
      //         // ['gifsicle', { interlaced: true }],
      //         ['jpegtran', { progressive: true }],
      //         ['optipng', { optimizationLevel: 5 }],
      //         [
      //           'svgo',
      //           {
      //             plugins: [
      //               'preset-default',
      //               'prefixIds',
      //               {
      //                 name: 'sortAttrs',
      //                 params: {
      //                   xmlnsOrder: 'alphabetical',
      //                 },
      //               },
      //             ],
      //           },
      //         ],
      //       ],
      //     },
      //   },
      // }),
    ],
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    usedExports: true,
    innerGraph: false,
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      cacheGroups: {
        vue_lib: {
          test: /[\\/]node_modules[\\/](vue-router|vuex)/,
          name: 'vue_lib',
          minSize: 10000, // 覆盖 splitChunks.minSize 配置
        },
      },
    },
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: _resolve('public/assets'), // 拷贝目录
          // to: '' to 可以不写，默认找 output 的输出路径
          globOptions: {
            // ignore: ['**/index.html'] // 配置忽略拷贝 public 下的指定文件
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css', //输出的 CSS 文件的名称
      chunkFilename: 'css/[name].[contenthash:8].chunk.css', // 非入口的 css chunk 文件名称
      ignoreOrder: true, // 忽略有关顺序冲突的警告
    }),
    new CssMinimizerPlugin(),
    new CompressionPlugin({
      test: /.(js|css)(\?.*)?$/, // 只压缩 js 和 css 文件
      algorithm: 'gzip', // 压缩算法，默认为 gzip
      threshold: 10240, // 文件大于 10 KB 时才压缩，默认为 0
      minRatio: 0.8, // 只有当文件压缩后的比率小于这个值时，文件才会被压缩，默认值 0.8
      deleteOriginalAssets: false, // 是否删除原文件，默认为 false
    }),
  ],
  // https://blog.csdn.net/qq_41402809/article/details/116018471
  stats: 'normal', //标准输出
};

module.exports = merge(commonConfig, prodConfig);
