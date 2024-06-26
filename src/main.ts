import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//引入elementplus推荐的light模式的样式文件
import "element-plus/dist/index.css";

//  elementplus实现的dark模式的样式文件
import "element-plus/theme-chalk/dark/css-vars.css";

import "@/types/shims-bmapgl.d.ts";
import "@/types/shims-tmap.d.ts";
import "@/types/declaretions.d.ts";

// 样式
import "@/styles/index.scss";
import "uno.css";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import i18n from "./locales";
import pinia from "./stores/index";
import { registerDirectives } from "./directive";

import print from "vue3-print-nb";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(pinia);
app.use(router);
app.use(i18n);
app.use(print);
registerDirectives(app); // 注册所有自定义指令

app.mount("#app");
