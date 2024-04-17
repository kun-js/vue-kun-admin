<template>
  <div class="basic-list-page-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)">
      <template #header> 基础列表示例</template>
      <el-table :data="tableData" show-overflow-tooltip style="width: 100%">
        <el-table-column prop="name" label="姓名" width="100" />
        <el-table-column prop="gender" label="性别" width="100" />
        <el-table-column prop="age" label="年龄" width="100" />
        <el-table-column prop="email" label="邮箱" width="250" />
        <el-table-column prop="tel" label="联系方式" width="150" />
        <el-table-column prop="address" label="地址" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getUserList } from "@/api/index";

const tableData = ref([]);

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
.basic-list-page-container {
  height: 100%;
  padding: 20px;
}
</style>
