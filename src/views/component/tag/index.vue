<template>
  <div class="button-component-container">
    <el-card style="max-width: 100%; height: var(--card-height)">
      <template #header>
        <span style="margin-right: 18px">按钮组件示例</span>
        <el-radio-group v-model="size">
          <el-radio value="large">大尺寸</el-radio>
          <el-radio value="default">默认尺寸</el-radio>
          <el-radio value="small">小尺寸</el-radio>
        </el-radio-group>
      </template>
      <span>基础示例</span>
      <div class="mb-18px">
        <el-radio-group v-model="effect">
          <el-radio label="dark" value="dark" size="large" />
          <el-radio label="light" value="light" size="large" />
          <el-radio label="plain" value="plain" size="large" />
        </el-radio-group>
      </div>
      <div class="mb-18px">
        <el-checkbox-group v-model="typeOptions">
          <el-checkbox v-for="item in type" :key="item" :label="item" :value="item">
            {{ item }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
      <el-tag
        class="mr-18px"
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        :effect="effect"
        :size="size"
        :closable="typeOptions.includes('closable')"
        :round="typeOptions.includes('round')"
      >
        {{ item.label }}
      </el-tag>
      <el-divider />
      <span>动态编辑标签</span>
      <div class="flex gap-2 mt-8px">
        <el-tag v-for="tag in dynamicTags" :key="tag" closable :disable-transitions="false" @close="handleClose(tag)">
          {{ tag }}
        </el-tag>
        <el-input
          v-if="inputVisible"
          ref="InputRef"
          v-model="inputValue"
          class="w-20"
          size="small"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <el-button v-else size="small" @click="showInput"> 添加标签 </el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import type { TagProps } from "element-plus";
import { ElInput } from "element-plus";
import { nextTick, ref } from "vue";

defineOptions({
  name: "Tag",
});

type Item = { type: TagProps["type"]; label: string };

const typeOptions = ref<string[]>([]);
const type = ["closable", "round"];
const size = ref("default");
const effect = ref("dark");
const items = ref<Array<Item>>([
  { type: "primary", label: "primary" },
  { type: "success", label: "success" },
  { type: "info", label: "info" },
  { type: "warning", label: "warning" },
  { type: "danger", label: "danger" },
]);

const inputValue = ref("");
const dynamicTags = ref(["标签1", "标签2", "标签3"]);
const inputVisible = ref(false);
const InputRef = ref<InstanceType<typeof ElInput>>();

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = "";
};
</script>

<style lang="scss" scoped>
.button-component-container {
  height: 100%;
  padding: 20px;
}
</style>
