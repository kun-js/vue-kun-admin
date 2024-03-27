<template>
  <div class="container">
    <div class="video-container">
      <video class="video" controls>
        <source src="@/assets/imgs/kunkunziwojieshao.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.el-main {
  --el-main-padding: 0px !important;
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
      width: 1080px;
      height: 720px;
    }
  }
}
</style>
