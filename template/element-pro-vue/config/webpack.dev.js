'use strict';

const { merge } = require('webpack-merge');
const UnoCSS = require('@unocss/webpack').default
const portfinder = require('portfinder');//自动查找可用端口
const commonConfig = require('./webpack.common');

/**
   *在 Webpack 5 中，target 是一个配置选项，用于指定打包生成的代码将运行的环境。
    它决定了 Webpack 所生成的代码将针对哪种 JavaScript 运行时或环境进行优化和适配。
    target 配置选项可以设置为不同的值，以适应不同的运行环境。以下是一些常见的 target 配置值及其含义：
    web：默认值，适用于 Web 浏览器环境。生成的代码将针对浏览器环境进行优化。
    webworker：适用于 Web Worker 环境。
    node：适用于 Node.js 环境。生成的代码将针对 Node.js 运行时进行优化。
    async-node：适用于 Node.js 环境，但支持异步加载模块。
    electron-main：适用于 Electron 主进程。
    electron-renderer：适用于 Electron 渲染进程。
    browserslist:<query>：根据 Browserslist 查询的结果来设置目标环境。
    可以使用类似 browserslist:"> 0.5%, last 2 versions" 的查询字符串。
   */

const devConfig = {
  mode: 'development',
  target: 'web',
  devServer: {
    host: 'localhost', // 指定host，，改为0.0.0.0可以被外部访问
    port: 9527, // 指定端口号
    open: false, // 服务启动后自动打开默认浏览器
    historyApiFallback: true, // 当找不到页面时，会返回index.html
    hot: true, // 启用模块热替换HMR，在修改模块时不会重新加载整个页面，只会更新改变的内容
    compress: false, // 启动GZip压缩
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3000',
      },
    ],
  },
  plugins: [
    UnoCSS()
  ],
  optimization: {
    realContentHash: true
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
  },
  devtool: 'eval-cheap-module-source-map',
  // https://blog.csdn.net/qq_41402809/article/details/116018471
  stats: 'errors-only', // 当你运行 Webpack 打包命令时，只有错误信息会被显示在控制台上，其他类型的信息如警告和模块信息将被省略。
};


// module.exports = merge(commonConfig, devConfig);



module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = devConfig.devServer.port;
  portfinder.getPort((err, port) => {
      if (err) {
          reject(err)
      } else {
          // publish the new Port, necessary for e2e tests
          process.env.PORT = port
          // add port to devServer config,主要是这一步更新可用的端口
          devConfig.devServer.port = port
          resolve(merge(commonConfig, devConfig))
      }
  })
})
