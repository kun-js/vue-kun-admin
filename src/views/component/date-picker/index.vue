<template>
  <div class="date-picker-component-container">
    <el-card style="max-width: 100%; height: var(--card-height)">
      <template #header>
        <span style="margin-right: 18px">日期选择器组件示例</span>
        <el-radio-group v-model="size">
          <el-radio value="large">大尺寸</el-radio>
          <el-radio value="default">默认尺寸</el-radio>
          <el-radio value="small">小尺寸</el-radio>
          <el-radio value="disabled">禁用</el-radio>
        </el-radio-group>
      </template>
      <div class="date-picker-container">
        <div>选择某一天</div>
        <el-date-picker
          :size="size"
          v-model="dayValue"
          type="date"
          placeholder="请选择"
          :disabled="size === 'disabled'"
        />
      </div>
      <div class="date-picker-container">
        <div>选择多天</div>
        <el-date-picker
          :size="size"
          v-model="daysValue"
          type="dates"
          placeholder="请选择"
          :disabled="size === 'disabled'"
        />
      </div>
      <div class="date-picker-container">
        <div>选择某一周</div>
        <el-date-picker
          :size="size"
          v-model="weekValue"
          type="week"
          format="第 ww 周"
          placeholder="请选择"
          :disabled="size === 'disabled'"
        />
      </div>
      <div class="date-picker-container">
        <div>选择某一月</div>
        <el-date-picker
          :size="size"
          v-model="monthValue"
          type="month"
          placeholder="请选择"
          :disabled="size === 'disabled'"
        />
      </div>
      <div class="date-picker-container">
        <div>选择某一年</div>
        <el-date-picker
          :size="size"
          v-model="yearValue"
          type="year"
          placeholder="请选择"
          :disabled="size === 'disabled'"
        />
      </div>
      <div class="date-picker-container">
        <div>选择一段时间</div>
        <el-date-picker
          :size="size"
          v-model="dayRangeValue"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :disabled="size === 'disabled'"
        />
      </div>
      <div class="date-picker-container">
        <div>选择月份范围</div>
        <el-date-picker
          :size="size"
          v-model="monthRangeValue"
          type="monthrange"
          range-separator="-"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
          :disabled="size === 'disabled'"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "DatePicker",
});

const size = ref("default");
const dayValue = ref("");
const daysValue = ref("");
const weekValue = ref("");
const monthValue = ref("");
const yearValue = ref("");
const dayRangeValue = ref("");
const monthRangeValue = ref("");
</script>

<style lang="scss" scoped>
.date-picker-component-container {
  height: 100%;
  padding: 20px;

  .date-picker-container {
    margin-bottom: 18px;
  }
}
</style>
