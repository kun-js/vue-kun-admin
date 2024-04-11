<template>
  <el-card style="max-width: 100%; height: 100%" :body-style="{ height: '93%' }">
    <template #header> 账号管理示例 </template>
    <el-table :data="tableData" stripe border fixed style="width: 100%" height="100%" show-overflow-tooltip>
      <el-table-column align="center" prop="id" label="序号" width="60" />
      <el-table-column align="center" prop="username" label="账号" />
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

  <el-dialog v-model="editDialogVisible" title="编辑操作" width="500">
    <el-form :model="editForm" label-width="auto">
      <el-form-item label="账号">
        <el-input v-model="editForm.username" />
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="editForm.role" placeholder="请选择角色">
          <el-option label="超级管理员" value="superAdmin" />
          <el-option label="管理员" value="admin" />
          <el-option label="普通用户" value="user" />
        </el-select>
      </el-form-item>
      <el-form-item label="部门">
        <el-select v-model="editForm.department" placeholder="请选择部门">
          <el-option label="技术部" value="jishu" />
          <el-option label="人事部" value="renshi" />
          <el-option label="市场部" value="shichang" />
          <el-option label="财务部" value="caiwu" />
          <el-option label="销售部" value="xiaoshou" />
        </el-select>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="editForm.name" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="editForm.email" />
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="editForm.remark" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleToFinishEdit"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog v-model="deleteDialogVisible" title="删除操作" width="500">
    <span>
      确定要删除
      <strong>[{{ deleteName }}]</strong>
      的信息?(此操作不可逆!)
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取消</el-button>
        <el-button type="danger" @click="handleToFinishDelete"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { getSystemList } from "@/api/index";
import { onMounted, ref } from "vue";
import { deepClone } from "@/utils/deepClone";
import { ElMessage } from "element-plus";

const tableData = ref();
const editDialogVisible = ref(false);
const deleteDialogVisible = ref(false);
const editForm = ref({
  id: 0,
  username: "",
  name: "",
  createTime: "",
  role: "",
  email: "",
  tel: "",
  department: "",
  remark: "",
});
const editIndex = ref();
const deleteIndex = ref();
const deleteName = ref();

const handleWatch = (index: number, row: any) => {
  console.log(index, row);
};
const handleEdit = (index: number, row: any) => {
  // console.log(index, row);
  editDialogVisible.value = true;
  editIndex.value = index;
  editForm.value = deepClone(row);
};
const handleDelete = (index: number, row: any) => {
  // console.log(index, row);
  deleteIndex.value = index;
  deleteName.value = row.name;
  deleteDialogVisible.value = true;
};

const handleToFinishEdit = () => {
  tableData.value[editIndex.value] = { ...editForm.value };
  ElMessage.success("编辑成功!");
  editDialogVisible.value = false;
  editIndex.value = null;
};

const handleToFinishDelete = () => {
  tableData.value.splice(deleteIndex.value, 1);
  ElMessage.success("删除成功!");
  deleteDialogVisible.value = false;
  deleteIndex.value = null;
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
