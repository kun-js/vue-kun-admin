<template>
  <el-card style="max-width: 100%">
    <template #header> <strong>该平台所选技术栈如下</strong> </template>
    <el-descriptions v-if="!isEmpty(dependencies)" title="生产环境依赖" :column="3" border>
      <el-descriptions-item v-for="(version, name) in dependencies" :key="name">
        <template #label> {{ name }} </template>
        {{ version }}
      </el-descriptions-item>
    </el-descriptions>
    <el-divider v-if="!isEmpty(dependencies) && !isEmpty(devDependencies)" />
    <el-descriptions v-if="!isEmpty(devDependencies)" title="开发环境依赖" :column="3" border>
      <el-descriptions-item v-for="(version, name) in devDependencies" :key="name">
        <template #label> {{ name }} </template>
        {{ version }}
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { isEmpty } from "@/utils/isEmpty";
import dependenciesJSON from "./dependencies.json";

const dependencies = ref<Record<string, string>>(dependenciesJSON.dependencies || {});
const devDependencies = ref<Record<string, string>>(dependenciesJSON.devDependencies || {});
</script>

<style lang="scss" scoped></style>
