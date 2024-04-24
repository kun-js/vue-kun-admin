import { App, DirectiveBinding } from "vue";

const updateTime = (el: HTMLElement, value: number) => {
  const now = Date.now();
  const diff = now - value;
  let message = "";

  if (diff < 5000) {
    message = "刚刚";
  } else if (diff < 60000) {
    // 小于 1 分钟但大于等于 5 秒，每 5 秒更新一次
    const seconds = Math.floor(diff / 1000);
    const updateSeconds = Math.floor(seconds / 5) * 5;
    message = `${updateSeconds}秒前`;
  } else if (diff < 3600000) {
    message = `${Math.floor(diff / 60000)}分钟前`;
  } else if (diff < 86400000) {
    message = `${Math.floor(diff / 3600000)}小时前`;
  } else if (diff < 2678400000) {
    message = `${Math.floor(diff / 86400000)}天前`;
  } else {
    const date = new Date(value);
    message = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  }

  el.textContent = message;
};

export const timestamp = (app: App) => {
  app.directive("time", {
    beforeMount: (el: HTMLElement, binding: DirectiveBinding<number>) => {
      updateTime(el, binding.value);
    },
    updated: (el: HTMLElement, binding: DirectiveBinding<number>) => {
      updateTime(el, binding.value);
    },
  });
};
