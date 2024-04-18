<template>
  <el-tooltip placement="bottom" effect="dark" trigger="hover" :content="fullScreenTooltip">
    <div class="fullscreen" @click="handleToFullScreen">
      <el-icon :size="20"> <component :is="isFullScreen ? 'Crop' : 'FullScreen'" /></el-icon>
    </div>
  </el-tooltip>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const isFullScreen = ref(false);

const fullScreenTooltip = computed(() => {
  return isFullScreen.value ? t("header.exitFullScreen") : t("header.entryFullScreen");
});

const handleToFullScreen = () => {
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
.fullscreen {
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
</style>
