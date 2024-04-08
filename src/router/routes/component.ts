import { RouteRecordRaw } from "vue-router";

const componentRoutes: RouteRecordRaw[] = [
  {
    path: "/component",
    name: "component",
    component: () => import("@/components/index.vue"),
    redirect: "/component/button",
    meta: {
      icon: "Menu",
      title: "component",
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
      {
        path: "/component/date-picker",
        name: "日期选择器",
        component: () => import("@/views/component/date-picker/index.vue"),
        meta: {
          title: "datePicker",
        },
      },
    ],
  },
];

export default componentRoutes;
