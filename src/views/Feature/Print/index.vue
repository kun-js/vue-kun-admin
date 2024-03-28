<template>
  <el-card style="max-width: 100%; height: 100%">
    <template #header>
      打印示例
      <el-button type="primary" v-print="'#print-table'">打印表格</el-button>
      <el-button type="primary" v-print="'#print-img'">打印图片</el-button>
    </template>
    <span>打印表格示例:</span>
    <div id="print-table">
      <el-table :data="tableData">
        <el-table-column label="姓名" prop="name" width="100" />
        <el-table-column label="年龄" prop="age" width="100" />
        <el-table-column label="性别" prop="gender" width="100" />
      </el-table>
    </div>
    <!-- <span>打印图片示例:</span> -->
    <div id="print-img">
      <img src="@/assets/imgs/Caixukun.png" alt="" />
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tableData = ref([
  // 表格数据
  { name: "张三", age: "18", gender: "男" },
  { name: "李四", age: "20", gender: "男" },
  { name: "王五", age: "25", gender: "女" },
]);
</script>

<style lang="scss" scoped>
// #print-table {
//   display: none;
// }
#print-img {
  display: none;
}

@media print {
  /* 最外层打印节点 */
  // #print-table {
  //   display: block;
  //   height: auto;
  //   overflow: hidden;
  // }
  #print-img {
    display: block;
    height: auto;
    overflow: hidden;
  }
}
</style>
