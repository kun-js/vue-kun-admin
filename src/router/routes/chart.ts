import { RouteRecordRaw } from "vue-router";

const chartRoutes: RouteRecordRaw[] = [
  {
    path: "/chart",
    name: "页面",
    component: () => import("@/components/index.vue"),
    redirect: "/chart/bar-chart",
    meta: {
      icon: "PieChart",
      title: "chart",
    },
    children: [
      {
        path: "/chart/amap",
        name: "高德地图",
        component: () => import("@/views/chart/amap/index.vue"),
        meta: {
          title: "AMap",
        },
      },
      {
        path: "/chart/bar-chart",
        name: "柱状图",
        component: () => import("@/views/chart/bar-chart/index.vue"),
        meta: {
          title: "barChart",
        },
      },
      {
        path: "/chart/line-chart",
        name: "折线图",
        component: () => import("@/views/chart/line-chart/index.vue"),
        meta: {
          title: "lineChart",
        },
      },
      {
        path: "/chart/pie-chart",
        name: "饼图",
        component: () => import("@/views/chart/pie-chart/index.vue"),
        meta: {
          title: "pieChart",
        },
      },
    ],
  },
];

export default chartRoutes;
