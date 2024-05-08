<template>
  <div class="tmap-chart-container">
    <el-card style="max-width: 100%; height: var(--card-height)" :body-style="{ height: '100%', padding: 0 }">
      <template #header>腾讯地图示例 </template>
      <!-- 地图容器 -->
      <div ref="mapContainer" style="width: 100%; height: 93%"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

defineOptions({
  name: "TMap",
});

const mapContainer = ref(null);

const initMap = () => {
  //创建map对象，初始化地图
  const map = new TMap.Map(mapContainer.value, {
    center: new TMap.LatLng(39.908832, 116.397479), //设置地图中心点坐标
    zoom: 11, //设置地图缩放级别
  });

  //定义事件处理方法
  const clickHandler = (evt: { latLng: { getLat: () => number; getLng: () => number } }) => {
    const lat = evt.latLng.getLat().toFixed(6);
    const lng = evt.latLng.getLng().toFixed(6);
    console.log("您点击的的坐标是：" + lat + "," + lng);
  };
  //Map实例创建后，通过on方法绑定点击事件
  map.on("click", clickHandler);

  const markerLayer = new TMap.MultiMarker({
    map: map, //指定地图容器
    //样式定义
    styles: {
      //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
      myStyle: new TMap.MarkerStyle({
        width: 25, // 点标记样式宽度（像素）
        height: 35, // 点标记样式高度（像素）
        src: "../img/marker.png", //图片路径
        //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
        anchor: { x: 16, y: 32 },
      }),
    },
    //点标记数据数组
    geometries: [
      {
        id: "1", //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
        styleId: "myStyle", //指定样式id
        position: new TMap.LatLng(39.954104, 116.357503), //点标记坐标位置
        properties: {
          //自定义属性
          title: "marker1",
        },
      },
      {
        //第二个点标记
        id: "2",
        styleId: "marker",
        position: new TMap.LatLng(39.994104, 116.287503),
        properties: {
          title: "marker2",
        },
      },
    ],
  });
};

onMounted(() => {
  initMap();
});
</script>

<style lang="scss" scoped>
.tmap-chart-container {
  height: 100%;
  padding: 20px;
}
</style>
