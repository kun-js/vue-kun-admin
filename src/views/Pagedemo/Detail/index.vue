<template>
  <el-card style="max-width: 100%; height: 100%">
    <template #header> 详情页示例 </template>
    <div class="title">用户信息:</div>
    <el-row :gutter="20">
      <el-col :span="8">用户姓名: {{ detail.username }}</el-col>
      <el-col :span="8">用户地址: {{ detail.address }}</el-col>
      <el-col :span="8">联系电话: {{ detail.tel }}</el-col>
    </el-row>
    <div class="title">订单信息:</div>
    <el-row :gutter="20">
      <el-col :span="12">订单编号: {{ detail.orderId }}</el-col>
      <el-col :span="12">订单状态: {{ detail.status }}</el-col>
      <el-col :span="12">创建时间: {{ detail.createTime }}</el-col>
      <el-col :span="12">生效时间: {{ detail.effectiveTime }}</el-col>
      <el-col :span="24">备注: {{ detail.remark }}</el-col>
    </el-row>
  </el-card>
</template>

<script setup lang="ts">
import { getDetailList } from "@/api";
import { onMounted, ref } from "vue";

const detail = ref();

const fetchData = async () => {
  try {
    const result = await getDetailList();
    console.log("result: ", result[0]);
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
</style>
