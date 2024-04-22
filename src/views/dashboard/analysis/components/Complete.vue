<template>
  <el-card style="max-width: 100%; height: 100%">
    <template #header> 项目进度 </template>
    <el-progress :percentage="100" :stroke-width="15" status="success" striped striped-flow :duration="10">
      <span>周日</span>
    </el-progress>
    <el-progress :percentage="90" :stroke-width="15" striped striped-flow :duration="10">
      <span>周六</span>
    </el-progress>
    <el-progress :percentage="75" :stroke-width="15" striped striped-flow :duration="10">
      <span>周五</span>
    </el-progress>
    <el-progress :percentage="50" :stroke-width="15" striped striped-flow :duration="10">
      <span>周四</span>
    </el-progress>
    <el-progress :percentage="30" :stroke-width="15" status="warning" striped striped-flow :duration="10">
      <span>周三</span>
    </el-progress>
    <el-progress :percentage="20" :stroke-width="15" status="exception" striped striped-flow :duration="10">
      <span>周二</span>
    </el-progress>
    <el-progress :percentage="10" :stroke-width="15" status="exception" striped striped-flow :duration="10">
      <span>周一</span>
    </el-progress>
  </el-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.el-progress {
  margin-bottom: 20px;
}
</style>
