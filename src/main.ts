import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//引入elementplus推荐的light模式的样式文件
import "element-plus/dist/index.css";

//  elementplus实现的dark模式的样式文件
import "element-plus/theme-chalk/dark/css-vars.css";

// 样式
import "@/styles/index.scss";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import i18n from "./locales";
import print from "vue3-print-nb";

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

app.mount("#app");
