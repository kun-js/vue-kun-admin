import { fileURLToPath, URL } from "node:url";

import { ConfigEnv, loadEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueDevTools from "vite-plugin-vue-devtools";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { viteMockServe } from "vite-plugin-mock";

const CWD = process.cwd();

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const { VITE_BASE_URL, VITE_API_URL_PREFIX, VITE_API_URL } = loadEnv(mode, CWD);
  return {
    base: VITE_BASE_URL,
    plugins: [
      vue(),
      vueJsx(),
      VueDevTools(),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: [
          "vue",
          // "@vueuse/core",
          "pinia",
          "vue-router",
          // "vue-i18n"
        ],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      viteMockServe({
        mockPath: "./mock/", // 注意:此时的 mockPath 地址是真正安装的 mock 文件夹的地址; 设置模拟数据的存储文件夹,如果不是index.js需要写明完整路径
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      // CSS 预处理器
      preprocessorOptions: {
        // 定义全局 SCSS 变量
        scss: {
          javascriptEnabled: true,
          additionalData: `
            @use "@/styles/variables.scss" as *;
          `,
        },
      },
    },
    server: {
      // port: 3002,
      open: true,
      host: "0.0.0.0",
      proxy: {
        [VITE_API_URL_PREFIX]: {
          target: VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(RegExp(`^${VITE_API_URL_PREFIX}`), ""),
        },
      },
    },
  };
};
