<template>
  <div class="main">
    <el-button>打算</el-button>
    <div class='map-box'>
      <baidu-map class="bm-view" ak='K2Scr7HDs2hCXYRcnNplUurcMQmiUwXM' certer={center}>
         <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      </baidu-map>
    </div>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      center: '武汉'
    }
  },
  components: {
    BaiduMap
  },
  mounted () {
  }
}
</script>
<style lang='scss' scoped>
  .main {
    width: 1500px;
    margin: 0 auto;
    .bm-view {
      width: 1500px;
      height: 800px;
      margin: 0 auto;
    }
  }
</style>
