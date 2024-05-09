<template>
  <div class="basic-scroll-component-container">
    <el-card style="max-width: 100%; height: var(--card-height)" :body-style="{ height: '93%' }">
      <template #header>
        <span>基础滚动示例</span>
      </template>
      <el-scrollbar height="400px" always>
        <p v-for="item in 50" :key="item" class="scrollbar-item">{{ item }}</p>
      </el-scrollbar>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "BasicScroll",
});
</script>

<style lang="scss" scoped>
.basic-scroll-component-container {
  height: 100%;
  padding: 20px;
}

.scrollbar-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  color: var(--el-color-primary);
  text-align: center;
  background: var(--el-color-primary-light-9);
  border-radius: 4px;
}
</style>
