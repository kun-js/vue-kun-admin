<template>
  <div class="navigator-container">
    <el-card :body-style="{ padding: 0 }">
      <template #header> 快捷导航 </template>
      <el-row>
        <el-col :span="8" v-for="item in navigatorList" :key="item.id">
          <el-card shadow="hover" style="border-radius: 0" :body-style="{ height: '100px' }">
            <div class="navigator">
              <div class="navigator-icon">
                <el-icon :size="24" :style="{ color: item.color }"><component :is="item.icon" /></el-icon>
              </div>
              <div class="navigator-name">{{ item.name }}</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { HomeFilled, Menu, SetUp, PieChart, Setting, Lock } from "@element-plus/icons-vue";

const navigatorList = [
  { id: 1, icon: "HomeFilled", color: "#1fdaca", name: "首页" },
  { id: 2, icon: "Menu", color: "#c72a46", name: "组件" },
  { id: 3, icon: "SetUp", color: "#e18525", name: "功能" },
  { id: 4, icon: "PieChart", color: "#50b98a", name: "图表" },
  { id: 5, icon: "Setting", color: "#73c04b", name: "系统管理" },
  { id: 6, icon: "Lock", color: "#20ddff", name: "权限管理" },
];
</script>

<style lang="scss" scoped>
.navigator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
