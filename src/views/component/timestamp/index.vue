<template>
  <div class="timestamp-component-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)">
      <template #header> 相对时间示例 </template>
      <div>
        <strong>基础示例</strong>
        <div v-time="Date.now() - 7620000"></div>
        <div v-time="Date.now() - 874350000"></div>
        <div v-time="Date.now() - 915420000000"></div>
      </div>
      <el-divider />
      <div>
        <strong>定时更新</strong>
        <div>进入页面的时间：{{ initialTime }}</div>
        <div>实时时间：{{ currentTime }}</div>
        <div>相对时间：<span v-time="timestamp"></span></div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

const initialTime = ref(new Date().toLocaleString());
const currentTime = ref(new Date().toLocaleString());
const enterTime = ref(Date.now());
const diffTime = ref(0);

const timestamp = computed(() => {
  return Date.now() - diffTime.value;
});

onMounted(() => {
  setInterval(() => {
    currentTime.value = new Date().toLocaleString();
    diffTime.value = new Date(currentTime.value).getTime() - enterTime.value;
  }, 1000);
});
</script>

<style lang="scss" scoped>
.timestamp-component-container {
  height: 100%;
  padding: 20px;
}
</style>
