import { RouteRecordRaw } from "vue-router";

const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/layouts/index.vue"),
    redirect: "/dashboard/analysis",
    meta: {
      icon: "noto:house",
      title: "dashboard",
    },
    children: [
      {
        path: "/dashboard/analysis",
        name: "Analysis",
        component: () => import("@/views/dashboard/analysis/index.vue"),
        meta: {
          title: "analysis",
        },
      },
      {
        path: "/dashboard/workbench",
        name: "Workbench",
        component: () => import("@/views/dashboard/workbench/index.vue"),
        meta: {
          title: "workbench",
        },
      },
    ],
  },
];

export default dashboardRoutes;
