import { createRouter, createWebHistory } from "vue-router";

import Analysis from "@/views/Dashboard/Analysis/index.vue";
import Workbench from "@/views/Dashboard/Workbench/index.vue";

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
          // 懒加载
          component: Analysis,
          meta: {
            title: "分析页",
          },
        },
        {
          path: "/dashboard/workbench",
          name: "workbench",
          // 懒加载
          component: Workbench,
          meta: {
            title: "工作台",
          },
        },
      ],
    },
    // {
    //   path: "/dashboard/analysis",
    //   name: "analysis",
    //   component: Analysis,
    //   meta: {
    //     title: "分析页",
    //   },
    // },
    // {
    //   path: "/dashboard/workbench",
    //   name: "workbench",
    //   component: Workbench,
    //   meta: {
    //     title: "工作台",
    //   },
    // },
  ],
});

export default router;
