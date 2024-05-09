<template>
  <div class="scroll-function-component-container">
    <el-card style="max-width: 100%; height: var(--card-height)" :body-style="{ height: '93%' }">
      <template #header>
        <span>滚动方法示例</span>
      </template>
      <div class="mb-18px">
        <el-button type="primary" @click="scrollToHeight(400)">滚动至400px</el-button>
        <el-button type="primary" @click="scrollToHeight(1500)">滚动至1500px</el-button>
        <el-button type="primary" @click="scrollToHeight(0)">滚动至顶部</el-button>
        <el-button type="primary" @click="scrollToHeight(10000)">滚动至底部</el-button>
      </div>
      <el-scrollbar ref="scrollbarRef" height="400px" always>
        <p v-for="item in 50" :key="item" class="scrollbar-item">{{ item }}</p>
      </el-scrollbar>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElScrollbar } from "element-plus";

defineOptions({
  name: "FunctionScroll",
});

const value = ref(0);

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();

const scrollToHeight = (height: number) => {
  scrollbarRef.value!.setScrollTop(height);
};
</script>

<style lang="scss" scoped>
.scroll-function-component-container {
  height: 100%;
  padding: 20px;
}

.scrollbar-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  color: var(--el-color-primary);
  text-align: center;
  background: var(--el-color-primary-light-9);
  border-radius: 4px;
}
</style>
