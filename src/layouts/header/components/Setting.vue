<template>
  <div class="setting" @click="handleToShowDrawer">
    <el-icon :size="20"><Setting /></el-icon>
  </div>

  <el-drawer v-model="drawer" :title="$t('header.setting')" direction="rtl" size="280px">
    <div class="drawer-container">
      <div class="drawer-body">
        <el-divider>
          <span>{{ $t("header.themeColor") }}</span>
        </el-divider>
        <div class="switch-dark">
          <ThemeColorSwitch />
        </div>
        <el-divider>
          <span>{{ $t("header.faceShow") }}</span>
        </el-divider>
        <div class="action-btn">
          菜单Logo<el-switch v-model="isShowLogo" inline-prompt active-text="开" inactive-text="关" />
        </div>
        <div class="action-btn">
          面包屑<el-switch v-model="isShowBreadcrumb" inline-prompt active-text="开" inactive-text="关" />
        </div>
        <div class="action-btn">
          面包屑图标<el-switch v-model="isShowBreadcrumbIcon" inline-prompt active-text="开" inactive-text="关" />
        </div>
        <div class="action-btn">
          折叠菜单<el-switch v-model="isCollapse" inline-prompt active-text="开" inactive-text="关" />
        </div>
        <div class="action-btn">
          页脚<el-switch v-model="hasFooter" inline-prompt active-text="开" inactive-text="关" />
        </div>
      </div>
      <div class="drawer-footer">
        <el-divider />
        <el-button type="danger" @click="clearCacheAndExit">清空缓存并退出</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import ThemeColorSwitch from "@/components/ThemeColorSwitch.vue";
import { inject, ref } from "vue";

const isShowBreadcrumb = inject<boolean>("isShowBreadcrumb");
const isShowBreadcrumbIcon = inject<boolean>("isShowBreadcrumbIcon");
const isShowLogo = inject<boolean>("isShowLogo");
const isCollapse = inject<boolean>("isCollapse");
const hasFooter = inject<boolean>("hasFooter");

const drawer = ref(false);

const handleToShowDrawer = () => {
  drawer.value = !drawer.value;
};

const clearCacheAndExit = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
};
</script>

<style lang="scss" scoped>
.setting {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--header-button-active);
    border-bottom: 1px solid #eee;
  }
}

.drawer-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .drawer-body {
    display: flex;
    flex-direction: column;
    align-items: center;

    .switch-dark {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;
    }

    .action-btn {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }

  .drawer-footer {
    .el-button {
      width: 100%;
    }
  }
}

span {
  white-space: nowrap;
}
</style>
