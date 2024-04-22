import { defineStore } from "pinia";
import { ref } from "vue";
import i18n from "@/locales";

type LocaleType = "zh-CN" | "en-US" | "zh-HK";

export const useLocaleStore = defineStore(
  "locale",
  () => {
    const locale = ref("zh-CN");

    const getLocale = (val: LocaleType) => {
      locale.value = val;
      localStorage.setItem("lang", val);
      i18n.global.locale.value = val;
    };

    return {
      locale,
      getLocale,
    };
  },
  {
    persist: true,
  }
);
