<template>
  <div class="header">
    <div class="header-left">
      <Collapse class="fold" />
      <Breadcrumb />
    </div>
    <div class="header-right">
      <div class="search" @click="handleToLog">
        <el-icon :size="20"><Search /></el-icon>
      </div>
      <Message />
      <Tour :foldEl="foldEl" :langEl="langEl" />
      <FullScreen />
      <SwitchLanguage class="lang" />
      <User />
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import Collapse from "./components/Collapse.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import SwitchLanguage from "./components/SwitchLanguage.vue";
import Message from "./components/Message.vue";
import Tour from "./components/Tour.vue";
import FullScreen from "./components/FullScreen.vue";
import Setting from "./components/Setting.vue";
import User from "./components/User.vue";
import { ref, provide } from "vue";

const foldEl = () => document.querySelector<HTMLElement>(".fold");
const langEl = () => document.querySelector<HTMLElement>(".lang");

const isShowBreadcrumbIcon = ref(false);

const handleToLog = () => {
  console.log("search");
};

provide("isShowBreadcrumbIcon", isShowBreadcrumbIcon);
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 48px;

  &-left {
    display: flex;
    align-items: center;
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
  }
}
</style>
