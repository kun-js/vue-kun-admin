<template>
  <div class="sidebar">
    <div class="logo" v-show="isShowLogo" :style="{ width: sideBarWidth }">
      <img class="logo-pic" src="@/assets/imgs/KunLogo.png" />
      <div class="logo-title" v-show="!isCollapse">Kun Admin</div>
    </div>
    <div class="menu">
      <el-scrollbar :style="{ height: 'calc(100vh - 48px)' }">
        <el-menu
          :default-active="activePath"
          :collapse="isCollapse"
          unique-opened
          router
          text-color="#b7bdc3"
          active-text-color="#ffffff"
          background-color="var(--menu-background)"
          @select="saveDefaultPath"
        >
          <template v-for="route in menuList">
            <template v-if="route.children">
              <!-- 一级菜单 -->
              <el-sub-menu :index="route.path" :key="route.path">
                <template #title>
                  <el-icon><component :is="route.icon" /></el-icon>
                  <span>{{ $t("menu." + route.name) }}</span>
                </template>
                <template v-for="child in route.children">
                  <template v-if="child.children">
                    <!-- 二级菜单 -->
                    <el-sub-menu
                      :index="route.path + child.path"
                      :key="route.path + child.path"
                      style="background-color: var(--menu-item-background)"
                    >
                      <template #title>
                        <span>{{ $t("menu." + child.name) }}</span>
                      </template>
                      <el-menu-item
                        v-for="subChild in child.children"
                        :index="route.path + child.path + subChild.path"
                        :key="route.path + child.path + subChild.path"
                      >
                        <template #title>
                          {{ $t("menu." + subChild.name) }}
                        </template>
                      </el-menu-item>
                    </el-sub-menu>
                  </template>
                  <template v-else>
                    <!-- 二级菜单不存在子菜单 -->
                    <el-menu-item :index="route.path + child.path" :key="route.path + child.path">
                      <span>{{ $t("menu." + child.name) }}</span>
                    </el-menu-item>
                  </template>
                </template>
              </el-sub-menu>
            </template>
            <template v-else>
              <!-- 一级菜单不存在子菜单 -->
              <el-menu-item :index="route.path" :key="route.path" style="background-color: #001529">
                <el-icon><component :is="route.icon" /></el-icon>
                <span>{{ $t("menu." + route.name) }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getMenuList } from "@/api/index";

const props = defineProps<{
  isShowLogo: Boolean;
  isCollapse: Boolean;
}>();

const router = useRouter();
const menuList = ref();
const currentIndex = sessionStorage.getItem("currentIndex");
let activePath = currentIndex ? currentIndex : "/dashboard/analysis";

const sideBarWidth = computed(() => {
  return props.isCollapse ? "64px" : "200px";
});

const fetchData = async () => {
  try {
    const result = await getMenuList();
    // console.log("result: ", result);
    menuList.value = result;
  } catch (error) {
    console.log("error: ", error);
  }
};

// 保存当前激活的路径
const saveDefaultPath = (index: string) => {
  // console.log("index: ", index);
  sessionStorage.setItem("currentIndex", index);
};

// 监听路由变化(点击面包屑发生改变)
router.afterEach((to, from) => {
  const currentPath = to.path;
  saveDefaultPath(currentPath);
});

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  background-color: var(--menu-background);

  .logo {
    display: flex;
    align-items: center;
    height: 48px;
    padding: 8px;
    transition: 0.5s all ease;

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
      white-space: nowrap;
    }
  }
}

.el-menu {
  border: none;

  .el-sub-menu__title {
    span {
      width: 106px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:hover {
      i,
      span {
        color: #fff;
      }

      background-color: var(--menu-background);
    }
  }

  .el-menu-item {
    background-color: var(--menu-item-background);

    span {
      width: 136px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:hover {
      color: #fff;
    }
  }

  .el-menu-item.is-active {
    background-color: #409eff;
  }
}
</style>
