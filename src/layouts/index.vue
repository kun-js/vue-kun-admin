<template>
  <el-container>
    <el-aside width="collapse"><SideBar :isCollapse="isCollapse" :isShowLogo="isShowLogo" /></el-aside>
    <el-container>
      <el-header>
        <Header :changeSideBarCollapse="changeSideBarCollapse" :isCollapse="isCollapse" />
      </el-header>
      <el-main class="layout-view" :style="{ paddingBottom: footerHeight }">
        <el-scrollbar :wrap-style="{ height: 'var(--scrollbar-height)' }">
          <Router-view />
          <el-tooltip content="回到顶部" placement="bottom" effect="light">
            <el-backtop target=".layout-view .el-scrollbar__wrap" :right="60" :bottom="60" />
          </el-tooltip>
        </el-scrollbar>
      </el-main>
      <el-footer v-show="hasFooter">
        <Footer />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from "./header/index.vue";
import SideBar from "./sidebar/index.vue";
import Footer from "./footer/index.vue";
import { ref, computed, provide } from "vue";

const isShowLogo = ref(true);
const isCollapse = ref(false);
const hasFooter = ref(false);

const footerHeight = computed(() => {
  return hasFooter.value ? "60px" : "0";
});

const changeSideBarCollapse = () => {
  isCollapse.value = !isCollapse.value;
};

provide("isShowLogo", isShowLogo);
provide("isCollapse", isCollapse);
provide("changeCollapse", changeSideBarCollapse);
provide("hasFooter", hasFooter);
</script>

<style lang="scss" scoped>
.el-container {
  position: relative;
  min-height: 100%;
}

.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;

  --el-header-height: 48px;
}

.el-main {
  height: 100%;
  padding: 0;
}

.el-aside {
  min-height: 100%;
}

.el-footer {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
  background-color: var(--footer-background);
}
</style>
