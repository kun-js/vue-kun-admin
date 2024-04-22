<template>
  <div class="breadcrumb">
    <el-breadcrumb>
      <template v-for="(item, index) in breadList" :key="index">
        <el-breadcrumb-item v-if="item.name" :key="index" :to="item.path">
          <div class="breadcrumb-item">
            <el-icon v-if="item.meta.icon && isShowBreadcrumbIcon"> <component :is="item.meta.icon" /></el-icon>
            {{ $t("menu." + item.meta.title) }}
          </div>
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, inject } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const breadList = ref();

const isShowBreadcrumbIcon = inject<boolean>("isShowBreadcrumbIcon");

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

<style lang="scss" scoped>
.breadcrumb-item {
  display: flex;

  .el-icon {
    margin-right: 6px;
  }
}
</style>
