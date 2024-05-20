import Vue from 'vue'
import App from './App.vue'

import 'uno.css'
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/sanitize/assets.css'
import './components'

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

new Vue({
  render: (h) => h(App)
}).$mount('#app')
