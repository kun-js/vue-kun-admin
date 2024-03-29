<template>
  <el-card style="max-width: 100%; height: 100%" :body-style="{ height: '100%', padding: 0 }">
    <template #header>
      关于我们
      <div class="introduce">
        <span class="introduce-link" @click="handleToAdminGithub">vue-kun-admin</span>
        是一款基于Vue3.2、Vite5、Element-Plus、TypeScript的后台解决方案。
      </div>
    </template>
    <div class="container">
      <div class="video-container">
        <video class="video" controls>
          <source src="@/assets/imgs/kunkunziwojieshao.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
const handleToAdminGithub = () => {
  window.open("https://github.com/kun-js/vue-kun-admin", "_blank");
};
</script>

<style lang="scss" scoped>
.introduce {
  margin-top: 18px;
  font-size: 14px;
  cursor: pointer;

  &-link {
    color: #409eff;

    &:hover {
      color: #79bbff;
    }
  }
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/imgs/kunkunbg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .video-container {
    border: 1px solid #000;

    video {
      width: 800px;
    }
  }
}
</style>
