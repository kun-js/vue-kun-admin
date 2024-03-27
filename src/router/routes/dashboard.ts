import { RouteRecordRaw } from "vue-router";
import Layout from "@/components/index.vue";
import Analysis from "@/views/Dashboard/Analysis/index.vue";
import Workbench from "@/views/Dashboard/Workbench/index.vue";

const dashboardRoutes: RouteRecordRaw[] = [
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
];

export default dashboardRoutes;
