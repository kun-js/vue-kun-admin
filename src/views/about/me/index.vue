<template>
  <el-card style="max-width: 100%">
    <strong>关于</strong>
    <div class="mt-2">
      <el-link type="primary" href="https://github.com/kun-js/vue-kun-admin" target="_blank"> vue-kun-admin </el-link>
      <span>是一款基于Vue3.2、Vite5、Element-Plus、TypeScript的后台解决方案。</span>
    </div>
  </el-card>
  <div class="project-info-container">
    <el-card style="max-width: 100%">
      <el-descriptions title="项目信息" :column="3" border="true">
        <el-descriptions-item>
          <template #label> 版本 </template>
          0.0.1
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label> 最后编译时间 </template>
          {{ time }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label> 地点 </template>
          深圳
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label> 开发人员 </template>
          <el-tag>张三</el-tag>
          <el-tag class="ml-2">李四</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label> Github </template>
          <el-link type="primary" href="https://github.com/kun-js/vue-kun-admin" target="_blank"> Github </el-link>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { getDateTime } from "@/utils/getDateTime";
import { onMounted, ref } from "vue";

const time = ref();

const getTime = () => {
  time.value = getDateTime(4);
};

onMounted(() => {
  getTime();
});
</script>

<style lang="scss" scoped>
.project-info-container {
  padding: 20px;
}
</style>
