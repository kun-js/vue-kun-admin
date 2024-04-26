<template>
  <div class="pdf-preview-iframe-feature-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)" :body-style="{ height: '93%', padding: 0 }">
      <template #header>
        PDF预览示例
        <el-button type="primary" @click="handleToShowPdf1">展示多页PDF</el-button>
        <el-button type="primary" @click="handleToShowPdf2">展示单页PDF</el-button>
      </template>
      <div class="pdf-container">
        <iframe :src="pdfUrl" width="100%" height="100%"></iframe>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import pdf1 from "./test1.pdf";
import pdf2 from "./test2.pdf";
const pdfUrl = ref(""); // pdf文件地址
// const fileUrl = "/pdfjs/web/viewer.html?file="; // pdfjs文件地址

const handleToShowPdf1 = () => {
  pdfUrl.value = `/pdfjs/web/viewer.html?file=${pdf1}`;
};
const handleToShowPdf2 = () => {
  pdfUrl.value = `/pdfjs/web/viewer.html?file=${pdf2}`;
};

onMounted(() => {
  // encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
  // 核心就是将 iframe 的 src 属性设置为 pdfjs 的地址，然后将 pdf 文件的地址作为参数传递给 pdfjs
  // 例如：http://localhost:8080/pdfjs/web/viewer.html?file=http%3A%2F%2Flocalhost%3A8080%2Fpdf%2Ftest.pdf
  // pdfUrl.value = fileUrl + encodeURIComponent("./test.pdf");
});
</script>

<style scoped lang="scss">
.pdf-preview-iframe-feature-container {
  height: 100%;
  padding: 20px;

  .pdf-container {
    width: 100%;
    height: 100%;
  }
}
</style>
