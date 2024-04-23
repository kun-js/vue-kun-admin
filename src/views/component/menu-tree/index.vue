<template>
  <div class="menu-tree-component-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)" :body-style="{ height: '95%' }">
      <template #header>
        <span>树形菜单组件示例</span>
      </template>
      <el-scrollbar height="100%">
        <el-tree style="max-width: 600px" :data="menuTreeList" show-checkbox node-key="id" :props="defaultProps" />
      </el-scrollbar>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { getMenuList } from "@/api/index";
import { onMounted, ref } from "vue";

const menuTreeList = ref();
const defaultProps = {
  children: "children",
  label: "label",
};

const mapMenu = (menuList: any[]): any[] => {
  return menuList.map((item) => ({
    id: uuidv4(),
    label: item.title,
    children: item.children ? mapMenu(item.children) : undefined,
  }));
};

const fetchData = async () => {
  try {
    const result = await getMenuList();
    // console.log("result: ", result);
    const mappedMenuList = mapMenu(result);
    menuTreeList.value = mappedMenuList;
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
