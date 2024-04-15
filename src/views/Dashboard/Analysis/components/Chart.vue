<template>
  <el-card style="max-width: 100%; height: 100%">
    <el-tabs v-model="tabActiveName" @tab-click="handleClick">
      <el-tab-pane label="流量分析" name="traffic" lazy><TrafficChart /></el-tab-pane>
      <el-tab-pane label="访问量" name="visit" lazy><VisitChart /></el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script setup lang="ts">
import { TabsPaneContext } from "element-plus";
import TrafficChart from "./TrafficChart.vue";
import VisitChart from "./VisitChart.vue";
import { ref } from "vue";

const tabActiveName = ref("traffic");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style lang="scss" scoped></style>
+
