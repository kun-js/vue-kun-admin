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
        <el-col :span="6"> <Complete /></el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Card from "./components/Card.vue";
import Chart from "./components/Chart.vue";
import Complete from "./components/Complete.vue";
import { getAnalysisCardList } from "@/api/index";

const cardList = ref();

const fetchData = async () => {
  try {
    const result = await getAnalysisCardList();
    // console.log("result: ", result);
    cardList.value = result;
  } catch (error) {
    console.log("error: ", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.analysis-container {
  padding: 20px;

  .card-container {
    margin-bottom: 18px;
  }

  .progress-container {
    margin-bottom: 18px;
  }
}
</style>
