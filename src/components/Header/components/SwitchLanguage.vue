<template>
  <el-dropdown trigger="click">
    <div class="language">
      <Icon class="language-icon" icon="ion:language" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleToChangeLangZhCn">简体中文</el-dropdown-item>
        <!-- <el-dropdown-item @click="handleToChangeLangZhHk">繁體中文</el-dropdown-item> -->
        <el-dropdown-item @click="handleToChangeLangEnUs">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useLocaleStore } from "@/stores/locale";
import { Icon } from "@iconify/vue";

const localeStore = useLocaleStore();

const handleToChangeLangZhCn = () => {
  localeStore.getLocale("zh-CN");
};

// const handleToChangeLangZhHk = () => {
//   localeStore.getLocale("zh-HK");
// };

const handleToChangeLangEnUs = () => {
  localeStore.getLocale("en-US");
};
</script>

<style lang="scss" scoped>
.language {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--header-button-active);
    border-bottom: 1px solid #eee;
  }

  &-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
  }
}
</style>
