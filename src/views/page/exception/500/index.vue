<template>
  <div class="container">
    <div class="icon"><img class="img" src="@/assets/imgs/500.png" alt="" /></div>
    <div class="text">500</div>
    <div class="tip-text">抱歉,服务器出现错误!</div>
    <div class="action"><el-button type="primary" @click="handleToBackHome">返回首页</el-button></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const handleToBackHome = () => {
  router.push("/dashboard");
  sessionStorage.setItem("currentIndex", "/dashboard");
  setTimeout(() => {
    window.location.reload();
  });
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
