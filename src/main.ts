import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//引入elementplus推荐的light模式的样式文件
import "element-plus/dist/index.css";

//  elementplus实现的dark模式的样式文件
import "element-plus/theme-chalk/dark/css-vars.css";

// 样式
import "@/styles/index.scss";
import "uno.css";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import i18n from "./locales";
import print from "vue3-print-nb";
import VueVideoPlayer from "@videojs-player/vue";
import "video.js/dist/video-js.css";
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

// console.log("当前环境:", process.env.NODE_ENV);

app.use(pinia);
app.use(router);
app.use(i18n);
app.use(print);
app.use(VueVideoPlayer);
registerDirectives(app); // 注册所有自定义指令

app.mount("#app");
