<template>
  <div class="container">
    <div class="logo">
      <img class="logo-pic" src="@/assets/imgs/KunLogo.jpg" />
      <div class="logo-title">Kun Admin</div>
    </div>
    <div class="menu">
      <el-menu
        :default-active="activePath"
        router="true"
        class="el-menu-vertical-demo"
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
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const currentPath = ref();

const currentIndex = sessionStorage.getItem("currentIndex");
let activePath = currentIndex ? currentIndex : "analysis";

// 保存当前激活的路径
const saveDefaultPath = (index: string) => {
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
.container {
  height: 100vh;
  background-color: #001529;

  .logo {
    display: flex;
    align-items: center;
    padding: 8px;

    &-pic {
      width: 32px;
      height: 32px;
    }

    &-title {
      margin-left: 8px;
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
