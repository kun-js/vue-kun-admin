<template>
  <el-container>
    <el-aside width="collapse"><SideBar :isCollapse="isCollapse" /></el-aside>
    <el-container>
      <el-header><Header :changeSideBarCollapse="changeSideBarCollapse" :isCollapse="isCollapse" /></el-header>
      <el-scrollbar :wrap-style="{ height: 'calc(100vh - 48px)' }" :view-style="{ height: '100%' }">
        <el-main :style="{ paddingBottom: footerHeight }">
          <Router-view />
        </el-main>
      </el-scrollbar>
      <el-footer v-show="hasFooter">
        <div class="footer-text">Copyright © 2024 KUN Admin</div>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from "@/components/header/index.vue";
import SideBar from "@/components/sidebar/index.vue";
import { ref, computed, provide } from "vue";

const isCollapse = ref(false);
const hasFooter = ref(false);

const footerHeight = computed(() => {
  return hasFooter.value ? "60px" : "20px";
});

const changeSideBarCollapse = () => {
  isCollapse.value = !isCollapse.value;
};

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
  background-color: #f0f2f5;

  .footer-text {
    transform: translate(-50%, 0%);
  }
}
</style>
