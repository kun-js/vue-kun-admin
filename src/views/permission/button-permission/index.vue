<template>
  <div class="button-permission-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)">
      <template #header>
        <span style="margin-right: 18px">按钮权限管理示例</span>
        <el-button @click="changeToAdmin" type="primary" :disabled="isAdmin">改变为Admin权限</el-button>
        <el-button @click="changeToUser" type="primary" :disabled="isUser">改变为User权限</el-button>
      </template>
      <div style="margin-bottom: 18px">当前系统权限为:{{ actionPermission }}</div>
      <div class="action-container">
        <div>函数方式判断</div>
        <el-button v-if="isAdmin" type="success">Admin可见</el-button>
        <el-button v-if="isAdmin" type="success">Admin可见</el-button>
        <el-button v-if="isUser" type="warning">User可见</el-button>
        <el-button v-if="isUser" type="warning">User可见</el-button>
        <el-button>共同可见按钮</el-button>
      </div>
      <div class="action-container">
        <div>指令方式判断</div>
        <el-button v-permission="'admin'" type="success">Admin可见</el-button>
        <el-button v-permission="'admin'" type="success">Admin可见</el-button>
        <el-button v-permission="'user'" type="warning">User可见</el-button>
        <el-button v-permission="'user'" type="warning">User可见</el-button>
        <el-button>共同可见按钮</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { computed } from "vue";

defineOptions({
  name: "ButtonPermission",
});

const store = useUserStore();
const actionPermission = computed(() => store.actionPermission);
const isAdmin = computed(() => actionPermission.value === "admin");
const isUser = computed(() => actionPermission.value === "user");

const changeToAdmin = () => {
  store.getActionPermission("admin");
};

const changeToUser = () => {
  store.getActionPermission("user");
};
</script>

<style lang="scss" scoped>
.button-permission-container {
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
