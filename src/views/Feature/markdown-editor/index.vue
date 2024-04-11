<template>
  <el-card style="max-width: 100%; height: 100%" :body-style="{ height: '93%' }">
    <template #header>
      <span style="margin-right: 18px">Markdown编辑器示例</span>
    </template>
    <MdEditor v-model="markdownText" style="height: 100%" />
  </el-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const markdownText = ref("# Hello Editor");
</script>

<style lang="scss" scoped></style>
