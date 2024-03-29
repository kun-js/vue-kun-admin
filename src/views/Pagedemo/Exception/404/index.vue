<template>
  <div class="container">
    <div class="icon"><img class="img" src="@/assets/imgs/404.png" alt="" /></div>
    <div class="text">404</div>
    <div class="tip-text">抱歉,你访问的页面不存在!</div>
    <div class="action"><el-button type="primary">返回首页</el-button></div>
  </div>
</template>

<script setup lang="ts"></script>

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
      width: 200px;
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
