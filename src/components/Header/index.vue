<template>
  <div class="header">
    <div class="header-left">
      <div class="fold" @click="handleToCollapse">
        <el-icon :size="20">
          <component :is="isCollapse ? 'Expand' : 'Fold'" />
        </el-icon>
      </div>
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <template v-for="(item, index) in breadList">
            <el-breadcrumb-item v-if="item.name" :key="index" :to="item.path">
              {{ $t("menu." + item.meta.title) }}
            </el-breadcrumb-item>
          </template>
        </el-breadcrumb>
      </div>
    </div>
    <div class="header-right">
      <div class="search" @click="handleToLog">
        <el-icon :size="20"><Search /></el-icon>
      </div>
      <div class="message">
        <el-icon :size="20"><Message /></el-icon>
      </div>
      <el-tooltip placement="bottom" effect="dark" trigger="hover" :content="$t('header.tour')">
        <div class="tour" @click="handleToOpenTour">
          <el-icon :size="20"><Guide /></el-icon>
        </div>
      </el-tooltip>
      <el-tour v-model="isTourOpen">
        <el-tour-step
          :title="$t('header.tour_step_one_title')"
          :description="$t('header.tour_step_one_description')"
          :next-button-props="{ children: $t('header.tour_step_next_button') }"
        />
        <el-tour-step
          :title="$t('header.tour_step_two_title')"
          :description="$t('header.tour_step_two_description')"
          :target="foldEl"
          :prev-button-props="{ children: $t('header.tour_step_prev_button') }"
          :next-button-props="{ children: $t('header.tour_step_next_button') }"
        />
        <el-tour-step
          :title="$t('header.tour_step_three_title')"
          :description="$t('header.tour_step_three_description')"
          :target="langEl"
          :prev-button-props="{ children: $t('header.tour_step_prev_button') }"
          :next-button-props="{ children: $t('header.tour_step_end_button') }"
        />
      </el-tour>
      <el-tooltip placement="bottom" effect="dark" trigger="hover" :content="fullScreenTooltip">
        <div class="fullscreen" @click="handleToFullScreen">
          <el-icon :size="20"> <component :is="isFullScreen ? 'Crop' : 'FullScreen'" /></el-icon>
        </div>
      </el-tooltip>
      <el-dropdown trigger="click">
        <div class="language">
          <Icon class="language-icon" icon="ion:language" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleToChangeLangZhCn">简体中文</el-dropdown-item>
            <el-dropdown-item @click="handleToChangeLangEnUs">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
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
                <span class="text">{{ $t("header.logout") }}</span>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div class="setting" @click="handleToShowDrawer">
        <el-icon :size="20"><Setting /></el-icon>
      </div>
    </div>
  </div>
  <el-drawer v-model="drawer" :title="$t('header.setting')" direction="rtl">
    <div class="drawer-container">
      <el-divider>主题颜色</el-divider>
      <div class="switch-dark">
        <el-switch v-model="isDark" :active-action-icon="MoonNight" :inactive-action-icon="Sunrise" />
      </div>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { Sunrise, MoonNight } from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useLocaleStore } from "@/stores/locale";
import { useI18n } from "vue-i18n";
import { useDark, useToggle } from "@vueuse/core";
import { Icon } from "@iconify/vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const props = defineProps<{
  isCollapse: Boolean;
  changeSideBarCollapse: Function;
}>();

const { t } = useI18n();
const userStore = useUserStore();
const localeStore = useLocaleStore();
const breadList = ref();
const isTourOpen = ref(false);
const isFullScreen = ref(false);
const drawer = ref(false);

const foldEl = () => document.querySelector<HTMLElement>(".fold");
const langEl = () => document.querySelector<HTMLElement>(".language");

const router = useRouter();
const route = useRoute();

const fullScreenTooltip = computed(() => {
  return isFullScreen.value ? t("header.exit_fullscreen") : t("header.fullscreen");
});

const handleToCollapse = () => {
  props.changeSideBarCollapse();
};

const handleToLog = () => {
  console.log(localeStore.locale);
};

const handleToOpenTour = () => {
  isTourOpen.value = !isTourOpen.value;
};

const handleToChangeLangZhCn = () => {
  localeStore.getLocale("zh-CN");
};

const handleToChangeLangEnUs = () => {
  localeStore.getLocale("en-US");
};

const getMatched = () => {
  // console.log(route.matched);
  breadList.value = route.matched.filter((item) => item.meta && item.meta.title);
};

const handleToFullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    isFullScreen.value = false;
  } else {
    document.documentElement.requestFullscreen();
    isFullScreen.value = true;
  }
};

const handleToLogout = () => {
  localStorage.removeItem("pinia-user");
  router.push("/login");
};

const handleToShowDrawer = () => {
  drawer.value = !drawer.value;
};

watch(
  () => route.path,
  (newValue, oldValue) => {
    //监听路由路径是否发生变化，之后更改面包屑
    breadList.value = route.matched.filter((item) => item.meta && item.meta.title);
  },
  { immediate: true, deep: true }
);

onMounted(() => {
  getMatched();
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 48px;

  &-left {
    display: flex;
    align-items: center;

    .fold {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;
      cursor: pointer;

      &:hover {
        background-color: var(--header-button-active);
      }
    }
  }

  &-right {
    display: flex;
    align-items: center;

    .search {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;
    }

    .message {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;
    }

    .tour {
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

    .language {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;
      cursor: pointer;

      &:hover {
        background-color: var(--header-button-active);
        border-bottom: 1px solid #eee;
      }

      &-icon {
        display: inline-block;
        width: 20px;
        height: 20px;
      }
    }

    .fullscreen {
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

      .text {
        margin-left: 8px;
      }
    }

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
  }
}

.el-dropdown {
  height: 100%;
}

.drawer-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .switch-dark {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 10px;
  }
}
</style>
