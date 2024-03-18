<template>
  <div class="sidebar">
    <div class="logo" :style="{ width: sideBarWidth }">
      <img class="logo-pic" src="@/assets/imgs/KunLogo.jpg" />
      <div class="logo-title">Kun Admin</div>
    </div>
    <div class="menu">
      <el-menu
        :default-active="activePath"
        :collapse="isCollapse"
        router="true"
        unique-opened="true"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
        @select="saveDefaultPath"
      >
        <el-sub-menu index="dashboard">
          <template #title>
            <el-icon><Menu /></el-icon>
            <span>Dashboard</span>
          </template>
          <el-menu-item index="analysis">分析页</el-menu-item>
          <el-menu-item index="workbench">工作台</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="feature">
          <template #title>
            <el-icon><SetUp /></el-icon>
            <span>功能</span>
          </template>
          <el-menu-item index="watermark">水印</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="pagedemo">
          <template #title>
            <el-icon><Picture /></el-icon>
            <span>页面</span>
          </template>
          <el-menu-item index="form">表单页</el-menu-item>
          <el-menu-item index="list" disabled="true">列表页</el-menu-item>
          <el-menu-item index="detail" disabled="true">详情页</el-menu-item>
          <el-menu-item index="result" disabled="true">结果页</el-menu-item>
          <el-menu-item index="exception" disabled="true">异常页</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="chart" disabled="true">
          <template #title
            ><el-icon><PieChart /></el-icon>
            <span>图表</span>
          </template>
          <el-menu-item index="barchart">柱状图</el-menu-item>
          <el-menu-item index="linechart">折线图</el-menu-item>
          <el-menu-item index="piechart">饼图</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="about">
          <el-icon><User /></el-icon>
          <span>关于</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  isCollapse: Boolean;
}>();

const router = useRouter();
const currentPath = ref();

const currentIndex = sessionStorage.getItem("currentIndex");
const activePath = currentIndex ? currentIndex : "analysis";

const sideBarWidth = computed(() => {
  return props.isCollapse ? "64px" : "200px";
});

// 保存当前激活的路径
const saveDefaultPath = (index: string) => {
  // console.log("index: ", index);
  sessionStorage.setItem("currentIndex", index);
};

// 监听路由变化(点击面包屑发生改变)
router.afterEach((to, from) => {
  currentPath.value = to.path;
  const path = currentPath.value.split("/");
  const currentIndex = path.slice(-1);
  // console.log("currentIndex: ", currentIndex);
  saveDefaultPath(currentIndex);
});
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    align-items: center;
    height: 48px;
    padding: 8px;

    &-pic {
      width: 32px;
      height: 32px;
      margin-left: 6px;
    }

    &-title {
      width: 100px;
      margin-left: 24px;
      overflow: hidden;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
    }
  }
}

.el-menu {
  border: none;

  .el-sub-menu__title {
    i,
    span {
      color: #fff;
    }

    &:hover {
      background-color: #001529;
    }
  }

  .el-menu-item {
    background-color: #0c2135;

    &:hover {
      color: #fff;
    }
  }

  .el-menu-item.is-active {
    background-color: #0960bd;
  }
}
</style>
