<template>
  <div class="bar-chart-container">
    <el-card style="max-width: 100%; height: var(--card-height)" :body-style="{ height: '90%' }">
      <template #header> 柱状图示例示例 </template>
      <div ref="chart" style="width: 100%; height: 100%"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

defineOptions({
  name: "BarChart",
});

const chart = ref<HTMLElement | null>(null);

const initChart = () => {
  const myChart = echarts.init(chart.value);
  const option = {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      top: "5%",
      left: "0%",
      right: "5%",
      bottom: "0%",
      containLabel: true,
    },
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
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
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
.bar-chart-container {
  height: 100%;
  padding: 20px;
}
</style>
