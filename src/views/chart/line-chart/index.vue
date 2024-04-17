<template>
  <div class="line-chart-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)" :body-style="{ height: '90%' }">
      <template #header>
        折线图示例
        <el-switch v-model="lineSmooth" inline-prompt active-text="曲线平滑" inactive-text="不平滑" />
        <el-switch v-model="lineBoundaryGap" inline-prompt active-text="不从起始点" inactive-text="起始点" />
      </template>
      <div ref="chart" style="width: 100%; height: 100%"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import * as echarts from "echarts";

const chart = ref<HTMLElement | null>(null);
const lineSmooth = ref(false);
const lineBoundaryGap = ref(true);

const initChart = () => {
  if (chart.value) {
    const myChart = echarts.init(chart.value);
    const option = {
      xAxis: {
        type: "category",
        boundaryGap: lineBoundaryGap,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
          smooth: lineSmooth.value,
        },
      ],
    };
    myChart.setOption(option);
    window.addEventListener("resize", () => {
      myChart.resize();
    });
  }
};

// 监听 lineSmooth 的变化
watch(lineSmooth, (newValue) => {
  const myChart = echarts.getInstanceByDom(chart.value!);
  if (myChart) {
    const option = {
      series: [
        {
          smooth: newValue,
        },
      ],
    };
    myChart.setOption(option);
  }
});

watch(lineBoundaryGap, (newValue) => {
  const myChart = echarts.getInstanceByDom(chart.value!);
  if (myChart) {
    const option = {
      xAxis: {
        boundaryGap: newValue,
      },
    };
    myChart.setOption(option);
  }
});

onMounted(() => {
  initChart();
});
</script>

<style lang="scss" scoped>
.line-chart-container {
  height: 100%;
  padding: 20px;
}
</style>
