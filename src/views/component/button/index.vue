<template>
  <div class="button-component-container">
    <el-card style="max-width: 100%; height: var(--card-height)">
      <template #header>
        <span class="mr-18px">按钮组件示例</span>
        <el-radio-group v-model="size">
          <el-radio value="large">大尺寸</el-radio>
          <el-radio value="default">默认尺寸</el-radio>
          <el-radio value="small">小尺寸</el-radio>
          <el-radio value="disabled">禁用</el-radio>
        </el-radio-group>
      </template>
      <div>
        <el-radio-group v-model="radio" class="mb-18px">
          <el-radio label="default" value="default" size="large" />
          <el-radio label="plain" value="plain" size="large" />
          <el-radio label="round" value="round" size="large" />
          <el-radio label="circle" value="circle" size="large" />
          <el-radio label="link" value="link" size="large" />
        </el-radio-group>
      </div>
      <div>
        <el-button
          v-for="(item, index) in buttonList"
          :key="index"
          :size="size"
          :type="item.type"
          :plain="radio === 'plain'"
          :round="radio === 'round'"
          :circle="radio === 'circle'"
          :link="radio === 'link'"
          :icon="item.icon"
          :disabled="size === 'disabled'"
        >
          <template v-if="radio !== 'circle'" #default>
            <p>{{ item.text }}</p>
          </template>
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Check, Delete, Edit, Message, Search, Star } from "@element-plus/icons-vue";

defineOptions({
  name: "Button",
});

const buttonList = [
  {
    type: "",
    text: "Default",
    icon: Search,
  },
  {
    type: "primary",
    text: "Primary",
    icon: Edit,
  },
  {
    type: "success",
    text: "Success",
    icon: Check,
  },
  {
    type: "info",
    text: "Info",
    icon: Message,
  },
  {
    type: "warning",
    text: "Warning",
    icon: Star,
  },
  {
    type: "danger",
    text: "Danger",
    icon: Delete,
  },
];

const size = ref("default");
const radio = ref("default");
</script>

<style lang="scss" scoped>
.button-component-container {
  height: 100%;
  padding: 20px;
}
</style>
