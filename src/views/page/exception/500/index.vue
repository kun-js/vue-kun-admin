<template>
  <div class="fivezerozero-exception-container">
    <div class="exception-container">
      <el-result>
        <template #icon><img class="img" src="@/assets/imgs/500.png" /> </template>
        <template #title>500 </template>
        <template #sub-title>抱歉,服务器出现错误!</template>
        <template #extra>
          <el-button type="primary" @click="handleToBackHome">返回首页</el-button>
        </template>
      </el-result>
    </div>
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
.fivezerozero-exception-container {
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
      width: 250px;
      height: 180px;
    }
  }
}
</style>
