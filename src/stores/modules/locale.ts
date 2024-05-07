import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";
import i18n from "@/locales";

type LocaleType = "zh-CN" | "en-US" | "zh-HK";

export const useLocaleStore = defineStore(
  "locale",
  () => {
    const locale = ref("");

    const getLocale = (val: LocaleType) => {
      locale.value = val;
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

// 确保传递正确的 store 声明，本例中为 `useAuth`
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLocaleStore, import.meta.hot));
}
