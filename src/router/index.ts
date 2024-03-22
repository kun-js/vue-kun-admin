import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login/index.vue";
import Layout from "@/components/index.vue";
import Analysis from "@/views/Dashboard/Analysis/index.vue";
import Workbench from "@/views/Dashboard/Workbench/index.vue";
import Download from "@/views/Feature/Download/index.vue";
import Clipboard from "@/views/Feature/Clipboard/index.vue";
import Watermark from "@/views/Feature/WaterMark/index.vue";
import Form from "@/views/Pagedemo/Form/index.vue";
import List from "@/views/Pagedemo/List/index.vue";
import About from "@/views/About/index.vue";
import BarChart from "@/views/Chart/BarChart/index.vue";
import LineChart from "@/views/Chart/LineChart/index.vue";
import PieChart from "@/views/Chart/PieChart/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/",
      name: "home",
      redirect: "/dashboard",
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Layout,
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
      component: Layout,
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
          path: "/feature/clipboard",
          name: "clipboard",
          component: Clipboard,
          meta: {
            title: "剪贴板",
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
      component: Layout,
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
      component: Layout,
      redirect: "/chart/barchart",
      meta: {
        title: "页面",
      },
      children: [
        {
          path: "/chart/barchart",
          name: "BarChart",
          component: BarChart,
          meta: {
            title: "柱状图",
          },
        },
        {
          path: "/chart/linechart",
          name: "LineChart",
          component: LineChart,
          meta: {
            title: "折线图",
          },
        },
        {
          path: "/chart/piechart",
          name: "PieChart",
          component: PieChart,
          meta: {
            title: "饼图",
          },
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: Layout,
      meta: {
        title: "关于",
      },
      children: [
        {
          path: "/about/me",
          name: "me",
          component: About,
          meta: {
            title: "我们",
          },
        },
        {
          path: "/about/skill",
          name: "skill",
          component: About,
          meta: {
            title: "技术栈",
          },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next(); // 如果是访问登录页，直接放行
  const result = localStorage.getItem("pinia-user");
  if (result) {
    const token = JSON.parse(result);
    if (token) {
      next(); // 已登录则放行
    } else {
      next("/login"); // 如果未登录，则跳转到登录页
    }
  } else {
    next("/login"); // 如果未登录，则跳转到登录页
  }
});

export default router;
