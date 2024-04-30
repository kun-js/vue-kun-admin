<template>
  <div class="fourzerothree-exception-container">
    <div class="exception-container">
      <el-result>
        <template #icon><img class="img" src="@/assets/imgs/403.png" /> </template>
        <template #title>403 </template>
        <template #sub-title>抱歉,你无权访问页面! </template>
        <template #extra>
          <el-button type="primary" @click="handleToBackHome">返回首页</el-button>
        </template>
      </el-result>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

defineOptions({
  name: "403Page",
});

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
.fourzerothree-exception-container {
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
      height: 180px;
    }
  }
}
</style>
