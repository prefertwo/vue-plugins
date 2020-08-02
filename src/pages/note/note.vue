<template>
  <div class="pageContent">
    <head-top></head-top>

    <div class="mainContent">
      一些信息提示，或者站点说明信息
    </div>

    <bottom></bottom>
  </div>
</template>

<script>
import headTop from '@/components/headTop'
import bottom from '@/components/bottom'


export default {
  components: {
    headTop,
    bottom
  }
  
}
</script>

<style lang="less">
  
</style>
