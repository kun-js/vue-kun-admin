<template>
  <div class="page-permission-container">
    <el-card style="max-width: 100%; height: var(--card-height)">
      <template #header>
        <span style="margin-right: 18px">页面权限管理示例</span>
        <el-button @click="changeToAdmin" type="primary" :disabled="isAdmin">改变为Admin权限</el-button>
        <el-button @click="changeToUser" type="primary" :disabled="isUser">改变为User权限</el-button>
      </template>
      <div style="margin-bottom: 18px">当前菜单权限:{{ menuPermission }}</div>
      <div style="margin-bottom: 18px">切换后请查看左侧菜单</div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/modules/user";
import { computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

defineOptions({
  name: "PagePermission",
});

const store = useUserStore();
const menuPermission = computed(() => store.menuPermission);
const isAdmin = computed(() => menuPermission.value === "admin");
const isUser = computed(() => menuPermission.value === "user");

const changeToAdmin = () => {
  store.getMenuPermission("admin");
  location.reload();
};

const changeToUser = () => {
  store.getMenuPermission("user");
  location.reload();
};
</script>

<style lang="scss" scoped>
.page-permission-container {
  height: 100%;
  padding: 20px;

  .action-container {
    margin-bottom: 18px;
  }

  .el-button {
    margin: 0;
    margin-right: 18px;
  }
}
</style>
@/stores/modules/user @/stores/user
