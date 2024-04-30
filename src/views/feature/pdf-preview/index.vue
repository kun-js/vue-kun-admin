<template>
  <div class="pdf-preview-feature-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)" :body-style="{ height: '93%', padding: 0 }">
      <template #header> Pdf预览示例 </template>
      <vue-office-pdf :src="pdfUrl" style="height: 100%" @rendered="renderedHandler" @error="errorHandler" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import VueOfficePdf from "@vue-office/pdf";
import { ref } from "vue";

defineOptions({
  name: "PdfPreview",
});

const pdfUrl = ref("http://static.shanhuxueyuan.com/test.pdf");

const renderedHandler = () => {
  console.log("渲染完成");
};
const errorHandler = () => {
  console.log("渲染失败");
};
</script>

<style scoped lang="scss">
.pdf-preview-feature-container {
  height: 100%;
  padding: 20px;
}
</style>
