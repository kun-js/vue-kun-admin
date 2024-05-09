import { RouteRecordRaw } from "vue-router";

const chartRoutes: RouteRecordRaw[] = [
  {
    path: "/chart",
    name: "Chart",
    component: () => import("@/layouts/index.vue"),
    redirect: "/chart/amap",
    meta: {
      icon: "emojione:bar-chart",
      title: "chart",
    },
    children: [
      {
        path: "/chart/amap",
        name: "AMap",
        component: () => import("@/views/chart/amap/index.vue"),
        meta: {
          title: "AMap",
        },
      },
      {
        path: "/chart/bmap",
        name: "BMAp",
        component: () => import("@/views/chart/bmap/index.vue"),
        meta: {
          title: "BMap",
        },
      },
      {
        path: "/chart/tmap",
        name: "TMap",
        component: () => import("@/views/chart/tmap/index.vue"),
        meta: {
          title: "TMap",
        },
      },
      {
        path: "/chart/bar-chart",
        name: "BarChart",
        component: () => import("@/views/chart/bar-chart/index.vue"),
        meta: {
          title: "barChart",
        },
      },
      {
        path: "/chart/line-chart",
        name: "LineChart",
        component: () => import("@/views/chart/line-chart/index.vue"),
        meta: {
          title: "lineChart",
        },
      },
      {
        path: "/page/pie-chart",
        name: "PieChart",
        redirect: "/page/pie-chart/basic",
        meta: {
          title: "pieChart",
        },
        children: [
          {
            path: "/chart/pie-chart/basic",
            name: "BasicPieChart",
            component: () => import("@/views/chart/pie-chart/basic/index.vue"),
            meta: {
              title: "basicPieChart",
            },
          },
          {
            path: "/chart/pie-chart/doughnut",
            name: "DoughnutPieChart",
            component: () => import("@/views/chart/pie-chart/doughnut/index.vue"),
            meta: {
              title: "doughnutChart",
            },
          },
        ],
      },
    ],
  },
];

export default chartRoutes;
