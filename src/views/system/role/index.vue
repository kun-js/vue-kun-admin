<template>
  <el-card style="max-width: 100%; height: 100%" :body-style="{ height: '93%' }">
    <template #header> 角色管理示例 </template>
    <el-table :data="tableData" stripe border fixed style="width: 100%" max-height="100%" show-overflow-tooltip>
      <el-table-column align="center" prop="id" label="序号" width="60" />
      <el-table-column align="center" prop="role" label="角色名称" width="130" />
      <el-table-column align="center" prop="roleValue" label="角色值" width="150" />
      <el-table-column align="center" prop="status" label="状态" width="100">
        <template #default="status">
          <el-switch v-model="status.row.status" inline-prompt active-text="启动" inactive-text="停用" />
        </template>
      </el-table-column>
      <el-table-column align="center" prop="createTime" label="创建时间" />
      <el-table-column align="center" prop="remark" label="备注" />
      <el-table-column align="center" label="操作" width="200">
        <template #default="action">
          <el-button size="small" @click="handleWatch(action.$index, action.row)">查看</el-button>
          <el-button size="small" type="primary" @click="handleEdit(action.$index, action.row)">编辑</el-button>
          <el-popconfirm title="是否确认删除?" @confirm="handleToConfirmDelete">
            <template #reference>
              <el-button size="small" type="danger" @click="handleDelete(action.$index, action.row)">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </el-card>

  <el-drawer v-model="showDrawer" direction="rtl">
    <template #header>
      <h4>编辑角色</h4>
    </template>
    <template #default>
      <el-form :model="editForm" label-width="auto">
        <el-form-item label="角色名称">
          <el-input v-model="editForm.role" />
        </el-form-item>
        <el-form-item label="角色值">
          <el-input v-model="editForm.roleValue" />
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="editForm.status">
            <el-radio-button label="启用" value="true" />
            <el-radio-button label="停用" value="false" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="editForm.remark" type="textarea" />
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <el-button @click="showDrawer = false">取消</el-button>
      <el-button type="primary" @click="handleToConfirmEdit">确认</el-button>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { getRoleList } from "@/api/index";
import { deepClone } from "@/utils/deepClone";
import { ElMessage } from "element-plus";
import { onMounted, ref } from "vue";

interface roleInfo {
  id: number;
  role: string;
  roleValue: string;
  status: boolean;
  createTime: string;
  remark: string;
}

const tableData = ref<roleInfo[]>([]);
const showDrawer = ref(false);
const editIndex = ref<number | null>(null);
const deleteIndex = ref<number | null>(null);
const editForm = ref<roleInfo>({
  id: 0,
  role: "",
  roleValue: "",
  status: true,
  createTime: "",
  remark: "",
});

const showMessage = (message: string) => {
  ElMessage.success(message);
};

const handleWatch = (index: number, row: any) => {
  console.log(index, row);
};

const handleEdit = (index: number, row: any) => {
  // console.log(index, row);
  editIndex.value = index;
  editForm.value = deepClone(row);
  showDrawer.value = true;
};

const handleDelete = (index: number, row: any) => {
  // console.log(index, row);
  deleteIndex.value = index;
};

const handleToConfirmEdit = () => {
  if (editIndex.value !== null) {
    tableData.value[editIndex.value] = { ...editForm.value };
    showMessage("编辑成功！");
    showDrawer.value = false;
    editIndex.value = null;
  }
};

const handleToConfirmDelete = () => {
  if (deleteIndex.value !== null) {
    tableData.value.splice(deleteIndex.value, 1);
    showMessage("删除成功！");
    deleteIndex.value = null;
  }
};

const fetchData = async () => {
  try {
    const result = await getRoleList();
    // console.log("result: ", result);
    tableData.value = result;
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
