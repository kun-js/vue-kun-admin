<template>
  <div class="no-data-exception-container">
    <div class="exception-container">
      <el-result>
        <template #icon><img class="img" src="@/assets/imgs/noData.png" /> </template>
        <template #title>当前页无数据! </template>
        <template #extra>
          <el-button type="primary" @click="handleToReload">刷新</el-button>
        </template>
      </el-result>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleToReload = () => {
  location.reload();
};
</script>

<style lang="scss" scoped>
.no-data-exception-container {
  height: 100%;
  padding: 20px;

  .exception-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80%;
    margin-top: 100px;

    .img {
      width: 200px;
      height: 150px;
    }
  }
}
</style>
