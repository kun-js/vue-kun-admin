<template>
  <el-card style="max-width: 100%">
    <strong>该平台开发依赖如下</strong>
  </el-card>
  <div class="dependency-description-container">
    <el-card style="max-width: 100%">
      <el-descriptions v-if="!isEmpty(dependencies)" title="生产环境依赖" :column="3" border="true">
        <el-descriptions-item v-for="(version, name) in dependencies" :key="name">
          <template #label> {{ name }} </template>
          {{ version }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
  <div class="dependency-description-container" style="padding-bottom: 20px">
    <el-card style="max-width: 100%">
      <el-descriptions v-if="!isEmpty(devDependencies)" title="开发环境依赖" :column="3" border="true">
        <el-descriptions-item v-for="(version, name) in devDependencies" :key="name">
          <template #label> {{ name }} </template>
          {{ version }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { isEmpty } from "@/utils/isEmpty";
import dependenciesJSON from "./dependencies.json";

defineOptions({
  name: "Skill",
});

const dependencies = ref<Record<string, string>>(dependenciesJSON.dependencies || {});
const devDependencies = ref<Record<string, string>>(dependenciesJSON.devDependencies || {});
</script>

<style lang="scss" scoped>
.dependency-description-container {
  padding: 20px 20px 0;
}
</style>
