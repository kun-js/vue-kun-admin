<template>
  <div class="form-designer-feature-container">
    <el-card style="max-width: 100%; height: calc(100vh - 48px)" :body-style="{ height: '100%', padding: 0 }">
      <iframe
        src="https://haixin-fang.github.io/vue-form-design/playground/index.html"
        width="100%"
        height="100%"
      ></iframe>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "FromDesigner",
});
</script>

<style lang="scss" scoped>
.form-designer-feature-container {
  height: 100%;
}

.starfish-editor {
  width: 100%;
  height: calc(100vh - 48px);
}
</style>
