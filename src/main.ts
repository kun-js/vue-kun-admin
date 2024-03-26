import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 样式
import "@/styles/index.scss";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import i18n from "./locales";

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

app.mount("#app");
