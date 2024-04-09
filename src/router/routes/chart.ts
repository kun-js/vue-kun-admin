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
        path: "/chart/bmap",
        name: "百度地图",
        component: () => import("@/views/chart/bmap/index.vue"),
        meta: {
          title: "BMap",
        },
      },
      {
        path: "/chart/tmap",
        name: "腾讯地图",
        component: () => import("@/views/chart/tmap/index.vue"),
        meta: {
          title: "TMap",
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
        path: "/chart/pie-chart/basic",
        name: "基础饼图",
        component: () => import("@/views/chart/pie-chart/basic/index.vue"),
        meta: {
          title: "basicPieChart",
        },
      },
      {
        path: "/chart/pie-chart/doughnut",
        name: "环形饼图",
        component: () => import("@/views/chart/pie-chart/doughnut/index.vue"),
        meta: {
          title: "doughnutChart",
        },
      },
    ],
  },
];

export default chartRoutes;
