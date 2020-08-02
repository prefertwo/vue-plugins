<template>
  <div class="home_page fillContainer">
    <el-row style="height: 100%">
      <el-col :span="4" style="height: 100%">
        <el-menu :default-active="defaultActive" style="min-height: 100%;" background-color="#7B68EE" text-color="#F0F8FF" active-text-color="#00FA9A" router @select="handleSelect" @open="menuOpen" @close="menuClose">
					<el-menu-item index="chart"><i class="el-icon-menu"></i>图表</el-menu-item>
          <el-submenu index="3">
						<template slot="title"><i class="el-icon-plus"></i>二级菜单</template>
						<el-menu-item index="set">设置</el-menu-item>
						<el-menu-item index="note">说明</el-menu-item>
					</el-submenu>
				</el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: hidden;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Router from '../../router'

export default {
  
  data() {
    return {
      defaultActive: 'chart',
      routers: []
    }
  },

  mounted() {
    console.log('==router==', Router.options.routes[2].children)
    this.routers = Router.options.routes[2].children;
  },

  methods: {
    handleSelect: (index) => {
      console.log('选择==', index)
    },
    menuOpen: (index) => {
      console.log('打开==', index)
    },
    menuClose: (index) => {
      console.log('关闭==', index)
    }
  },

  computed: {
    // defaultActive: function(){
    //   return this.$route.path.replace('/', '');
    // }
  },



  
}
</script>

<style lang="less">
  
</style>