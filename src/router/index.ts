import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login/index.vue";
import Layout from "@/components/index.vue";
import Analysis from "@/views/Dashboard/Analysis/index.vue";
import Workbench from "@/views/Dashboard/Workbench/index.vue";
import Download from "@/views/Feature/Download/index.vue";
import CodeEditor from "@/views/Feature/CodeEditor/index.vue";
import Excel from "@/views/Feature/Excel/index.vue";
import Pdf from "@/views/Feature/Pdf/index.vue";
import Clipboard from "@/views/Feature/Clipboard/index.vue";
import Watermark from "@/views/Feature/WaterMark/index.vue";
import Form from "@/views/Pagedemo/Form/index.vue";
import List from "@/views/Pagedemo/List/index.vue";
import About from "@/views/About/Me/index.vue";
import Skill from "@/views/About/Skill/index.vue";
import GaoDeMap from "@/views/Chart/GaoDeMap/index.vue";
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
        title: "dashboard",
      },
      children: [
        {
          path: "/dashboard/analysis",
          name: "analysis",
          component: Analysis,
          meta: {
            title: "analysis",
          },
        },
        {
          path: "/dashboard/workbench",
          name: "workbench",
          component: Workbench,
          meta: {
            title: "workbench",
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
        title: "feature",
      },
      children: [
        {
          path: "/feature/download",
          name: "download",
          component: Download,
          meta: {
            title: "download",
          },
        },
        {
          path: "/feature/codeeditor",
          name: "codeeditor",
          component: CodeEditor,
          meta: {
            title: "codeeditor",
          },
        },
        {
          path: "/feature/pdf",
          name: "pdf",
          component: Pdf,
          meta: {
            title: "pdf",
          },
        },
        {
          path: "/feature/excel",
          name: "excel",
          component: Excel,
          meta: {
            title: "excel",
          },
        },
        {
          path: "/feature/clipboard",
          name: "clipboard",
          component: Clipboard,
          meta: {
            title: "clipboard",
          },
        },
        {
          path: "/feature/watermark",
          name: "watermark",
          component: Watermark,
          meta: {
            title: "watermark",
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
        title: "page",
      },
      children: [
        {
          path: "/page/form",
          name: "form",
          component: Form,
          meta: {
            title: "form",
          },
        },
        {
          path: "/page/list",
          name: "list",
          component: List,
          meta: {
            title: "list",
          },
        },
        {
          path: "/page/detail",
          name: "detail",
          component: Form,
          meta: {
            title: "detail",
          },
        },
        {
          path: "/page/result",
          name: "result",
          component: Form,
          meta: {
            title: "result",
          },
        },
        {
          path: "/page/exception",
          name: "exception",
          component: Form,
          meta: {
            title: "exception",
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
        title: "chart",
      },
      children: [
        {
          path: "/chart/gaodemap",
          name: "GaoDeMap",
          component: GaoDeMap,
          meta: {
            title: "gaodemap",
          },
        },
        {
          path: "/chart/barchart",
          name: "BarChart",
          component: BarChart,
          meta: {
            title: "barchart",
          },
        },
        {
          path: "/chart/linechart",
          name: "LineChart",
          component: LineChart,
          meta: {
            title: "linechart",
          },
        },
        {
          path: "/chart/piechart",
          name: "PieChart",
          component: PieChart,
          meta: {
            title: "piechart",
          },
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: Layout,
      meta: {
        title: "about",
      },
      children: [
        {
          path: "/about/me",
          name: "me",
          component: About,
          meta: {
            title: "me",
          },
        },
        {
          path: "/about/skill",
          name: "skill",
          component: Skill,
          meta: {
            title: "skill",
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
    const { token } = JSON.parse(result);
    // console.log("token: ", token);
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
