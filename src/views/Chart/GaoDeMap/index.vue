<template>
  <el-card style="max-width: 100%; height: 100%" :body-style="{ height: '100%', padding: 0 }">
    <template #header>高德地图示例 </template>
    <!-- 地图容器 -->
    <div ref="mapContainer" style=" position: relative;width: 100%; height: 100%"></div>
  </el-card>
</template>

<script setup lang="ts">
import AMapLoader from "@amap/amap-jsapi-loader";
import { onMounted, ref } from "vue";

const mapContainer = ref(null);

const initMap = () => {
  AMapLoader.load({
    key: "083c5f2e0fa3c8639d7561c0c8036d48", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本
    plugins: ["AMap.PlaceSearch", "AMap.AutoComplete"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      const map = new AMap.Map(mapContainer.value, {
        //设置地图容器id
        resizeEnable: true,
        zoom: 12, //地图的缩放比例
        center: [114.028453, 22.609294], //初始化地图中心点位置
      });

      new AMap.Marker({
        position: [114.028453, 22.609294],
        map,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

onMounted(() => {
  initMap();
});
</script>

<style lang="scss" scoped></style>
