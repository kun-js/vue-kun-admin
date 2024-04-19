import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

// 样式
import "@/styles/index.scss";
import "uno.css";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import i18n from "./locales";
import print from "vue3-print-nb";
import { registerDirectives } from "./directive";

import { createPinia } from "pinia";
import { createPersistedState } from "pinia-persistedstate-plugin";

const pinia = createPinia();
const persist = createPersistedState();
pinia.use(persist);

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
