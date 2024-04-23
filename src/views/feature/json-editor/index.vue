<template>
  <div class="json-editor-feature-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)" :body-style="{ height: '93%', padding: 0 }">
      <template #header>
        <span style="margin-right: 18px">Json编辑器示例</span>
      </template>
      <JsonEditorVue
        style="height: 100%"
        v-model="jsonStr"
        :modeList="couldView"
        :currentMode="'tree'"
        @update:model-value="updateModelValue"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

//1.导入json-editor-vue3
import JsonEditorVue from "json-editor-vue3";

//2.定义修改的json字段的值,
const jsonStr = ref({ key: "key", value: "value" });

const couldView = ref(["tree", "code", "form", "view"]);
const updateModelValue = (val: unknown) => {
  console.log(val, "修改了值");
};
</script>

<style lang="scss" scoped>
.json-editor-feature-container {
  height: 100%;
  padding: 20px;
}
</style>
