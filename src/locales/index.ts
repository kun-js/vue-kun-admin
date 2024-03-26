import { createI18n } from "vue-i18n";
import zhCn from "./zh-cn";
import en from "./en";

// 如果 localStorage 中不存在 lang 值，则将其设置为默认值 'zh-CN'
if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "zh-CN");
}

// 获取 localStorage 中的 lang 值，如果不存在则设置为默认值 'zh-CN'
const lang = localStorage.getItem("lang") || "zh-CN";

// 创建 i18n
const i18n = createI18n({
  legacy: false,
  globalInjection: true, // 全局模式，可以直接使用 $t
  locale: lang,
  messages: {
    "zh-CN": zhCn,
    "en-US": en,
  },
});

export default i18n;
