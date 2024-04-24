import { App } from "vue";
import { useUserStore } from "@/stores/user"; // 导入全局状态管理库

// 导出自定义指令函数
export function buttonPermission(app: App) {
  app.directive("permission", {
    beforeMount(el, binding) {
      const requiredPermission: string = binding.value; // 获取指令绑定的角色权限
      const store = useUserStore(); // 获取全局状态管理库的实例
      const userPermission: string = store.permission || ""; // 获取用户的角色权限信息

      // 如果用户的权限不包含指定的权限要求，则隐藏按钮
      if (userPermission !== requiredPermission) {
        el.style.display = "none";
      } else {
        el.style.display = ""; // 显示按钮
      }
    },
  });
}
