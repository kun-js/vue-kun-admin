<template>
  <el-card style="max-width: 100%; height: 100%">
    <template #header>
      基础列表示例
      <el-switch v-model="stripe" inline-prompt active-text="带斑马纹" inactive-text="无斑马纹" />
      <el-switch v-model="border" inline-prompt active-text="显示边框" inactive-text="无边框" />
    </template>
    <el-table :data="tableData" :stripe="stripe" :border="border" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="100" />
      <el-table-column prop="gender" label="性别" width="100" />
      <el-table-column prop="age" label="年龄" width="100" />
      <el-table-column prop="email" label="邮箱" width="250" />
      <el-table-column prop="tel" label="联系方式" width="150" />
      <el-table-column prop="address" label="地址" />
    </el-table>
  </el-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getUserList } from "@/api/index";

const tableData = ref([]);
const stripe = ref(false);
const border = ref(false);

const fetchData = async () => {
  try {
    const result = await getUserList();
    // console.log("result: ", result);
    tableData.value = result.userList;
  } catch (error) {
    console.log("error: ", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.el-switch {
  margin-left: 18px;
}
</style>
