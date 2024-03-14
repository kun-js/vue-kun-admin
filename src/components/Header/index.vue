<template>
  <div class="header">
    <div class="header-left">
      <div class="fold">
        <el-icon :size="20"><Fold /></el-icon>
      </div>
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="header-right">
      <div class="search">
        <el-icon :size="20"><Search /></el-icon>
      </div>
      <div class="message">
        <el-icon :size="20"><Message /></el-icon>
      </div>
      <div class="fullscreen" @click="toggleFullScreen">
        <el-icon :size="20"> <component :is="isFullScreen ? 'Crop' : 'FullScreen'" /></el-icon>
      </div>
      <div class="user">
        <div class="user-avatar">
          <el-avatar
            :size="30"
            src="https://img1.baidu.com/it/u=3105572522,2684938522&fm=253&fmt=auto&app=120&f=JPEG?w=802&h=500"
          />
        </div>
        <div class="user-name">CXKun</div>
      </div>
      <div class="setting">
        <el-icon :size="20"><Setting /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isFullScreen = ref(false);

const toggleFullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    isFullScreen.value = false;
  } else {
    document.documentElement.requestFullscreen();
    isFullScreen.value = true;
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;

  &-left {
    display: flex;
    align-items: center;
    height: 60px;

    .fold {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;
    }
  }

  &-right {
    display: flex;
    align-items: center;
    height: 60px;

    .search {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;
    }

    .message {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;
    }

    .fullscreen {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }
    }

    .user {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;

      &-avatar {
        margin-right: 12px;
      }

      &-name {
        color: gray;
      }
    }

    .setting {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;
    }
  }
}
</style>
