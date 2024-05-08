<template>
  <div class="message-component-container">
    <el-card style="max-width: 100%; height: var(--card-height)" :body-style="{ height: '95%' }">
      <template #header>
        <span>消息提示组件示例</span>
      </template>
      <el-button type="info" @click="open1">Info</el-button>
      <el-button type="success" @click="open2">Success</el-button>
      <el-button type="warning" @click="open3">Warning</el-button>
      <el-button type="danger" @click="open4">Error</el-button>
      <el-button @click="open5">可关闭</el-button>
      <el-button type="success" @click="open6">自定义图标Success</el-button>
      <el-button type="danger" @click="open7">自定义图标Error</el-button>
      <el-button @click="openHTML">使用 HTML 片段作为正文内容</el-button>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { Select, CloseBold } from "@element-plus/icons-vue";

defineOptions({
  name: "Message",
});

const open1 = () => {
  ElMessage("Info");
};
const open2 = () => {
  ElMessage({
    message: "Success",
    type: "success",
  });
};
const open3 = () => {
  ElMessage({
    message: "Warning",
    type: "warning",
  });
};
const open4 = () => {
  ElMessage.error("Error");
};
const open5 = () => {
  ElMessage({
    showClose: true,
    message: "点击右侧X按钮可关闭",
    type: "info",
  });
};
const open6 = () => {
  ElMessage({
    icon: Select,
    message: "Success",
    type: "success",
  });
};
const open7 = () => {
  ElMessage({
    icon: CloseBold,
    message: "Error",
    type: "error",
  });
};
const openHTML = () => {
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: "<strong>这是 <i>HTML</i> 文本</strong>",
  });
};
</script>

<style lang="scss" scoped>
.message-component-container {
  height: 100%;
  padding: 20px;
}
</style>
