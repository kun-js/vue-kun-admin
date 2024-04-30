<template>
  <div class="word-preview-feature-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)" :body-style="{ height: '93%', padding: 0 }">
      <template #header> Word预览示例 </template>
      <vue-office-docx :src="docxUrl" style="height: 100%" @rendered="rendered" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import VueOfficeDocx from "@vue-office/docx";
import "@vue-office/docx/lib/index.css";
import { ref } from "vue";

defineOptions({
  name: "WordPreview",
});

const docxUrl = ref("http://static.shanhuxueyuan.com/test6.docx");

const rendered = () => {
  console.log("渲染完成");
};
</script>

<style scoped lang="scss">
.word-preview-feature-container {
  height: 100%;
  padding: 20px;
}
</style>
