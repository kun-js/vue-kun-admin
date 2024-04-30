import { RouteRecordRaw } from "vue-router";

const componentRoutes: RouteRecordRaw[] = [
  {
    path: "/component",
    name: "Component",
    component: () => import("@/layouts/index.vue"),
    redirect: "/component/button",
    meta: {
      icon: "noto:closed-book",
      title: "component",
    },
    children: [
      {
        path: "/component/button",
        name: "Button",
        component: () => import("@/views/component/button/index.vue"),
        meta: {
          title: "button",
        },
      },
      {
        path: "/component/tag",
        name: "Tag",
        component: () => import("@/views/component/tag/index.vue"),
        meta: {
          title: "tag",
        },
      },
      {
        path: "/component/color-picker",
        name: "ColorPicker",
        component: () => import("@/views/component/color-picker/index.vue"),
        meta: {
          title: "colorPicker",
        },
      },
      {
        path: "/component/date-picker",
        name: "DatePicker",
        component: () => import("@/views/component/date-picker/index.vue"),
        meta: {
          title: "datePicker",
        },
      },
      {
        path: "/component/message",
        name: "Message",
        component: () => import("@/views/component/message/index.vue"),
        meta: {
          title: "message",
        },
      },
      {
        path: "/component/statistic",
        name: "Statistic",
        component: () => import("@/views/component/statistic/index.vue"),
        meta: {
          title: "statistic",
        },
      },
      {
        path: "/component/menu-tree",
        name: "MenuTree",
        component: () => import("@/views/component/menu-tree/index.vue"),
        meta: {
          title: "menuTree",
        },
      },
      {
        path: "/component/timestamp",
        name: "Timestamp",
        component: () => import("@/views/component/timestamp/index.vue"),
        meta: {
          title: "timestamp",
        },
      },
      {
        path: "/component/password-strength",
        name: "PasswordStrength",
        component: () => import("@/views/component/password-strength/index.vue"),
        meta: {
          title: "passwordStrength",
        },
      },
    ],
  },
];

export default componentRoutes;
