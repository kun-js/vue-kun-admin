<template>
  <div class="menu-tree-component-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)">
      <template #header>
        <span>树形菜单组件示例</span>
      </template>
      <el-tree style="max-width: 600px" :data="treeData" show-checkbox node-key="id" :props="defaultProps" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { getMenuList } from "@/api/index";
import { onMounted, ref } from "vue";

const treeData = ref();
const menuTreeList = ref();
const defaultProps = {
  children: "children",
  label: "label",
};

const fetchData = async () => {
  try {
    const result = await getMenuList();
    console.log("result: ", result);
    menuTreeList.value = result;
  } catch (error) {
    console.log("error: ", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.menu-tree-component-container {
  height: 100%;
  padding: 20px;
}
</style>
