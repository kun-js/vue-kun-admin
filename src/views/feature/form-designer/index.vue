<template>
  <div class="form-designer-feature-container">
    <starfish-editor class="starfish-editor" />
  </div>
</template>

<script setup lang="ts">
import StarfishEditor from "starfish-editor";
import "starfish-editor/src/styles/index.scss";

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
