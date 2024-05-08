<template>
  <div class="markdown-editor-feature-container">
    <el-card style="max-width: 100%; height: var(--card-height)" :body-style="{ height: '93%', padding: 0 }">
      <template #header>
        <span style="margin-right: 18px">Markdown编辑器示例</span>
      </template>
      <MdEditor v-model="markdownText" style="height: 100%" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

defineOptions({
  name: "MarkdownEditor",
});

const markdownText = ref("# Hello Editor");
</script>

<style lang="scss" scoped>
.markdown-editor-feature-container {
  height: 100%;
  padding: 20px;
}
</style>
