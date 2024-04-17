<template>
  <div class="doughnut-pie-chart-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)" :body-style="{ height: '90%' }">
      <template #header>
        饼图示例
        <el-switch v-model="addBorderStyle" inline-prompt active-text="圆角" inactive-text="无圆角" />
      </template>
      <div ref="chart" style="width: 100%; height: 100%"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import * as echarts from "echarts";

const chart = ref<HTMLElement | null>(null);
const addBorderStyle = ref(false);

const initChart = () => {
  const myChart = echarts.init(chart.value);
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {},
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
};

watch(addBorderStyle, (newValue) => {
  const myChart = echarts.getInstanceByDom(chart.value!);
  if (myChart) {
    const option = {
      series: [
        {
          itemStyle: newValue
            ? {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
              }
            : null,
        },
      ],
    };
    myChart.setOption(option);
  }
});

onMounted(() => {
  initChart();
});
</script>

<style lang="scss" scoped>
.doughnut-pie-chart-container {
  height: 100%;
  padding: 20px;
}
</style>
