<script>
import hello from '@components/hello.vue'
import FormDome from '@components/form/index.vue'

export default {
  name: 'app',
  components: {
    hello,
    FormDome
  },
  data() {
    return {
      msg: 'Hello world',
      list: []
    }
  },
  async created() {
    const timeout = function (time) {
      return new Promise((resolve) => {
        setTimeout(resolve, time)
      })
    }
    await timeout(3000)
  },
  mounted() {
    setTimeout(() => {
      this.msg = '==============》你好世界'
    }, 3000)
  }
}
</script>

<template>
  <div>
    <div class="app m-1">{{ msg }}</div>
    <img src="@assets/images/logo.png" alt="" />
    <img src="@assets/images/box.svg" alt="" />
    <hello />
    <FormDome />
  </div>
</template>

<style lang="scss" scoped>
.app {
  color: rgb(112, 112, 233);
  background-color: rgb(42, 101, 101);
  font-size: 20px;
  font-weight: bold;
}
</style>
