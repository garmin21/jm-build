<template>
  <div class="hello">
    <el-button
      v-for="item of list"
      :key="item.key"
      @click="_changeThemeColor(item.key)"
    >
      {{ item.key }}
    </el-button>
  </div>
</template>

<script>
import { changeThemeColor } from '../utils/themeColorClient'

export default {
  name: 'hello-word',
  data() {
    return {
      list: [
        {
          key: '#F5222D'
        },
        {
          key: '#FA541C'
        },
        {
          key: '#FAAD14'
        },
        {
          key: '#13C2C2'
        },
        {
          key: '#52C41A'
        },
        {
          key: '#f60'
        }
      ]
    }
  },
  created() {},
  methods: {
    _changeThemeColor(color) {
      changeThemeColor(color)
    }
  }
}
</script>
