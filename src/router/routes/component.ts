import { RouteRecordRaw } from "vue-router";

const componentRoutes: RouteRecordRaw[] = [
  {
    path: "/component",
    name: "component",
    component: () => import("@/layouts/index.vue"),
    redirect: "/component/button",
    meta: {
      icon: "noto:closed-book",
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
      {
        path: "/component/statistic",
        name: "统计组件",
        component: () => import("@/views/component/statistic/index.vue"),
        meta: {
          title: "statistic",
        },
      },
      {
        path: "/component/timestamp",
        name: "相对时间",
        component: () => import("@/views/component/timestamp/index.vue"),
        meta: {
          title: "timestamp",
        },
      },
      {
        path: "/component/password-strength",
        name: "密码强度",
        component: () => import("@/views/component/password-strength/index.vue"),
        meta: {
          title: "passwordStrength",
        },
      },
    ],
  },
];

export default componentRoutes;
