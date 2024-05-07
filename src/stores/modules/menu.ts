import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuStore = defineStore(
  "menuActivePath",
  () => {
    const defaultActive = ref("");

    const getActivePath = (val: string) => {
      defaultActive.value = val;
    };

    return {
      defaultActive,
      getActivePath,
    };
  },
  {
    persist: true,
  }
);
