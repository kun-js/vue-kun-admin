<template>
  <Personal />
  <div class="workbench-container">
    <el-row :gutter="20">
      <el-col :span="16"><Project /></el-col>
      <el-col :span="8"><Navigator /></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Personal from "./components/Personal.vue";
import Project from "./components/Project.vue";
import Navigator from "./components/Navigator.vue";
</script>

<style lang="scss" scoped>
.workbench-container {
  padding: 20px;
}
</style>
