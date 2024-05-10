<template>
  <div class="date-picker-component-container">
    <el-card style="max-width: 100%; height: var(--card-height)">
      <template #header>
        <span class="mr-18px">描述列表组件示例</span>
        <el-radio-group v-model="size">
          <el-radio value="large">大尺寸</el-radio>
          <el-radio value="default">默认尺寸</el-radio>
          <el-radio value="small">小尺寸</el-radio>
        </el-radio-group>
      </template>
      <el-descriptions class="mb-18px" title="基础示例" :column="3" :size="size" border>
        <el-descriptions-item label="姓名">张三</el-descriptions-item>
        <el-descriptions-item label="邮箱">123456789@xx.com</el-descriptions-item>
        <el-descriptions-item label="电话">18100000000</el-descriptions-item>
        <el-descriptions-item label="地区"> 深圳 </el-descriptions-item>
        <el-descriptions-item label="地址"> 广东省深圳市XX区 </el-descriptions-item>
      </el-descriptions>
      <el-descriptions class="mb-18px" title="垂直示例" direction="vertical" :column="3" :size="size" border>
        <el-descriptions-item label="姓名">张三</el-descriptions-item>
        <el-descriptions-item label="邮箱">123456789@xx.com</el-descriptions-item>
        <el-descriptions-item label="电话">18100000000</el-descriptions-item>
        <el-descriptions-item label="地区"> 深圳 </el-descriptions-item>
        <el-descriptions-item label="地址"> 广东省深圳市XX区 </el-descriptions-item>
      </el-descriptions>
      <el-descriptions class="mb-18px" title="无边框示例" :column="3" :size="size">
        <el-descriptions-item label="姓名">张三</el-descriptions-item>
        <el-descriptions-item label="邮箱">123456789@xx.com</el-descriptions-item>
        <el-descriptions-item label="电话">18100000000</el-descriptions-item>
        <el-descriptions-item label="地区"> 深圳 </el-descriptions-item>
        <el-descriptions-item label="地址"> 广东省深圳市XX区 </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "Description",
});

const size = ref("default");
</script>

<style lang="scss" scoped>
.date-picker-component-container {
  height: 100%;
  padding: 20px;
}
</style>
