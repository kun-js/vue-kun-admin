<template>
  <div class="background-container">
    <el-card :body-style="{ height: '300px' }">
      <div class="background"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.background-container {
  margin-bottom: 20px;

  .background {
    width: 100%;
    height: 100%;
    // background-image: url("@/assets/imgs/kunkundance.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
