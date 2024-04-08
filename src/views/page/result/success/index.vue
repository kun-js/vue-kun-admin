<template>
  <div class="container">
    <div class="icon"><img class="success-icon" src="@/assets/imgs/successicon.png" alt="" /></div>
    <div class="text">提交成功</div>
    <div class="tip-text">你的请求已被接受，我们将尽快处理。</div>
    <div class="action">
      <el-button type="primary">查看</el-button>
      <el-button>打印</el-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  margin-top: 100px;

  .icon {
    .success-icon {
      width: 100px;
      height: 100px;
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
