<template>
  <el-card style="max-width: 100%; height: 100%" :body-style="{ height: '93%' }">
    <template #header> 账号管理示例 </template>
    <el-table :data="tableData" stripe border fixed style="width: 100%" height="100%" show-overflow-tooltip>
      <el-table-column align="center" prop="id" label="序号" width="60" />
      <el-table-column align="center" prop="username" label="账号" width="100" />
      <el-table-column align="center" prop="name" label="姓名" width="80" />
      <el-table-column align="center" prop="createTime" label="创建时间" />
      <el-table-column align="center" prop="role" label="角色" width="100" />
      <el-table-column align="center" prop="email" label="邮箱" />
      <el-table-column align="center" prop="tel" label="手机" width="120" />
      <el-table-column align="center" prop="department" label="部门" width="100" />
      <el-table-column align="center" prop="remark" label="备注" />
      <el-table-column align="center" label="操作" width="200">
        <template #default="action">
          <el-button size="small" @click="handleWatch(action.$index, action.row)">查看</el-button>
          <el-button size="small" type="primary" @click="handleEdit(action.$index, action.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(action.$index, action.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup lang="ts">
import { getSystemList } from "@/api/index";
import { onMounted, ref } from "vue";
import { getDateTime } from "@/utils/getDateTime";

interface User {
  id: number;
  username: string;
  name: string;
  createTime: string;
  role: string;
  email: string;
  tel: string;
  department: string;
  remark: string;
}

const tableData = ref();

const handleWatch = (index: number, row: User) => {
  console.log(index, row);
};
const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};

const fetchData = async () => {
  try {
    const result = await getSystemList();
    // console.log("result: ", result);
    tableData.value = result.accountList;
  } catch (error) {
    console.log("error: ", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.el-table__cell {
  align-items: center;
  justify-content: center;
}
</style>
