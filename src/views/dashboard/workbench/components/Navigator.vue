<template>
  <div class="navigator-container">
    <el-card :body-style="{ padding: 0 }">
      <template #header> <span style="white-space: nowrap">快捷导航</span> </template>
      <el-row>
        <el-col :span="8" v-for="item in navigatorList" :key="item.id">
          <el-card shadow="hover" style="border-radius: 0" :body-style="{ height: '100px' }">
            <div class="navigator">
              <div class="navigator-icon">
                <Icon style="font-size: 24px" :icon="item.icon" />
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
import { Icon } from "@iconify/vue";

const navigatorList = [
  { id: 1, icon: "noto:house", name: "首页" },
  { id: 2, icon: "noto:closed-book", name: "组件" },
  { id: 3, icon: "noto:dna", name: "功能" },
  { id: 4, icon: "emojione:bar-chart", name: "图表" },
  { id: 5, icon: "noto-v1:gear", name: "系统管理" },
  { id: 6, icon: "noto:locked-with-key", name: "权限管理" },
];
</script>

<style lang="scss" scoped>
.navigator-container {
  margin-bottom: 20px;

  .navigator {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-name {
      white-space: nowrap;
    }
  }
}
</style>
