<template>
  <div class="sidebar-container">
    <Logo :isShowLogo="isShowLogo" :isCollapse="isCollapse" />
    <Menu :isShowLogo="isShowLogo" :isCollapse="isCollapse" />
  </div>
</template>

<script setup lang="ts">
import Logo from "./components/Logo.vue";
import Menu from "./components/Menu.vue";

defineProps<{
  isShowLogo: Boolean;
  isCollapse: Boolean;
}>();
</script>

<style lang="scss" scoped>
.sidebar-container {
  height: 100%;
  background-color: var(--menu-background);
}
</style>
