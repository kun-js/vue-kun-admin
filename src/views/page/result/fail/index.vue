<template>
  <div class="fail-container">
    <el-result icon="error">
      <template #title>提交失败 </template>
      <template #sub-title>请重新核对信息填写并重新提交 </template>
      <template #extra>
        <el-button type="primary">返回修改</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.fail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  margin-top: 100px;
}
</style>
