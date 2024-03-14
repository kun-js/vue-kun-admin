<template>
  <div class="header">
    <div class="header-left">
      <div class="fold">
        <el-icon :size="20"><Fold /></el-icon>
      </div>
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <template v-for="(item, index) in breadList">
            <el-breadcrumb-item v-if="item.name" :key="index" :to="item.path">{{ item.meta.title }}</el-breadcrumb-item>
          </template>
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
      <el-tooltip placement="bottom" effect="dark" trigger="hover" :content="fullScreenTooltip">
        <div class="fullscreen" @click="toggleFullScreen">
          <el-icon :size="20"> <component :is="isFullScreen ? 'Crop' : 'FullScreen'" /></el-icon>
        </div>
      </el-tooltip>
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
import { ref, computed, watch, onMounted } from "vue";

import { useRoute, useRouter } from "vue-router";

const breadList = ref();
const isFullScreen = ref(false);

const router = useRouter();
const route = useRoute();

const fullScreenTooltip = computed(() => {
  return isFullScreen.value ? "退出全屏" : "全屏";
});

const getMatched = () => {
  console.log(route.matched);
  breadList.value = route.matched.filter((item) => item.meta && item.meta.title);
};

const toggleFullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    isFullScreen.value = false;
  } else {
    document.documentElement.requestFullscreen();
    isFullScreen.value = true;
  }
};

watch(
  () => route.path,
  (newValue, oldValue) => {
    //监听路由路径是否发生变化，之后更改面包屑
    breadList.value = route.matched.filter((item) => item.meta && item.meta.title);
  }
);
onMounted(() => {
  getMatched();
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 48px;

  &-left {
    display: flex;
    align-items: center;

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
