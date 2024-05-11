'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { DefinePlugin } = require('webpack');
const { _resolve } = require('./utils/path');
const { merge } = require('webpack-merge');
const rulesConfig = require('./webpack.rules.js');

const dotenv = require('dotenv');
// const { cdn, externals } = require('./utils/cdn.js');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const prefixRE = /^VUE_APP_/;
let env = {};
for (const key in process.env) {
  if (key == 'NODE_ENV' || key == 'BASE_URL' || prefixRE.test(key)) {
    env[key] = JSON.stringify(process.env[key]);
  }
}
// const isDev = process.env.NODE_ENV === 'dev';
const IS_ANALYZER = process.env.VUE_APP_ANALYZER === 'true';
const ASSET_PATH = process.env.VUE_APP_ASSET_PATH || 'auto';

const baseConfig = {
  entry: _resolve('src/main.js'),
  output: {
    pathinfo: false,
    publicPath: ASSET_PATH,
    clean: true,
    path: _resolve('dist'),
  },
  resolve: {
    modules: [_resolve('node_modules')], // 使用第三模块 第一反应去 根目录下的 node_modules 寻找
    extensions: ['.js', '.vue', '.json'], // 在 import 的时候不加文件扩展名,会依次遍历extensions 添加扩展名进行匹配
    alias: {
      '@src': _resolve('src'),
      '@assets': _resolve('src/assets'),
      '@components': _resolve('src/components'),
      '@utils': _resolve('src/utils'),
      '@api': _resolve('src/api'),
    },
  },
  // externals: isDev ? {} : externals,
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'This is a template',
      template: _resolve('public/index.html'), // 指定打包 .html 文件地址
      inlineSource: '.(js|css)$', // 内联所有匹配的 JavaScript 和 CSS 文件
      minify: {
        html5: true, // 根据HTML5规范解析输入
        collapseWhitespace: true, // 折叠空白区域
        preserveLineBreaks: false,
        minifyCSS: true, // 压缩文内css
        minifyJS: true, // 压缩文内js
        removeComments: false // 移除注释
      },
      // templateContent: ({ htmlWebpackPlugin }) => {
      //   const assetTags = htmlWebpackPlugin.tags;
      //   console
      // }
    }),
    new DefinePlugin(env),
    IS_ANALYZER ? new BundleAnalyzerPlugin() : undefined,
  ],
  cache: {
    // 使用持久化缓存
    type: 'filesystem', //memory:使用内容缓存 filesystem：使用文件缓存
    buildDependencies: {
      config: [__filename], // 当构建依赖的config文件（通过 require 依赖）内容发生变化时，缓存失效
    },
  },
};

module.exports = merge(baseConfig, rulesConfig);
