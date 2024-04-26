<template>
  <div ref="chart" style="width: 100%; height: 250px"></div>
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
        right: "2%",
        bottom: "0%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "06:00",
          "07:00",
          "08:00",
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
          "23:00",
          "24:00",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [
            111, 222, 4000, 18000, 33333, 55555, 66666, 33333, 14000, 36000, 66666, 44444, 22222, 11111, 4000, 2000,
            500, 333, 111,
          ],
          type: "line",
          smooth: true,
          areaStyle: {},
        },
        {
          data: [33, 66, 88, 333, 3333, 6000, 18000, 3000, 1200, 13000, 22000, 11000, 2222, 1200, 400, 200, 60, 20, 1],
          type: "line",
          smooth: true,
          areaStyle: {},
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
