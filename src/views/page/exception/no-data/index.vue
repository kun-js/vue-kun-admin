<template>
  <div class="container">
    <div class="icon"><img class="img" src="@/assets/imgs/noData.png" alt="" /></div>
    <div class="text">暂无数据</div>
    <div class="tip-text">抱歉!此页暂无数据!</div>
    <div class="action"><el-button type="primary" @click="handleToReload">刷新</el-button></div>
  </div>
</template>

<script setup lang="ts">
const handleToReload = () => {
  location.reload();
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  margin-top: 100px;

  .icon {
    .img {
      width: 210px;
      height: 140px;
    }
  }

  .text {
    margin-top: 12px;
    font-size: 24px;
  }

  .tip-text {
    margin-top: 12px;
    font-size: 14px;
    color: #8c8c8c;
  }

  .action {
    margin-top: 12px;
  }
}
</style>
