<template>
  <div class="setting" @click="handleToShowDrawer">
    <el-icon :size="20"><Setting /></el-icon>
  </div>

  <el-drawer v-model="drawer" :title="$t('header.setting')" direction="rtl">
    <div class="drawer-container">
      <el-divider>{{ $t("header.themeColor") }}</el-divider>
      <div class="switch-dark">
        <el-switch v-model="isDark" :active-action-icon="MoonNight" :inactive-action-icon="Sunrise" />
      </div>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { Sunrise, MoonNight } from "@element-plus/icons-vue";
import { ref } from "vue";

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const drawer = ref(false);

const handleToShowDrawer = () => {
  drawer.value = !drawer.value;
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
  align-items: center;

  .switch-dark {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 10px;
  }
}
</style>
