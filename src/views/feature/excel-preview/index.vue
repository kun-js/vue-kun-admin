<template>
  <div class="excel-preview-feature-container">
    <el-card style="max-width: 100%; height: var(--card-height)" :body-style="{ height: '93%', padding: 0 }">
      <template #header> Excel预览示例 </template>
      <vue-office-excel :src="excelUrl" style="height: 100%" @rendered="renderedHandler" @error="errorHandler" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import VueOfficeExcel from "@vue-office/excel";
import "@vue-office/excel/lib/index.css";
import { ref } from "vue";

defineOptions({
  name: "ExcelPreview",
});

const excelUrl = ref("http://static.shanhuxueyuan.com/demo/excel.xlsx");

const renderedHandler = () => {
  console.log("渲染完成");
};
const errorHandler = () => {
  console.log("渲染失败");
};
</script>

<style scoped lang="scss">
.excel-preview-feature-container {
  height: 100%;
  padding: 20px;
}
</style>
