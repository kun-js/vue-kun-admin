import { RouteRecordRaw } from "vue-router";

const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    name: "首页",
    component: () => import("@/layouts/index.vue"),
    redirect: "/dashboard/analysis",
    meta: {
      icon: "HomeFilled",
      title: "dashboard",
    },
    children: [
      {
        path: "/dashboard/analysis",
        name: "分析页",
        component: () => import("@/views/dashboard/analysis/index.vue"),
        meta: {
          title: "analysis",
        },
      },
      {
        path: "/dashboard/workbench",
        name: "工作台",
        component: () => import("@/views/dashboard/workbench/index.vue"),
        meta: {
          title: "workbench",
        },
      },
    ],
  },
];

export default dashboardRoutes;
