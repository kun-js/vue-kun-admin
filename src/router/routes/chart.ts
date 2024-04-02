import { RouteRecordRaw } from "vue-router";
import Layout from "@/components/index.vue";
import GaoDeMap from "@/views/Chart/GaoDeMap/index.vue";
import BarChart from "@/views/Chart/BarChart/index.vue";
import LineChart from "@/views/Chart/LineChart/index.vue";
import PieChart from "@/views/Chart/PieChart/index.vue";

const chartRoutes: RouteRecordRaw[] = [
  {
    path: "/chart",
    name: "页面",
    component: Layout,
    redirect: "/chart/barchart",
    meta: {
      title: "chart",
    },
    children: [
      {
        path: "/chart/gaodemap",
        name: "高德地图",
        component: GaoDeMap,
        meta: {
          title: "gaodemap",
        },
      },
      {
        path: "/chart/barchart",
        name: "柱状图",
        component: BarChart,
        meta: {
          title: "barchart",
        },
      },
      {
        path: "/chart/linechart",
        name: "折线图",
        component: LineChart,
        meta: {
          title: "linechart",
        },
      },
      {
        path: "/chart/piechart",
        name: "饼图",
        component: PieChart,
        meta: {
          title: "piechart",
        },
      },
    ],
  },
];

export default chartRoutes;
