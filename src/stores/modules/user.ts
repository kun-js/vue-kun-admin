import { defineStore } from "pinia";
import { ref } from "vue";

interface UserInfo {
  name: string;
  avatar: string;
}

export const useUserStore = defineStore(
  "user",
  () => {
    const userInfo = ref({
      name: "user",
      avatar: "",
    });
    const getUserInfo = (val: UserInfo) => {
      userInfo.value = val;
    };

    const token = ref("");
    const getToken = (val: string) => {
      token.value = val;
    };

    const permission = ref("");
    const getPermission = (val: string) => {
      permission.value = val;
    };

    const actionPermission = ref("");
    const getActionPermission = (val: string) => {
      actionPermission.value = val;
    };

    const menuPermission = ref("");
    const getMenuPermission = (val: string) => {
      menuPermission.value = val;
    };

    return {
      userInfo,
      getUserInfo,
      token,
      getToken,
      permission,
      getPermission,
      actionPermission,
      getActionPermission,
      menuPermission,
      getMenuPermission,
    };
  },
  {
    persist: true,
  }
);
