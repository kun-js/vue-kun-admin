import { createRouter, createWebHistory } from "vue-router";

// import Login from "@/views/Login/index.vue";
import Analysis from "@/views/Dashboard/Analysis/index.vue";
import Workbench from "@/views/Dashboard/Workbench/index.vue";
import Download from "@/views/Feature/Download/index.vue";
import Watermark from "@/views/Feature/WaterMark/index.vue";
import Form from "@/views/Pagedemo/Form/index.vue";
import About from "@/views/About/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/dashboard",
    },
    {
      path: "/dashboard",
      name: "dashboard",
      redirect: "/analysis",
      meta: {
        title: "Dashboard",
      },
      children: [
        {
          path: "/analysis",
          name: "analysis",
          component: Analysis,
          meta: {
            title: "分析页",
          },
        },
        {
          path: "/workbench",
          name: "workbench",
          component: Workbench,
          meta: {
            title: "工作台",
          },
        },
      ],
    },
    {
      path: "/feature",
      name: "feature",
      redirect: "/watermark",
      meta: {
        title: "功能",
      },
      children: [
        {
          path: "/download",
          name: "download",
          component: Download,
          meta: {
            title: "文件下载",
          },
        },
        {
          path: "/watermark",
          name: "watermark",
          component: Watermark,
          meta: {
            title: "水印",
          },
        },
      ],
    },
    {
      path: "/pagedemo",
      name: "pagedemo",
      redirect: "/form",
      meta: {
        title: "页面",
      },
      children: [
        {
          path: "/form",
          name: "form",
          component: Form,
          meta: {
            title: "表单页",
          },
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        title: "关于",
      },
    },
  ],
});

export default router;
