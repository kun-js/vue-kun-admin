<template>
  <div class="basic-pie-chart-container">
    <el-card style="max-width: 100%; height: var(--card-height)" :body-style="{ height: '90%' }">
      <template #header> 饼图示例 </template>
      <div ref="chart" style="width: 100%; height: 100%"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

defineOptions({
  name: "BasicPieChart",
});

const chart = ref<HTMLElement | null>(null);

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

<style lang="scss" scoped>
.basic-pie-chart-container {
  height: 100%;
  padding: 20px;
}
</style>
