<template>
  <div class="login-container">
    <div class="header-action">
      <div class="switch-dark">
        <el-switch size="large" v-model="isDark" :active-action-icon="MoonNight" :inactive-action-icon="Sunrise" />
      </div>
      <div class="switch-lang">
        <el-dropdown trigger="click">
          <div class="language">
            <img class="language-icon" src="@/assets/imgs/SwitchLang.png" />
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleToChangeLangZhCn">简体中文</el-dropdown-item>
              <el-dropdown-item @click="handleToChangeLangEnUs">English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <Basketball />
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import Basketball from "./components/Basketball.vue";
import LoginForm from "./components/LoginForm.vue";
import { Sunrise, MoonNight } from "@element-plus/icons-vue";
import { useLocaleStore } from "@/stores/locale";
import { useDark } from "@vueuse/core";

defineOptions({
  name: "Login",
});

const isDark = useDark();
const localeStore = useLocaleStore();

const handleToChangeLangZhCn = () => {
  localeStore.getLocale("zh-CN");
};

const handleToChangeLangEnUs = () => {
  localeStore.getLocale("en-US");
};
</script>

<style lang="scss" scoped>
.login-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/imgs/kunkunbg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .header-action {
    position: absolute;
    top: 2%;
    right: 1%;
    display: flex;
    align-items: center;
    justify-content: center;

    .switch-lang {
      .language {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 10px;
        cursor: pointer;

        &-icon {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>
