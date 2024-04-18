<template>
  <div class="collapse" @click="handleToCollapse">
    <el-icon :size="20">
      <component :is="isCollapse ? 'Expand' : 'Fold'" />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";

const isCollapse = inject<boolean>("isCollapse");
const changeCollapse = inject<() => void>("changeCollapse");

const handleToCollapse = () => {
  changeCollapse?.();
};
</script>

<style lang="scss" scoped>
.collapse {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--header-button-active);
  }
}
</style>
