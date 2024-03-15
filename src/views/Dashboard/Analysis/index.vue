<template>
  <div class="container">
    <div class="card-container">
      <Card v-for="item in cardList" :key="item.id" :item="item" :id="item.id" />
    </div>
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

<style lang="scss" scoped>
.container {
  .card-container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
