import { App } from "vue";

export function keydownEnter(app: App) {
  app.directive("enter", {
    beforeMount(el, binding) {
      const handler = binding.value; // 获取指令绑定的事件处理函数

      el.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          handler(); // 触发指定的事件处理函数
        }
      });
    },
  });
}
