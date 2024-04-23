<template>
  <div class="polling-feature-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)">
      <template #header> 轮询示例(5s一次) </template>
      <p>轮询人员列表: ["Alice", "Bob", "Charlie", "David"]</p>
      <p>当前人员名字：{{ personName }}</p>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { startPolling, stopPolling } from "@/utils/polling";
import { ElMessage } from "element-plus";

// 创建用于存储人员名字的状态
const personName = ref<string>("");

// 模拟获取人员名字的函数
const fetchPersonName = async () => {
  // 这里可以替换为实际的接口请求
  const names = ["Alice", "Bob", "Charlie", "David"]; // 假设有这些人员名字
  // 随机从数组中选择一个名字作为模拟结果
  const randomIndex = Math.floor(Math.random() * names.length);
  personName.value = names[randomIndex];
  ElMessage.success("当前人员名字为:" + personName.value);
  return names[randomIndex];
};

// 在页面加载时启动轮询
onMounted(() => {
  // 每5秒轮询一次获取人员名字，并更新状态
  const pollingInterval = 5000; // 单位：毫秒
  startPolling(fetchPersonName, { interval: pollingInterval, onError: console.error });
});

// 在页面卸载时停止轮询，防止内存泄漏
onUnmounted(() => {
  stopPolling(); // 停止轮询
});
</script>

<style lang="scss" scoped>
.polling-feature-container {
  height: 100%;
  padding: 20px;
}
</style>
