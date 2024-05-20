module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // 按需引入 polyfill
        corejs: 3,
      },
    ],
  ],
  "plugins": [
    [
      'babel-plugin-component',
      {
          libraryName: 'element-ui',
          styleLibraryName: '~node_modules/element-ui/packages/theme-chalk/src',
          ext: '.scss'
      }
    ]
  ]
};
