<script setup lang="ts">
import SideBar from "@/components/SideBar/index.vue";
import Header from "@/components/Header/index.vue";
</script>

<template>
  <el-container>
    <el-aside width="200px"><SideBar /></el-aside>
    <el-container>
      <el-header><Header /></el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
