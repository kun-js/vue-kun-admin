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

// const analysisCardList = [
//   {
//     id: 1,
//     title: "访问量",
//     time: "月",
//     text: "2000",
//     iconType: "1",
//     total: "总访问量",
//     number: "100000",
//   },
//   {
//     id: 2,
//     title: "下载量",
//     time: "周",
//     text: "800",
//     iconType: "2",
//     total: "总下载量",
//     number: "4000",
//   },
//   {
//     id: 3,
//     title: "成交额",
//     time: "月",
//     text: "$20000",
//     iconType: "3",
//     total: "总成交额",
//     number: "$1000000",
//   },
//   {
//     id: 4,
//     title: "成交数",
//     time: "年",
//     text: "5000",
//     iconType: "4",
//     total: "总成交数",
//     number: "600000",
//   },
// ];

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
  // cardList.value = analysisCardList;
});
</script>

<style lang="scss" scoped>
.card-container {
  margin-bottom: 18px;
}

.progress-container {
  margin-bottom: 18px;
}
</style>
