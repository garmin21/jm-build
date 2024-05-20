/* eslint-disable import/no-extraneous-dependencies */
import client from 'webpack-theme-color-replacer/client'
import forElementUI from 'webpack-theme-color-replacer/forElementUI'
// eslint-disable-next-line import/newline-after-import
// import settings from '@src/config/settings.json'
// 动态切换主题色
export function changeThemeColor(newColor) {
  const options = {
    newColors: [...forElementUI.getElementUISeries(newColor)]
  }
  return client.changer.changeColor(options, Promise).then(() => {
    localStorage.setItem('theme_color', newColor)
  })
}

export function initThemeColor() {
  const savedColor = localStorage.getItem('theme_color')
  if (savedColor) {
    document.body.style.display = 'none'
    changeThemeColor(savedColor).finally(() => {
      document.body.style.display = ''
    })
  }
}
