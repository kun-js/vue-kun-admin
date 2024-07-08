<template>
  <el-scrollbar :style="{ height: sidebarScrollHeight }">
    <el-menu
      :default-active="activePath"
      :collapse="isCollapse"
      unique-opened
      router
      text-color="#b7bdc3"
      active-text-color="#ffffff"
      background-color="var(--menu-background)"
    >
      <template v-for="route in menuList">
        <template v-if="route.children">
          <!-- 一级菜单 -->
          <el-sub-menu :index="route.path" :key="route.path">
            <template #title>
              <el-icon>
                <Icon style="font-size: 24px" :icon="route.icon" />
              </el-icon>
              <div class="menu-title" style="margin-left: 8px">
                <EllipsisTooltip :text="$t(`menu.${route.name}`)" />
              </div>
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
                    <div class="menu-title">
                      <EllipsisTooltip :text="$t(`menu.${child.name}`)" />
                    </div>
                  </template>
                  <el-menu-item
                    v-for="subChild in child.children"
                    :index="route.path + child.path + subChild.path"
                    :key="route.path + child.path + subChild.path"
                  >
                    <template #title>
                      <div class="menu-title">
                        <EllipsisTooltip :text="$t(`menu.${subChild.name}`)" />
                      </div>
                    </template>
                  </el-menu-item>
                </el-sub-menu>
              </template>
              <template v-else>
                <!-- 二级菜单不存在子菜单 -->
                <el-menu-item :index="route.path + child.path" :key="route.path + child.path">
                  <div class="menu-title">
                    <EllipsisTooltip :text="$t(`menu.${child.name}`)" />
                  </div>
                </el-menu-item>
              </template>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <!-- 一级菜单不存在子菜单 -->
          <el-menu-item :index="route.path" :key="route.path" style="background-color: #001529">
            <el-icon>
              <Icon style="font-size: 24px" :icon="route.icon" />
            </el-icon>
            <div class="menu-title">
              <EllipsisTooltip :text="$t(`menu.${route.name}`)" />
            </div>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import EllipsisTooltip from "@/components/EllipsisTooltip.vue";
import { computed, onMounted, ref } from "vue";
import { getMenuList } from "@/api/index";
import { Icon } from "@iconify/vue";
import { useMenuStore } from "@/stores/modules/menu";
import { useUserStore } from "@/stores/modules/user";

const props = defineProps<{
  isShowLogo: Boolean;
  isCollapse: Boolean;
}>();

const menuList = ref();
const menuStore = useMenuStore();
const userStore = useUserStore();
const menuPermission = computed(() => userStore.menuPermission);

const activePath = computed(() => {
  return menuStore.defaultActive;
});

const sidebarScrollHeight = computed(() => {
  return props.isShowLogo ? "calc(100vh - 48px)" : "100vh";
});

const fetchData = async () => {
  try {
    const result = await getMenuList();
    // 根据用户权限过滤菜单
    const filterMenu = result.filter((item: any) => {
      return item.meta.permission.includes(menuPermission.value);
    });
    menuList.value = filterMenu;
  } catch (error) {
    console.log("error: ", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.el-menu {
  border: none;

  .el-sub-menu__title {
    display: flex;
    align-items: center;

    .menu-title {
      width: 106px;

      span {
        margin-left: 12px;
      }
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

    .menu-title {
      width: 130px;
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
