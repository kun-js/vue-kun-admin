<template>
  <el-card style="max-width: 100%; height: 600px">
    <template #header> 最新动态 </template>
    <el-scrollbar height="500px">
      <el-timeline style="padding: 0 8px">
        <el-timeline-item
          v-for="(item, index) in dateList"
          :key="index"
          type="primary"
          size="large"
          :timestamp="item.time"
        >
          {{ item.content }}
        </el-timeline-item>
      </el-timeline>
    </el-scrollbar>
  </el-card>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const dateList = ref();

const props = defineProps<{
  updateList: any;
}>();

watchEffect(() => {
  dateList.value = props.updateList;
});
</script>

<style lang="scss" scoped></style>
