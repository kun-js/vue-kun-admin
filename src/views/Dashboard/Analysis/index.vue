<template>
  <div class="analysis-container">
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in cardList" :key="item.id">
        <Card :item="item" :id="item.id" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Card from "./components/Card.vue";
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

<style lang="scss" scoped></style>
