<template>
  <div class="logo" v-show="isShowLogo" :style="{ width: sideBarWidth }" @click="toggleToDashboard">
    <img class="logo-pic" src="@/assets/imgs/KunLogo.png" />
    <div class="logo-title" v-show="!isCollapse">Kun Admin</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  isShowLogo: Boolean;
  isCollapse: Boolean;
}>();

const router = useRouter();

const sideBarWidth = computed(() => {
  return props.isCollapse ? "64px" : "210px";
});

const toggleToDashboard = () => {
  router.push("/dashboard");
};
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 8px;
  cursor: pointer;
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
</style>
