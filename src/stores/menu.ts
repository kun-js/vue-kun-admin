import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuStore = defineStore(
  "menuActivePath",
  () => {
    const defaultActive = ref("");

    return {
      defaultActive,
    };
  },
  {
    persist: true,
  }
);
