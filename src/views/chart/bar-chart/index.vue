<template>
  <el-card style="max-width: 100%; height: 100%" :body-style="{ height: '90%' }">
    <template #header> 柱状图示例示例 </template>
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
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
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
