<template>
  <div class="network-error-exception-container">
    <div class="exception-container">
      <el-result>
        <template #icon><img class="img" src="@/assets/imgs/networkerror.png" /> </template>
        <template #title>网络错误 </template>
        <template #sub-title>抱歉,你的网络已断开,请检查你的网络!</template>
        <template #extra>
          <el-button type="primary" @click="handleToReload">刷新</el-button>
        </template>
      </el-result>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "NetworkErrorPage",
});

const handleToReload = () => {
  location.reload();
};
</script>

<style lang="scss" scoped>
.network-error-exception-container {
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
      height: 160px;
    }
  }
}
</style>
