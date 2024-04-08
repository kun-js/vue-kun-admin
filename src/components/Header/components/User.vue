<template>
  <el-dropdown>
    <div class="user">
      <div class="user-avatar">
        <el-avatar :size="30" :src="userStore.userInfo.avatar" />
      </div>
      <div class="user-name">{{ userStore.userInfo.name }}</div>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <div class="logout" @click="handleToLogout">
            <span class="text"> {{ $t("header.logout") }}</span>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const userStore = useUserStore();

const handleToLogout = () => {
  localStorage.removeItem("pinia-user");
  router.push("/login");
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--header-button-active);
    border-bottom: 1px solid #eee;
  }

  &-avatar {
    margin-right: 12px;
  }

  &-name {
    color: gray;
  }
}

.logout {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }
}

.el-dropdown {
  height: 100%;
}
</style>
