import { createRouter, createWebHistory } from "vue-router";

import Analysis from "@/views/Dashboard/Analysis/index.vue";
import Workbench from "@/views/Dashboard/Workbench/index.vue";
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
          // 懒加载
          component: Analysis,
          meta: {
            title: "分析页",
          },
        },
        {
          path: "/workbench",
          name: "workbench",
          // 懒加载
          component: Workbench,
          meta: {
            title: "工作台",
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
