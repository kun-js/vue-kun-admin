<template>
  <div class="mind-map-feature-container">
    <el-card style="max-width: 100%; height: calc(100vh - 48px)" :body-style="{ height: '100%', padding: 0 }">
      <iframe src="https://wanglin2.github.io/mind-map/#/" width="100%" height="100%"></iframe>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "MindMap",
});
</script>

<style lang="scss" scoped>
.mind-map-feature-container {
  height: 100%;
}
</style>
