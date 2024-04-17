<template>
  <div class="bmap-chart-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)" :body-style="{ height: '100%', padding: 0 }">
      <template #header>百度地图示例 </template>
      <!-- 地图容器 -->
      <div ref="mapContainer" style="width: 100%; height: 93%"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const mapContainer = ref(null);

const initBaiduMap = () => {
  const map = new BMapGL.Map(mapContainer.value);
  const point = new BMapGL.Point(116.404, 39.915);
  map.centerAndZoom(point, 15);

  const scaleCtrl = new BMapGL.ScaleControl();
  map.addControl(scaleCtrl);

  const zoomCtrl = new BMapGL.ZoomControl();
  map.addControl(zoomCtrl);

  const marker = new BMapGL.Marker(point);
  map.addOverlay(marker);

  // const opts = {
  //   width: 200,
  //   height: 100,
  //   title: "故宫博物院",
  // };
  // const infoWindow = new BMapGL.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts);
  // map.openInfoWindow(infoWindow, point);
};

onMounted(() => {
  initBaiduMap();
});
</script>

<style scoped lang="scss">
.bmap-chart-container {
  height: 10px;
  padding: 20px;
}
</style>
