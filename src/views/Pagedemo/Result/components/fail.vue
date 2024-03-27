<template>
  <div class="a">
    <div class="container">
      <div class="icon"><img class="fail-icon" src="@/assets/imgs/failicon.png" alt="" /></div>
      <div class="text">提交失败</div>
      <div class="tip-text">请重新核对信息填写并重新提交</div>
      <div class="action"><el-button type="primary">返回修改</el-button></div>
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
  height: 800px;
  margin-top: 100px;

  .icon {
    .fail-icon {
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
