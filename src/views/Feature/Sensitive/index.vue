<template>
  <el-card style="max-width: 100%; height: 100%">
    <template #header>
      <span style="margin-right: 18px">敏感词过滤示例</span>
    </template>
    <p>过滤词(可自定义):脑残,傻逼,草泥马</p>
    <el-input v-model="textInput" v-filter />
    <p>{{ textInput }}</p>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const textInput = ref("");
</script>

<style lang="scss" scoped></style>
