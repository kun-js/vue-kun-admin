<template>
  <div class="detail-page-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)">
      <template #header> 详情页示例 </template>
      <el-descriptions title="用户信息:">
        <el-descriptions-item label="用户名">{{ detail.username }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ detail.tel }}</el-descriptions-item>
        <el-descriptions-item label="地址">{{ detail.address }}</el-descriptions-item>
      </el-descriptions>
      <el-descriptions title="订单信息:">
        <el-descriptions-item label="订单编号">{{ detail.orderId }}</el-descriptions-item>
        <el-descriptions-item label="订单状态">{{ detail.status }}</el-descriptions-item>
        <el-descriptions-item label="创建时间">{{ detail.createTime }}</el-descriptions-item>
        <el-descriptions-item label="生效时间">{{ detail.effectiveTime }}</el-descriptions-item>
        <el-descriptions-item label="备注">{{ detail.remark }}</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { getDetailList } from "@/api";
import { onMounted, ref } from "vue";

interface Detail {
  username: string;
  address: string;
  tel: string;
  orderId: string;
  status: string;
  createTime: string;
  effectiveTime: string;
  remark: string;
}

const detail = ref<Detail>({
  username: "",
  address: "",
  tel: "",
  orderId: "",
  status: "",
  createTime: "",
  effectiveTime: "",
  remark: "",
});

const fetchData = async () => {
  try {
    const result = await getDetailList();
    // console.log("result: ", result);
    detail.value = result[0];
  } catch (error) {
    console.log("error: ", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.detail-page-container {
  height: 100%;
  padding: 20px;

  .title {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 800;
  }

  .el-row {
    margin-bottom: 40px;
  }

  .el-row:last-child {
    margin-bottom: 0;
  }

  .el-col {
    margin-bottom: 20px;
  }
}
</style>
