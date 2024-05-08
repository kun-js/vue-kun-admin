<template>
  <div class="code-editor-feature-container">
    <el-card style="max-width: 100%; height: var(--card-height)" :body-style="{ height: '100%', padding: 0 }">
      <template #header>代码编辑器示例</template>
      <codemirror
        v-model="code"
        placeholder="在这里输入代码..."
        :style="{ height: '100%' }"
        :autofocus="true"
        :tabSize="2"
        :extensions="extensions"
        @change="onChange"
        @input="onInput"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { ref } from "vue";

defineOptions({
  name: "CodeEditor",
});

const code = ref("");
const extensions = [javascript(), oneDark];

const onChange = (val: string) => {
  console.log(val);
};

const onInput = (val: string) => {
  console.log(val);
};
</script>

<style lang="scss" scoped>
.code-editor-feature-container {
  height: 100%;
  padding: 20px;
}
</style>
