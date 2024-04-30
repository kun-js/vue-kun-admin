<template>
  <div class="account-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)" :body-style="{ height: '88%' }">
      <template #header>
        <el-input
          style="width: 240px"
          v-model="searchKeyword"
          v-enter="handleToSearch"
          placeholder="输入姓名进行搜索"
        />
        <el-button style="margin-left: 18px" @click="handleToReset">重置</el-button>
        <el-button style="margin-left: 18px" type="primary" @click="handleToSearch"> 搜索 </el-button>
      </template>
      <el-table v-loading="loading" :data="tableData" stripe style="width: 100%" height="100%" show-overflow-tooltip>
        <el-table-column align="center" prop="id" label="序号" width="60" />
        <el-table-column align="center" prop="username" label="账号" width="120" />
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

      <!-- 分页器 -->
      <div class="mt-3" style="float: right">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[5, 10, 20, 30, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
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
          <el-input v-model="editForm.remark" type="textarea" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="editDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleToConfirmEdit"> 确认 </el-button>
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
          <el-button type="danger" @click="handleToConfirmDelete"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getAccountList } from "@/api/index";
import { deepClone } from "@/utils/deepClone";
import { ElMessage } from "element-plus";

defineOptions({
  name: "Account",
});

// 声明类型
interface AccountInfo {
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

const loading = ref(false);
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const searchKeyword = ref<string>();
const tableData = ref<AccountInfo[]>([]);
const editDialogVisible = ref(false);
const deleteDialogVisible = ref(false);
const editForm = ref<AccountInfo>({
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
const editIndex = ref<number | null>(null);
const deleteIndex = ref<number | null>(null);
const deleteName = ref<string>("");

const showMessage = (message: string) => {
  ElMessage.success(message);
};

const fetchData = async () => {
  try {
    loading.value = true;
    const result = await getAccountList(currentPage.value, pageSize.value, searchKeyword.value);
    // console.log("result: ", result);
    tableData.value = result.accountList;
    total.value = result.total;
  } catch (error) {
    console.error("数据获取失败：", error);
  } finally {
    loading.value = false;
  }
};

const handleToReset = () => {
  searchKeyword.value = "";
  fetchData();
};
const handleToSearch = () => {
  fetchData();
};

// 每页显示条数改变时触发
const handleSizeChange = (val: number) => {
  pageSize.value = val;
  fetchData();
};

// 当前页码改变时触发
const handleCurrentChange = (val: number) => {
  currentPage.value = val;
  fetchData();
};

// 查看操作
const handleWatch = (index: number, row: any) => {
  console.log(index, row);
};

// 编辑操作
const handleEdit = (index: number, row: any) => {
  editIndex.value = index;
  editForm.value = deepClone(row);
  editDialogVisible.value = true;
};

// 删除操作
const handleDelete = (index: number, row: any) => {
  deleteIndex.value = index;
  deleteName.value = row.name;
  deleteDialogVisible.value = true;
};

// 完成编辑操作
const handleToConfirmEdit = () => {
  if (editIndex.value !== null) {
    tableData.value[editIndex.value] = { ...editForm.value };
    showMessage("编辑成功！");
    editDialogVisible.value = false;
    editIndex.value = null;
  }
};

// 完成删除操作
const handleToConfirmDelete = () => {
  if (deleteIndex.value !== null) {
    tableData.value.splice(deleteIndex.value, 1);
    showMessage("删除成功！");
    deleteDialogVisible.value = false;
    deleteIndex.value = null;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.account-container {
  height: 100%;
  padding: 20px;
}

.el-table__cell {
  align-items: center;
  justify-content: center;
}
</style>
