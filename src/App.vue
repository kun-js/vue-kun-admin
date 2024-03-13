<script setup lang="ts">
import SideBar from "@/components/SideBar/index.vue";
</script>

<template>
  <el-container>
    <el-aside width="200px"><SideBar /></el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
