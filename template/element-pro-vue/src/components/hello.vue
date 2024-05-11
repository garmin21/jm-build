<template>
  <div class="hello">
    hello
    <HelloSpan></HelloSpan>
  </div>
</template>

<script>
import HelloSpan from './hello1.vue'

export default {
  name: 'hello-word',
  components: {
    HelloSpan
  },
  data() {
    // 这里存放数据
    return {}
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  methods: {}
}
</script>
<style lang="scss" scoped></style>
