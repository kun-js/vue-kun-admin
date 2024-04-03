<template>
  <div class="breadcrumb">
    <el-breadcrumb>
      <template v-for="(item, index) in breadList">
        <el-breadcrumb-item v-if="item.name" :key="index" :to="item.path">
          {{ $t("menu." + item.meta.title) }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const breadList = ref();

const getMatched = () => {
  // console.log(route.matched);
  breadList.value = route.matched.filter((item) => item.meta && item.meta.title);
};

watch(
  () => route.path,
  (newValue, oldValue) => {
    //监听路由路径是否发生变化，之后更改面包屑
    breadList.value = route.matched.filter((item) => item.meta && item.meta.title);
  },
  { immediate: true, deep: true }
);

onMounted(() => {
  getMatched();
});
</script>

<style lang="scss" scoped></style>
