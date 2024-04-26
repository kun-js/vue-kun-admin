<template>
  <div class="excel-preview-feature-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)" :body-style="{ height: '93%', padding: 0 }">
      <template #header> Excel预览示例 </template>
      <vue-office-excel :src="excelUrl" style="height: 100%" @rendered="renderedHandler" @error="errorHandler" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
//引入VueOfficeExcel组件
import VueOfficeExcel from "@vue-office/excel";
//引入相关样式
import "@vue-office/excel/lib/index.css";

import { ref } from "vue";

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
