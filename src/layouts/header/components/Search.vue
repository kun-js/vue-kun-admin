<template>
  <div class="search" @click="handleToLog">
    <el-icon :size="20"><Search /></el-icon>
  </div>
</template>

<script setup lang="ts">
const handleToLog = () => {
  console.log("search");
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
}
</style>
