<template>
  <div class="clipboard-feature-container">
    <el-card style="max-width: 100%; height: var(--card-height)">
      <template #header> 剪贴板示例 </template>
      <div class="copy">
        <el-input v-model="inputVal" style="width: 240px" placeholder="输入内容以复制" />
        <el-button type="primary" @click="handleToCopy">复制</el-button>
      </div>
      <div class="paste">
        <div>剪贴板复制内容: {{ clipboardVal }}</div>
        <el-button type="primary" @click="handleToPaste">粘贴剪贴板内容</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { ref } from "vue";

defineOptions({
  name: "Clipboard",
});

const inputVal = ref("");
const clipboardVal = ref("");

const handleToCopy = async () => {
  try {
    const textToCopy = inputVal.value;
    await navigator.clipboard.writeText(textToCopy);
    ElMessage.success("已复制到剪贴板!");
  } catch (error) {
    ElMessage.success("复制失败!");
  }
};
const handleToPaste = async () => {
  try {
    const text = await navigator.clipboard.readText();
    clipboardVal.value = text;
    ElMessage.success("粘贴成功!");
  } catch (error) {
    ElMessage.success("粘贴失败!");
  }
};
</script>

<style lang="scss" scoped>
.clipboard-feature-container {
  height: 100%;
  padding: 20px;

  .copy {
    .el-button {
      margin-left: 18px;
    }
  }

  .paste {
    display: flex;
    align-items: center;
    margin-top: 18px;

    .el-button {
      margin-left: 18px;
    }
  }
}
</style>
