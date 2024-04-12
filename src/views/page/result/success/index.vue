<template>
  <div class="success-container">
    <el-result icon="success">
      <template #title>提交成功 </template>
      <template #sub-title>你的请求已被接受，我们将尽快处理。 </template>
      <template #extra>
        <el-button type="primary">查看</el-button>
        <el-button>打印</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.success-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  margin-top: 100px;
}
</style>
