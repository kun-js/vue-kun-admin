<template>
  <el-card style="max-width: 100%; height: 600px">
    <template #header> 数据统计 </template>
    <el-table :data="formData" stripe fit show-overflow-tooltip style="width: 100%" height="500">
      <el-table-column prop="id" label="序号" width="100" sortable />
      <el-table-column prop="demand" label="需求人数" />
      <el-table-column prop="issuesRaised" label="提出问题" />
      <el-table-column prop="issuesResolved" label="解决问题" />
      <el-table-column prop="satisfactionRate" label="满意度" sortable>
        <template #default="rate">
          {{ rate.row.satisfactionRate }} <Icon style="font-size: 14px" :icon="rate.row.icon" />
        </template>
      </el-table-column>
      <el-table-column prop="date" label="统计日期" />
      <el-table-column label="操作">
        <template #default="action">
          <el-button :icon="Search" circle @click="console.log(action.row)" />
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { Search } from "@element-plus/icons-vue";
import { Icon } from "@iconify/vue";

const formData = ref();

const props = defineProps<{
  dataList: any;
}>();

watchEffect(() => {
  formData.value = props.dataList;
});
</script>

<style lang="scss" scoped></style>
