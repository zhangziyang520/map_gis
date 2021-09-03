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
      center: '武汉',
      count: 1
    }
  },
  components: {
    BaiduMap
  },
  mounted () {
    InitMap()
  },
  methods: {
    // InitMap: function(){
    //    var map = new BMapGL.Map("allmap");                // 创建地图实例
    //    var point = new BMapGL.Point(116.404, 39.915);     // 设置中心点坐标
    //    map.centerAndZoom(point, 12);                      // 设置地图级别
    //    map.enableScrollWheelZoom(); 
    // },
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
