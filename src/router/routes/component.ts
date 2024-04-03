import { RouteRecordRaw } from "vue-router";

const componentRoutes: RouteRecordRaw[] = [
  {
    path: "/component",
    name: "component",
    component: () => import("@/components/index.vue"),
    redirect: "/component/button",
    meta: {
      title: "chart",
    },
    children: [
      {
        path: "/component/button",
        name: "按钮",
        component: () => import("@/views/component/button/index.vue"),
        meta: {
          title: "button",
        },
      },
      {
        path: "/component/color-picker",
        name: "取色器",
        component: () => import("@/views/component/color-picker/index.vue"),
        meta: {
          title: "colorPicker",
        },
      },
    ],
  },
];

export default componentRoutes;
