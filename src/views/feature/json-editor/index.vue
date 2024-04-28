<template>
  <div class="json-editor-feature-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)" :body-style="{ height: '93%' }">
      <template #header>
        <span style="margin-right: 18px">Json编辑器示例</span>
      </template>
      <vue-json-pretty
        v-model:data="jsonEditorOptions.data"
        :deep="jsonEditorOptions.deep"
        :showLine="jsonEditorOptions.showLine"
        :showLineNumber="jsonEditorOptions.showLineNumber"
        :showLength="jsonEditorOptions.showLength"
        :showIcon="jsonEditorOptions.showIcon"
        :editable="jsonEditorOptions.editable"
        :editableTrigger="jsonEditorOptions.editableTrigger as any"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import { reactive } from "vue";

const jsonData = {
  state: "200",
  message: "success",
  data: [
    {
      id: 10001,
      title: "Vue",
      link: "https://cn.vuejs.org/",
    },
    {
      id: 10002,
      title: "React",
      link: "https://react.docschina.org/",
    },
    {
      id: 10003,
      title: "Angular",
      link: "https://angular.cn/",
    },
  ],
};

const jsonEditorOptions = reactive({
  data: jsonData,
  deep: 3,
  showLine: true,
  showLineNumber: true,
  showIcon: true,
  showLength: true,
  editable: true,
  editableTrigger: "click",
});
</script>

<style lang="scss" scoped>
.json-editor-feature-container {
  height: 100%;
  padding: 20px;
}
</style>
