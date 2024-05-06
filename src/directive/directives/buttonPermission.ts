import { App, DirectiveBinding, watch } from "vue";
import { useUserStore } from "@/stores/user"; // 导入全局状态管理库

// 导出自定义指令函数
export function buttonPermission(app: App) {
  app.directive("permission", {
    mounted(el, binding: DirectiveBinding<string>) {
      const requiredPermission: string = binding.value; // 获取指令绑定的角色权限
      const store = useUserStore(); // 获取全局状态管理库的实例

      // 更新按钮显示状态
      const updateButtonPermission = () => {
        const userPermission: string = store.permission || ""; // 获取用户的角色权限信息

        // 如果用户的权限不包含指定的权限要求，则隐藏按钮
        if (userPermission !== requiredPermission) {
          el.style.display = "none";
        } else {
          el.style.display = "";
        }
      };

      // 初次渲染时更新按钮状态
      updateButtonPermission();

      // 监听用户权限的变化，实时更新按钮状态
      watch(() => store.permission, updateButtonPermission);
    },
  });
}
