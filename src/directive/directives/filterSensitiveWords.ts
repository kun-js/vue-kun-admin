import type { App } from "vue";

// 引入敏感词列表
const sensitiveWords = ["脑残", "傻逼", "草泥马"];

// 导出自定义指令函数
export function filterSensitiveWords(app: App) {
  app.directive("filter", {
    mounted(el, binding) {
      // 监听输入事件
      el.addEventListener("input", function (event: any) {
        const input = event.target.value;
        if (!input) {
          return;
        }
        // 过滤敏感词
        const filteredInput = filterFn(input);
        // 更新输入框的值
        event.target.value = filteredInput;
        // 触发输入事件以确保 v-model 生效
        el.dispatchEvent(new Event("input"));
      });
    },
    unmounted(el) {
      //   console.log("自定义指令卸载", el);
      // 移除事件监听器
      el.removeEventListener("input", () => {});
    },
  });
}

// 过滤方法
function filterFn(input: string): string {
  let filteredInput = input;
  // 遍历敏感词列表
  for (let i = 0; i < sensitiveWords.length; i++) {
    const sensitiveWord = sensitiveWords[i];
    const regex = new RegExp(sensitiveWord, "gi");
    // 替换敏感词为 *
    filteredInput = filteredInput.replace(regex, "*".repeat(sensitiveWord.length));
  }
  return filteredInput;
}
