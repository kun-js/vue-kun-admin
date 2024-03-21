<template>
  <div class="header">
    <div class="header-left">
      <div class="fold" @click="handleToCollapse">
        <el-icon :size="20">
          <component :is="isCollapse ? 'Expand' : 'Fold'" />
        </el-icon>
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
      <div class="search" @click="handleToLog">
        <el-icon :size="20"><Search /></el-icon>
      </div>
      <div class="message">
        <el-icon :size="20"><Message /></el-icon>
      </div>
      <el-tooltip placement="bottom" effect="dark" trigger="hover" :content="fullScreenTooltip">
        <div class="fullscreen" @click="handleToFullScreen">
          <el-icon :size="20"> <component :is="isFullScreen ? 'Crop' : 'FullScreen'" /></el-icon>
        </div>
      </el-tooltip>
      <el-tooltip placement="bottom" effect="light" trigger="hover">
        <div class="user">
          <div class="user-avatar">
            <el-avatar :size="30" :src="store.userInfo.avatar" />
          </div>
          <div class="user-name">{{ store.userInfo.name }}</div>
        </div>
        <template #content>
          <div class="logout" @click="handleToLogout">
            <span class="text">退出</span>
          </div>
        </template>
      </el-tooltip>
      <div class="setting" @click="handleToShowDrawer">
        <el-icon :size="20"><Setting /></el-icon>
      </div>
    </div>
  </div>
  <el-drawer v-model="drawer" title="项目设置" direction="rtl">
    <span>无</span>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const store = useUserStore();

const props = defineProps<{
  isCollapse: Boolean;
  changeSideBarCollapse: Function;
}>();

const breadList = ref();
const isFullScreen = ref(false);
const drawer = ref(false);

const router = useRouter();
const route = useRoute();

const fullScreenTooltip = computed(() => {
  return isFullScreen.value ? "退出全屏" : "全屏";
});

const handleToLog = () => {
  console.log(123);
};

const handleToCollapse = () => {
  props.changeSideBarCollapse();
};

const handleToShowDrawer = () => {
  drawer.value = !drawer.value;
};

const getMatched = () => {
  // console.log(route.matched);
  breadList.value = route.matched.filter((item) => item.meta && item.meta.title);
};

const handleToFullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    isFullScreen.value = false;
  } else {
    document.documentElement.requestFullscreen();
    isFullScreen.value = true;
  }
};

const handleToLogout = () => {
  localStorage.removeItem("pinia-user");
  router.push("/login");
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
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }
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
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }

      &-avatar {
        margin-right: 12px;
      }

      &-name {
        color: gray;
      }
    }

    .logout {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        background-color: #f4f4f4;
      }

      .text {
        margin-left: 8px;
      }
    }

    .setting {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
}
</style>
