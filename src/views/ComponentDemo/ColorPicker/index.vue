<template>
  <el-card style="max-width: 100%; height: 100%">
    <template #header>
      <span style="margin-right: 18px">取色器组件示例</span>
      <el-radio-group v-model="size">
        <el-radio value="large">大尺寸</el-radio>
        <el-radio value="default">默认尺寸</el-radio>
        <el-radio value="small">小尺寸</el-radio>
        <el-radio value="disabled">禁用</el-radio>
      </el-radio-group>
    </template>
    <el-color-picker v-model="color" show-alpha :size="size" :disabled="size === 'disabled'" />
  </el-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const size = ref("default");
const color = ref("#409EFF");
</script>

<style lang="scss" scoped></style>
