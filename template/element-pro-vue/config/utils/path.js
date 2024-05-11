/**
 * 处理项目路径模块
 */
const { resolve, join } = require('path')

const appDir = process.cwd();

function _resolve(_path) {
  return resolve(appDir, _path)
}

module.exports = {
    _resolve,
    _join: join
}