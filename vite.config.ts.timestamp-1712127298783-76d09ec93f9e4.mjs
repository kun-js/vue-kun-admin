// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { loadEnv } from "file:///D:/Work/vue-kun-admin/node_modules/.pnpm/vite@5.1.6_@types+node@20.11.26_sass@1.71.1/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Work/vue-kun-admin/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.6_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/Work/vue-kun-admin/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.1.6_vue@3.4.21/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VueDevTools from "file:///D:/Work/vue-kun-admin/node_modules/.pnpm/vite-plugin-vue-devtools@7.0.17_vite@5.1.6_vue@3.4.21/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import AutoImport from "file:///D:/Work/vue-kun-admin/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.9.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/Work/vue-kun-admin/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/Work/vue-kun-admin/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/resolvers.js";
import { viteMockServe } from "file:///D:/Work/vue-kun-admin/node_modules/.pnpm/vite-plugin-mock@3.0.1_esbuild@0.19.12_mockjs@1.1.0_vite@5.1.6/node_modules/vite-plugin-mock/dist/index.mjs";
import Unocss from "file:///D:/Work/vue-kun-admin/node_modules/.pnpm/unocss@0.59.0-beta.1_postcss@8.4.35_vite@5.1.6/node_modules/unocss/dist/vite.mjs";
import { presetUno, presetAttributify, presetIcons } from "file:///D:/Work/vue-kun-admin/node_modules/.pnpm/unocss@0.59.0-beta.1_postcss@8.4.35_vite@5.1.6/node_modules/unocss/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/Work/vue-kun-admin/vite.config.ts";
var CWD = process.cwd();
var vite_config_default = ({ mode }) => {
  const { VITE_BASE_URL, VITE_API_URL_PREFIX, VITE_API_URL } = loadEnv(mode, CWD);
  return {
    base: VITE_BASE_URL,
    plugins: [
      vue(),
      Unocss({
        // 使用Unocss
        presets: [presetUno(), presetAttributify(), presetIcons()]
      }),
      vueJsx(),
      VueDevTools(),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: [
          "vue",
          // "@vueuse/core",
          "pinia",
          "vue-router"
          // "vue-i18n"
        ],
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      viteMockServe({
        mockPath: "./mock/"
        // 注意:此时的 mockPath 地址是真正安装的 mock 文件夹的地址; 设置模拟数据的存储文件夹,如果不是index.js需要写明完整路径
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    css: {
      // CSS 预处理器
      preprocessorOptions: {
        // 定义全局 SCSS 变量
        scss: {
          javascriptEnabled: true,
          additionalData: `
            @use "@/styles/variables.scss" as *;
          `
        }
      }
    },
    server: {
      port: 3002,
      open: true,
      host: "0.0.0.0",
      proxy: {
        [VITE_API_URL_PREFIX]: {
          target: VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(RegExp(`^${VITE_API_URL_PREFIX}`), "")
        }
      }
    }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXb3JrXFxcXHZ1ZS1rdW4tYWRtaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFdvcmtcXFxcdnVlLWt1bi1hZG1pblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovV29yay92dWUta3VuLWFkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5cbmltcG9ydCB7IENvbmZpZ0VudiwgbG9hZEVudiwgVXNlckNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCB2dWVKc3ggZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjtcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tIFwidml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzXCI7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XG5pbXBvcnQgeyB2aXRlTW9ja1NlcnZlIH0gZnJvbSBcInZpdGUtcGx1Z2luLW1vY2tcIjtcbi8vIFx1NUYxNVx1NTE2NVVub2Nzc1xuaW1wb3J0IFVub2NzcyBmcm9tIFwidW5vY3NzL3ZpdGVcIjtcbmltcG9ydCB7IHByZXNldFVubywgcHJlc2V0QXR0cmlidXRpZnksIHByZXNldEljb25zIH0gZnJvbSBcInVub2Nzc1wiO1xuXG5jb25zdCBDV0QgPSBwcm9jZXNzLmN3ZCgpO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9OiBDb25maWdFbnYpOiBVc2VyQ29uZmlnID0+IHtcbiAgY29uc3QgeyBWSVRFX0JBU0VfVVJMLCBWSVRFX0FQSV9VUkxfUFJFRklYLCBWSVRFX0FQSV9VUkwgfSA9IGxvYWRFbnYobW9kZSwgQ1dEKTtcbiAgcmV0dXJuIHtcbiAgICBiYXNlOiBWSVRFX0JBU0VfVVJMLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSgpLFxuICAgICAgVW5vY3NzKHtcbiAgICAgICAgLy8gXHU0RjdGXHU3NTI4VW5vY3NzXG4gICAgICAgIHByZXNldHM6IFtwcmVzZXRVbm8oKSwgcHJlc2V0QXR0cmlidXRpZnkoKSwgcHJlc2V0SWNvbnMoKV0sXG4gICAgICB9KSxcbiAgICAgIHZ1ZUpzeCgpLFxuICAgICAgVnVlRGV2VG9vbHMoKSxcbiAgICAgIEF1dG9JbXBvcnQoe1xuICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjUgVnVlIFx1NzZGOFx1NTE3M1x1NTFGRFx1NjU3MFx1RkYwQ1x1NTk4Mlx1RkYxQXJlZiwgcmVhY3RpdmUsIHRvUmVmIFx1N0I0OVxuICAgICAgICBpbXBvcnRzOiBbXG4gICAgICAgICAgXCJ2dWVcIixcbiAgICAgICAgICAvLyBcIkB2dWV1c2UvY29yZVwiLFxuICAgICAgICAgIFwicGluaWFcIixcbiAgICAgICAgICBcInZ1ZS1yb3V0ZXJcIixcbiAgICAgICAgICAvLyBcInZ1ZS1pMThuXCJcbiAgICAgICAgXSxcbiAgICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICAgIH0pLFxuICAgICAgQ29tcG9uZW50cyh7XG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgICB9KSxcbiAgICAgIHZpdGVNb2NrU2VydmUoe1xuICAgICAgICBtb2NrUGF0aDogXCIuL21vY2svXCIsIC8vIFx1NkNFOFx1NjEwRjpcdTZCNjRcdTY1RjZcdTc2ODQgbW9ja1BhdGggXHU1NzMwXHU1NzQwXHU2NjJGXHU3NzFGXHU2QjYzXHU1Qjg5XHU4OEM1XHU3Njg0IG1vY2sgXHU2NTg3XHU0RUY2XHU1OTM5XHU3Njg0XHU1NzMwXHU1NzQwOyBcdThCQkVcdTdGNkVcdTZBMjFcdTYyREZcdTY1NzBcdTYzNkVcdTc2ODRcdTVCNThcdTUwQThcdTY1ODdcdTRFRjZcdTU5MzksXHU1OTgyXHU2NzlDXHU0RTBEXHU2NjJGaW5kZXguanNcdTk3MDBcdTg5ODFcdTUxOTlcdTY2MEVcdTVCOENcdTY1NzRcdThERUZcdTVGODRcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjXCIsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgLy8gQ1NTIFx1OTg4NFx1NTkwNFx1NzQwNlx1NTY2OFxuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICAvLyBcdTVCOUFcdTRFNDlcdTUxNjhcdTVDNDAgU0NTUyBcdTUzRDhcdTkxQ0ZcbiAgICAgICAgc2Nzczoge1xuICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgXG4gICAgICAgICAgICBAdXNlIFwiQC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIiBhcyAqO1xuICAgICAgICAgIGAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBwb3J0OiAzMDAyLFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxuICAgICAgcHJveHk6IHtcbiAgICAgICAgW1ZJVEVfQVBJX1VSTF9QUkVGSVhdOiB7XG4gICAgICAgICAgdGFyZ2V0OiBWSVRFX0FQSV9VUkwsXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoUmVnRXhwKGBeJHtWSVRFX0FQSV9VUkxfUFJFRklYfWApLCBcIlwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVQLFNBQVMsZUFBZSxXQUFXO0FBRTFSLFNBQW9CLGVBQTJCO0FBQy9DLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFDcEMsU0FBUyxxQkFBcUI7QUFFOUIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsV0FBVyxtQkFBbUIsbUJBQW1CO0FBWjZGLElBQU0sMkNBQTJDO0FBY3hNLElBQU0sTUFBTSxRQUFRLElBQUk7QUFHeEIsSUFBTyxzQkFBUSxDQUFDLEVBQUUsS0FBSyxNQUE2QjtBQUNsRCxRQUFNLEVBQUUsZUFBZSxxQkFBcUIsYUFBYSxJQUFJLFFBQVEsTUFBTSxHQUFHO0FBQzlFLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQTtBQUFBLFFBRUwsU0FBUyxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsR0FBRyxZQUFZLENBQUM7QUFBQSxNQUMzRCxDQUFDO0FBQUEsTUFDRCxPQUFPO0FBQUEsTUFDUCxZQUFZO0FBQUEsTUFDWixXQUFXO0FBQUE7QUFBQSxRQUVULFNBQVM7QUFBQSxVQUNQO0FBQUE7QUFBQSxVQUVBO0FBQUEsVUFDQTtBQUFBO0FBQUEsUUFFRjtBQUFBLFFBQ0EsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDbkMsQ0FBQztBQUFBLE1BQ0QsV0FBVztBQUFBLFFBQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDbkMsQ0FBQztBQUFBLE1BQ0QsY0FBYztBQUFBLFFBQ1osVUFBVTtBQUFBO0FBQUEsTUFDWixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUN0RDtBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUs7QUFBQTtBQUFBLE1BRUgscUJBQXFCO0FBQUE7QUFBQSxRQUVuQixNQUFNO0FBQUEsVUFDSixtQkFBbUI7QUFBQSxVQUNuQixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsUUFHbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsQ0FBQyxtQkFBbUIsR0FBRztBQUFBLFVBQ3JCLFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxVQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxPQUFPLElBQUksbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0FBQUEsUUFDdkU7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
