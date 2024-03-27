<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="成功页" name="success"><Success /></el-tab-pane>
    <el-tab-pane label="失败页" name="fail"><Fail /></el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import Success from "./components/success.vue";
import Fail from "./components/fail.vue";

const activeName = ref("success");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style lang="scss" scoped></style>
