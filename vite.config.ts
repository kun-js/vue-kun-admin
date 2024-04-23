import { fileURLToPath, URL } from "node:url";

import { ConfigEnv, loadEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import VueDevTools from "vite-plugin-vue-devtools";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { viteMockServe } from "vite-plugin-mock";
// import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";
// import { visualizer } from "rollup-plugin-visualizer";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

// 引入Unocss
import Unocss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";

const CWD = process.cwd();

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const { VITE_BASE_URL, VITE_API_URL_PREFIX, VITE_API_URL } = loadEnv(mode, CWD);
  return {
    base: VITE_BASE_URL,
    plugins: [
      vue(),
      viteCommonjs(),
      Unocss({
        // 使用Unocss
        presets: [presetUno(), presetAttributify(), presetIcons()],
      }),
      vueJsx(),
      // VueDevTools(),
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
        mockPath: "./mock/", //mock文件地址
        localEnabled: true, // 开发打包开关
        prodEnabled: true, // 生产打包开关 // 这样可以控制关闭mock的时候不让mock打包到最终代码内
        injectCode: ` import { setupProdMockServer } from './mockProdServer'; setupProdMockServer(); `,
        logger: false, //是否在控制台显示请求日志
        supportTs: true, //打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件
      }),
      // viteCompression({
      //   verbose: true, // 是否在控制台中输出压缩结果
      //   disable: false,
      //   threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
      //   algorithm: "gzip", // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
      //   ext: ".gz",
      //   deleteOriginFile: true, // 源文件压缩后是否删除(我为了看压缩后的效果，先选择了true)
      // }),
      // 打包体积分析
      // visualizer({ open: true }),
      // 图片资源优化
      // viteImagemin({
      //   gifsicle: {
      //     optimizationLevel: 7,
      //     interlaced: false,
      //   },
      //   optipng: {
      //     optimizationLevel: 7,
      //   },
      //   mozjpeg: {
      //     quality: 20,
      //   },
      //   pngquant: {
      //     quality: [0.8, 0.9],
      //     speed: 4,
      //   },
      //   svgo: {
      //     plugins: [
      //       {
      //         name: "removeViewBox",
      //       },
      //       {
      //         name: "removeEmptyAttrs",
      //         active: false,
      //       },
      //     ],
      //   },
      // }),
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
    build: {
      minify: "terser", // 启用 terser 压缩
      terserOptions: {
        compress: {
          drop_console: false, // 删除所有 console
          drop_debugger: false, // 删除 debugger
        },
      },
      rollupOptions: {
        output: {
          chunkFileNames: "js/[name]-[hash].js", // 引入文件名的名称
          entryFileNames: "js/[name]-[hash].js", // 包的入口文件名称
          assetFileNames: "[ext]/[name]-[hash].[ext]", // 资源文件像 字体，图片等
          // 最小化拆分包
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          },
        },
      },
    },
    server: {
      port: 3002,
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
