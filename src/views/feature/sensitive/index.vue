<template>
  <div class="sensitive-feature-container">
    <el-card style="max-width: 100%; height: var(--card-height)">
      <template #header>
        <span style="margin-right: 18px">敏感词过滤示例</span>
      </template>
      <p>过滤词(可自定义):脑残,傻逼,草泥马</p>
      <el-input v-model="textInput" v-filter placeholder="请输入敏感词" />
      <p>{{ textInput }}</p>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "Sensitive",
});

const textInput = ref("");
</script>

<style lang="scss" scoped>
.sensitive-feature-container {
  height: 100%;
  padding: 20px;
}
</style>
