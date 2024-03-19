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
        unique-opened
        router
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
        @select="saveDefaultPath"
      >
        <template v-for="route in menuList">
          <template v-if="route.children">
            <el-sub-menu :index="route.path" :key="route.path">
              <template #title>
                <el-icon><component :is="route.icon" /></el-icon>
                <span>{{ route.name }}</span>
              </template>
              <el-menu-item
                v-for="child in route.children"
                :index="route.path + child.path"
                :key="route.path + child.path"
              >
                {{ child.name }}
              </el-menu-item>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="route.path" :key="route.path" style="background-color: #001529">
              <el-icon><component :is="route.icon" /></el-icon>
              <span>{{ route.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getMenuList } from "@/api/index";

const menuList = ref();

const fetchData = async () => {
  try {
    const result = await getMenuList();
    console.log("result: ", result);
    menuList.value = result;
  } catch (error) {
    console.log("error: ", error);
  }
};

onMounted(() => {
  fetchData();
});

const props = defineProps<{
  isCollapse: Boolean;
}>();

const router = useRouter();
// const currentPath = ref();

const currentIndex = sessionStorage.getItem("currentIndex");
const activePath = currentIndex ? currentIndex : "/";

const sideBarWidth = computed(() => {
  return props.isCollapse ? "64px" : "200px";
});

// 保存当前激活的路径
const saveDefaultPath = (index: string) => {
  console.log("index: ", index);
  sessionStorage.setItem("currentIndex", index);
};

// 监听路由变化(点击面包屑发生改变)
router.afterEach((to, from) => {
  const currentPath = to.path;
  saveDefaultPath(currentPath);
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
