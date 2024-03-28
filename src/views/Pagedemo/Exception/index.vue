<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="404" name="404"><FourZeroFour /></el-tab-pane>
    <el-tab-pane label="403" name="403"><FourZeroThree /></el-tab-pane>
    <el-tab-pane label="500" name="500"><FiveZeroZero /></el-tab-pane>
    <el-tab-pane label="网络错误" name="networkerror"><NetworkError /></el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import FourZeroFour from "./components/fourzerofour.vue";
import FourZeroThree from "./components/fourzerothree.vue";
import FiveZeroZero from "./components/fivezerozero.vue";
import NetworkError from "./components/networkerror.vue";

const activeName = ref("404");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style lang="scss" scoped></style>
