<template>
  <div class="container">
    <div class="icon"><img class="img" src="@/assets/imgs/networkerror.png" alt="" /></div>
    <div class="text">网络错误</div>
    <div class="tip-text">抱歉,你的网络已断开,请检查你的网络!</div>
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
  height: 800px;
  margin-top: 100px;

  .icon {
    .img {
      width: 250px;
      height: 200px;
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
