<template>
  <el-card>
    <template #header> 销售分析 </template>
    <div ref="chart" style="width: 100%; height: 300px"></div>
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const chart = ref(null);

const initChart = () => {
  if (chart.value) {
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
      legend: {
        left: "center",
        data: ["进货量", "售出量", "利润"],
      },
      radar: [
        {
          indicator: [
            { text: "2024", max: 100 },
            { text: "2023", max: 100 },
            { text: "2022", max: 100 },
            { text: "2021", max: 100 },
            { text: "2020", max: 100 },
            { text: "2019", max: 100 },
          ],
          center: ["50%", "60%"],
        },
      ],
      series: [
        {
          type: "radar",
          tooltip: {
            trigger: "item",
          },
          symbol: "none",
          areaStyle: {},
          data: [
            {
              value: [85, 90, 90, 95, 95, 90],
              name: "进货量",
            },
            {
              value: [60, 75, 85, 80, 85, 90],
              name: "售出量",
            },
            {
              value: [75, 85, 75, 75, 60, 70],
              name: "利润",
            },
          ],
        },
      ],
    };
    myChart.setOption(option);
    window.addEventListener("resize", () => {
      myChart.resize();
    });
  }
};

onMounted(() => {
  initChart();
});
</script>

<style lang="scss" scoped></style>
