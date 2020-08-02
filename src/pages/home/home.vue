<template>
  <div class="home_page fillContainer">
    <el-row style="height: 100%">
      <el-col :span="4">ds</el-col>
      <el-col :span="20">gg</el-col>
    </el-row>
  </div>
</template>

<script>
import Router from '../../router'

export default {
  data() {
    return {
      routers: []
    }
  },

  mounted() {
    console.log('==router==', Router.options.routes)
  }
  
}
</script>

<style lang="less">
  
</style>