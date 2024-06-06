<template>
  <div class="analysis-container">
    <div class="card-container">
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in cardList" :key="item.id">
          <Card :item="item" :id="item.id" />
        </el-col>
      </el-row>
    </div>
    <div class="progress-container">
      <el-row :gutter="20">
        <el-col :span="18"><Chart /> </el-col>
        <el-col :span="6"><Complete /></el-col>
      </el-row>
    </div>
    <div class="data-container">
      <el-row :gutter="20">
        <el-col :span="18"><DataForm :dataList="dataList" /> </el-col>
        <el-col :span="6"><LatestUpdate :updateList="updateList" /></el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Card from "./components/Card.vue";
import Chart from "./components/Chart.vue";
import Complete from "./components/Complete.vue";
import DataForm from "./components/DataForm.vue";
import LatestUpdate from "./components/LatestUpdate.vue";
import { getAnalysisCardList } from "@/api/index";
import type { AnalysisCard, UpdateItem, DataItem, AnalysisData } from "@/types/index";

defineOptions({
  name: "Analysis",
});

const cardList = ref<AnalysisCard[]>();
const updateList = ref<UpdateItem[]>();
const dataList = ref<DataItem[]>();

const fetchData = async () => {
  try {
    const result = (await getAnalysisCardList()) as AnalysisData;
    cardList.value = result.analysisCardList;
    updateList.value = result.updateList;
    dataList.value = result.dataList;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.analysis-container {
  padding: 20px;

  .card-container,
  .progress-container,
  .data-container {
    margin-bottom: 18px;
  }
}
</style>
