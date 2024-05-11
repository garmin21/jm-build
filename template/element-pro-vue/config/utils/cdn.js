module.exports = {
  cdn: {
    dev: {
      js: []
    },
    prod: {
      js: [
        'https://lib.baomitu.com/vue/3.0.11/vue.runtime.global.prod.js',
        'https://lib.baomitu.com/vue-router/4.0.6/vue-router.global.prod.min.js',
        'https://lib.baomitu.com/vuex/4.0.0/vuex.global.prod.min.js'
      ]
    }
  },
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex'
  }
}
