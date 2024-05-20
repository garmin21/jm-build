const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')
// const { themeColor } = require('../src/config/settings.json')

const themePluginOption = {
  fileName: 'css/theme-colors-[contenthash:8].css',
  // matchColors: [...forElementUI.getElementUISeries(themeColor)], // 主色系列
  // 改变样式选择器，解决样式覆盖问题
  changeSelector: forElementUI.changeSelector
}

module.exports = () => new ThemeColorReplacer(themePluginOption)

/**
 * 1. element-ui 自带的 var.scss 文件，进行变量控制
 * 2. element-theme-chalk 这个包，单独的抽离出来，还要使用一个插件去处理
 */
