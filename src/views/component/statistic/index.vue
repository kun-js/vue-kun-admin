<template>
  <div class="statistic-component-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)">
      <template #header>
        <span>统计组件示例</span>
      </template>
      <el-row>
        <el-col :span="6">
          <el-statistic title="交易人数" :value="outputValue" />
        </el-col>

        <el-col :span="6">
          <el-countdown title="距离开始还有" :value="startTimeValue" />
        </el-col>
        <el-col :span="6">
          <el-countdown title="VIP剩余时间" format="HH:mm:ss" :value="VIPRemainTime" />
          <el-button class="countdown-footer" type="primary" @click="reset">重置</el-button>
        </el-col>
        <el-col :span="6">
          <el-countdown format="DD[天] HH[时]mm[分]ss[秒]" :value="nextMonthTime">
            <template #title>
              <div style="display: inline-flex; align-items: center">
                <el-icon style="margin-right: 4px" :size="12">
                  <Calendar />
                </el-icon>
                距离下个月还有
              </div>
            </template>
          </el-countdown>
          <div class="countdown-footer">{{ nextMonthTime.format("YYYY-MM-DD") }}</div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import dayjs from "dayjs";
import { useTransition } from "@vueuse/core";

const source = ref(0);
const outputValue = useTransition(source, {
  duration: 1500,
});
source.value = 180000;

const startTimeValue = ref(Date.now() + 1000 * 60 * 60 * 7);
const VIPRemainTime = ref(Date.now() + 1000 * 60 * 60 * 24 * 2);
const nextMonthTime = ref(dayjs().add(1, "month").startOf("month"));

const reset = () => {
  VIPRemainTime.value = Date.now() + 1000 * 60 * 60 * 24 * 2;
};
</script>

<style lang="scss" scoped>
.statistic-component-container {
  height: 100%;
  padding: 20px;
}

.el-col {
  text-align: center;
}

.countdown-footer {
  margin-top: 8px;
}
</style>
