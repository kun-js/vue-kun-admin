import { RouteRecordRaw } from "vue-router";
import Layout from "@/components/index.vue";
import Button from "@/views/ComponentDemo/Button/index.vue";

const componentRoutes: RouteRecordRaw[] = [
  {
    path: "/component",
    name: "component",
    component: Layout,
    meta: {
      title: "chart",
    },
    children: [
      {
        path: "/component/button",
        name: "button",
        component: Button,
        meta: {
          title: "button",
        },
      },
    ],
  },
];

export default componentRoutes;
