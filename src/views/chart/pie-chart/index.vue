<template>
  <el-card style="max-width: 100%; height: 100%" :body-style="{ height: '90%' }">
    <template #header> 饼图示例 </template>
    <div ref="chart" style="width: 100%; height: 100%"></div>
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

let chart = ref(null); //注意变量名 和 ref名字要对应

const initChart = () => {
  const myChart = echarts.init(chart.value);
  const option = {
    title: {
      text: "Referer of a Website",
      subtext: "Fake Data",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
};

onMounted(() => {
  initChart();
});
</script>

<style lang="scss" scoped></style>
