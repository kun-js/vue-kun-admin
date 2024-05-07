import { createI18n } from "vue-i18n";
import zhCN from "./lang/zh-cn";
import zhHK from "./lang/zh-hk";
import en from "./lang/en";

if (!localStorage.getItem("locale")) {
  localStorage.setItem("locale", `{"locale":"zh-CN"}`);
}

const localeItem = localStorage.getItem("locale");
const langVal = localeItem ? JSON.parse(localeItem).locale : "zh-CN";

const lang = langVal || "zh-CN";

// 创建 i18n
const i18n = createI18n({
  legacy: false,
  globalInjection: true, // 全局模式，可以直接使用 $t
  locale: lang,
  messages: {
    "zh-CN": zhCN,
    "zh-HK": zhHK,
    "en-US": en,
  },
});

export default i18n;
