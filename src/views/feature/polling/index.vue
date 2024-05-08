<template>
  <div class="polling-feature-container">
    <el-card style="max-width: 100%; height: var(--card-height)">
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

defineOptions({
  name: "Polling",
});

const personName = ref<string>("");

const fetchPersonName = async () => {
  const names = ["Alice", "Bob", "Charlie", "David"];
  const randomIndex = Math.floor(Math.random() * names.length);
  personName.value = names[randomIndex];
  ElMessage.success("当前人员名字为:" + personName.value);
  return names[randomIndex];
};

let pollingTimer: NodeJS.Timeout | null = null;

onMounted(() => {
  const pollingInterval = 5000;
  pollingTimer = startPolling(fetchPersonName, { interval: pollingInterval, onError: console.error });
});

onUnmounted(() => {
  if (pollingTimer) {
    stopPolling(pollingTimer);
    pollingTimer = null;
  }
});
</script>

<style lang="scss" scoped>
.polling-feature-container {
  height: 100%;
  padding: 20px;
}
</style>
