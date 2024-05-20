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
      tx: '',
      checked: true,
      date: new Date(),
      tableData: [
        { name: 'James', score: 99 },
        { name: 'Lily', score: 79 },
        { name: 'Linda', score: 86 }
      ]
    }
  },
  created() {}
}
</script>

<template>
  <div>
    <div class="pd-10 theme-cl">
      <h2>
        <i class="my-icon-bookmark"></i>
        element-ui css:
      </h2>
      <el-button icon="my-icon-calendar"> default</el-button>
      <el-button type="primary" icon="my-icon-warning"> primary</el-button>
      <el-button type="success">success</el-button>
      <el-button type="info">info</el-button>
      <el-button type="warning">warning</el-button>
      <el-button type="danger">danger</el-button>
      <el-button type="text" icon="el-icon-s-tools">text</el-button>
      |
      <el-button plain icon="el-icon-upload">default</el-button>
      <el-button plain type="primary" icon="el-icon-picture">primary </el-button>
      <el-button plain type="success">success</el-button>
      <el-button plain type="info">info</el-button>
      <el-button plain type="warning">warning</el-button>
      <el-button plain type="danger">danger</el-button>
      <p />
      <el-button :loading="true">default</el-button>
      <el-button type="primary" :loading="true">primary</el-button>
      <el-button type="success" :loading="true">success</el-button>
      <el-button type="info" :loading="true">info</el-button>
      <el-button type="warning" :loading="true">warning</el-button>
      <el-button type="danger" :loading="true">danger</el-button>
      <el-button type="text" :loading="true">text</el-button>
      |
      <el-button plain :loading="true">default</el-button>
      <el-button plain type="primary" :loading="true">primary</el-button>
      <el-button plain type="success" :loading="true">success</el-button>
      <el-button plain type="info" :loading="true">info</el-button>
      <el-button plain type="warning" :loading="true">warning</el-button>
      <el-button plain type="danger" :loading="true">danger</el-button>

      <p />
      <el-tag closable>Color of element-plus css</el-tag>
      <el-input
        v-model="tx"
        style="width: 200px"
        suffix-icon="el-icon-search"
        placeholder="Input ..."
      ></el-input>
      <el-switch v-model="checked" active-text="switch"></el-switch>
      <el-date-picker v-model="date"></el-date-picker>

      <p />
      <el-table :data="tableData" tooltip-effect="light" stripe>
        <el-table-column type="selection" min-width="55" :width="55"> </el-table-column>
        <el-table-column
          label="Name"
          prop="name"
          :fixed="true"
          :min-width="120"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          label="Score"
          prop="score"
          :fixed="true"
          :min-width="120"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="1"
        :page-sizes="[10, 20]"
        :page-size="12"
        :total="56"
      >
      </el-pagination>

      <p />
      <hr />
      <h2>self css:</h2>
      <div>
        <nav class="series-primary">primary color in self css</nav>
        <nav class="series-3">primary color series in self css</nav>
        <nav class="series-5">primary color series in self css</nav>
      </div>

      <h2>other custom colors:</h2>
      <div class="custom-color">my custom color</div>
      <div class="custom-color2">my custom color 2</div>
      <div class="custom-color3">my custom color 3</div>

      <br />
      <a href="./" class="primay-color">&lt;&lt; Back</a>

      <foot-code></foot-code>
    </div>
    <hello />
    <FormDome />
  </div>
</template>

<style lang="scss" scoped>
.custom-color3 {
  color: rgb(112, 112, 233);
}
</style>
