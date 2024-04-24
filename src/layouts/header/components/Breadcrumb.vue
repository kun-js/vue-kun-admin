<template>
  <div class="breadcrumb">
    <el-breadcrumb>
      <template v-for="(item, index) in breadList" :key="index">
        <el-breadcrumb-item v-if="item.name" :key="index" :to="item.path">
          <div class="breadcrumb-item">
            <Icon
              v-if="item.meta.icon && isShowBreadcrumbIcon"
              style="margin-right: 8px; font-size: 14px"
              :icon="item.meta.icon"
            />
            <span style="white-space: nowrap">{{ $t("menu." + item.meta.title) }}</span>
          </div>
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, inject } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";

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
