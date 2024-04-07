<template>
  <div class="setting" @click="handleToShowDrawer">
    <el-icon :size="20"><Setting /></el-icon>
  </div>

  <el-drawer v-model="drawer" :title="$t('header.setting')" direction="rtl" size="280px">
    <div class="drawer-container">
      <div class="drawer-body">
        <el-divider>{{ $t("header.themeColor") }}</el-divider>
        <div class="switch-dark">
          <el-switch v-model="isDark" :active-action-icon="MoonNight" :inactive-action-icon="Sunrise" />
        </div>
        <el-divider>{{ $t("header.faceShow") }}</el-divider>
        <div class="action-btn">Logo<el-switch v-model="isShowLogo" /></div>
        <div class="action-btn">折叠菜单<el-switch v-model="isCollapse" /></div>
        <div class="action-btn">页脚<el-switch v-model="hasFooter" /></div>
      </div>
      <div class="drawer-footer">
        <el-divider />
        <el-button type="danger" @click="clearCacheAndExit">清空缓存并退出</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { Sunrise, MoonNight } from "@element-plus/icons-vue";
import { inject, ref } from "vue";

import { useDark, useToggle } from "@vueuse/core";

const isShowLogo = inject<boolean>("isShowLogo");
const isCollapse = inject<boolean>("isCollapse");
const hasFooter = inject<boolean>("hasFooter");

const isDark = useDark();
const toggleDark = useToggle(isDark);

const drawer = ref(false);

const handleToShowDrawer = () => {
  drawer.value = !drawer.value;
};

const clearCacheAndExit = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
};
</script>

<style lang="scss" scoped>
.setting {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--header-button-active);
    border-bottom: 1px solid #eee;
  }
}

.drawer-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .drawer-body {
    display: flex;
    flex-direction: column;
    align-items: center;

    .switch-dark {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;
    }

    .action-btn {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }

  .drawer-footer {
    .el-button {
      width: 100%;
    }
  }
}
</style>
