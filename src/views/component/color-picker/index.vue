<template>
  <div class="color-picker-component-container">
    <el-card style="max-width: 100%; height: var(--card-height)">
      <template #header>
        <span class="mr-18px">取色器组件示例</span>
        <el-radio-group v-model="size">
          <el-radio value="large">大尺寸</el-radio>
          <el-radio value="default">默认尺寸</el-radio>
          <el-radio value="small">小尺寸</el-radio>
          <el-radio value="disabled">禁用</el-radio>
        </el-radio-group>
      </template>
      <el-color-picker v-model="color" show-alpha :size="size" :disabled="size === 'disabled'" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "ColorPicker",
});

const size = ref("default");
const color = ref("#409EFF");
</script>

<style lang="scss" scoped>
.color-picker-component-container {
  height: 100%;
  padding: 20px;
}
</style>
