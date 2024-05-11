// ES6 箭头函数
import Vue from 'vue'
import App from './App.vue'

import 'uno.css'
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/sanitize/assets.css'
import './assets/sass/index.scss'

new Vue({
  render: (h) => h(App)
}).$mount('#app')
