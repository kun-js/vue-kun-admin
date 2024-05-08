<template>
  <div class="line-chart-container">
    <el-card style="max-width: 100%; height: var(--card-height)" :body-style="{ height: '90%' }">
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

defineOptions({
  name: "LineChart",
});

const chart = ref<HTMLElement | null>(null);
const lineSmooth = ref(false);
const lineBoundaryGap = ref(true);

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
          name: "Email",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210],
          smooth: lineSmooth.value,
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310],
          smooth: lineSmooth.value,
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 330, 410],
          smooth: lineSmooth.value,
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          data: [320, 332, 301, 334, 390, 330, 320],
          smooth: lineSmooth.value,
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
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
    const option = myChart.getOption() as echarts.EChartsOption;
    if (Array.isArray(option.series)) {
      myChart.setOption({
        series: option.series.map((series) => ({
          ...series,
          smooth: newValue,
        })),
      });
    } else {
      // 如果不是数组，尝试将其转换为数组后再进行操作
      myChart.setOption({
        series: [option.series].map((series) => ({
          ...series,
          smooth: newValue,
        })),
      });
    }
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
