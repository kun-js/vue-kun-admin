<template>
  <div class="success-page-container">
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
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "SuccessPage",
});
</script>

<style lang="scss" scoped>
.success-page-container {
  height: 100%;
  padding: 20px;

  .success-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80%;
    margin-top: 100px;
  }
}
</style>
