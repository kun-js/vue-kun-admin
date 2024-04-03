<template>
  <el-container>
    <el-aside width="collapse"><SideBar :isCollapse="isCollapse" /></el-aside>
    <el-container>
      <el-header><Header :changeSideBarCollapse="changeSideBarCollapse" :isCollapse="isCollapse" /></el-header>
      <el-main>
        <Router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from "@/components/header/index.vue";
import SideBar from "@/components/sidebar/index.vue";
import { ref, provide } from "vue";

const isCollapse = ref(false);

const changeSideBarCollapse = () => {
  isCollapse.value = !isCollapse.value;
};

provide("isCollapse", isCollapse);
provide("changeCollapse", changeSideBarCollapse);
</script>

<style lang="scss" scoped>
.el-container {
  min-height: 100%;
}

.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;

  --el-header-height: 48px;
}

.el-aside {
  min-height: 100%;
}
</style>
