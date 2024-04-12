<template>
  <el-card style="max-width: 100%">
    <template #header> <strong>该平台所选技术栈如下</strong> </template>
    <el-descriptions title="生产环境依赖" :column="3" border>
      <el-descriptions-item v-for="(version, name) in dependencies" :key="name">
        <template #label> {{ name }} </template>
        {{ version }}
      </el-descriptions-item>
    </el-descriptions>
    <el-divider />
    <el-descriptions title="开发环境依赖" :column="3" border>
      <el-descriptions-item v-for="(version, name) in devDependencies" :key="name">
        <template #label> {{ name }} </template>
        {{ version }}
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

const dependencies = ref<Record<string, string>>({});
const devDependencies = ref<Record<string, string>>({});

const getPackageJson = async () => {
  try {
    const response = await axios.get("/package.json");
    const packageJson = response.data;
    if (packageJson && packageJson.dependencies) {
      dependencies.value = packageJson.dependencies;
    }
    if (packageJson && packageJson.devDependencies) {
      devDependencies.value = packageJson.devDependencies;
    }
  } catch (error) {
    console.error("获取package.json文件失败:", error);
  }
};

onMounted(() => {
  getPackageJson();
});
</script>

<style lang="scss" scoped></style>
