import { createRouter, createWebHistory } from "vue-router";

// import Login from "@/views/Login/index.vue";
import Analysis from "@/views/Dashboard/Analysis/index.vue";
import Workbench from "@/views/Dashboard/Workbench/index.vue";
import Download from "@/views/Feature/Download/index.vue";
import Watermark from "@/views/Feature/WaterMark/index.vue";
import Form from "@/views/Pagedemo/Form/index.vue";
import List from "@/views/Pagedemo/List/index.vue";
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
      redirect: "/dashboard/analysis",
      meta: {
        title: "Dashboard",
      },
      children: [
        {
          path: "/dashboard/analysis",
          name: "analysis",
          component: Analysis,
          meta: {
            title: "分析页",
          },
        },
        {
          path: "/dashboard/workbench",
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
      redirect: "/feature/watermark",
      meta: {
        title: "功能",
      },
      children: [
        {
          path: "/feature/download",
          name: "download",
          component: Download,
          meta: {
            title: "文件下载",
          },
        },
        {
          path: "/feature/watermark",
          name: "watermark",
          component: Watermark,
          meta: {
            title: "水印",
          },
        },
      ],
    },
    {
      path: "/page",
      name: "page",
      redirect: "/page/form",
      meta: {
        title: "页面",
      },
      children: [
        {
          path: "/page/form",
          name: "form",
          component: Form,
          meta: {
            title: "表单页",
          },
        },
        {
          path: "/page/list",
          name: "list",
          component: List,
          meta: {
            title: "列表页",
          },
        },
        {
          path: "/page/detail",
          name: "detail",
          component: Form,
          meta: {
            title: "详情页",
          },
        },
        {
          path: "/page/result",
          name: "result",
          component: Form,
          meta: {
            title: "结果页",
          },
        },
        {
          path: "/page/exception",
          name: "exception",
          component: Form,
          meta: {
            title: "异常页",
          },
        },
      ],
    },
    {
      path: "/chart",
      name: "pagedemo",
      redirect: "/chart/barchart",
      meta: {
        title: "页面",
      },
      children: [
        {
          path: "/chart/barchart",
          name: "barchart",
          component: Form,
          meta: {
            title: "柱状图",
          },
        },
        {
          path: "/chart/linechart",
          name: "linechart",
          component: Form,
          meta: {
            title: "折线图",
          },
        },
        {
          path: "/chart/piechart",
          name: "piechart",
          component: Form,
          meta: {
            title: "饼图",
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
