import { RouteRecordRaw } from "vue-router";

const pageRoutes: RouteRecordRaw[] = [
  {
    path: "/page",
    name: "page",
    component: () => import("@/components/index.vue"),
    redirect: "/page/form",
    meta: {
      icon: "Picture",
      title: "page",
    },
    children: [
      {
        path: "/page/form",
        name: "表单页",
        component: () => import("@/views/page/form/index.vue"),
        meta: {
          title: "form",
        },
      },
      {
        path: "/page/list",
        name: "列表页",
        component: () => import("@/views/page/list/index.vue"),
        meta: {
          title: "list",
        },
      },
      {
        path: "/page/detail",
        name: "详情页",
        component: () => import("@/views/page/detail/index.vue"),
        meta: {
          title: "detail",
        },
      },
      {
        path: "/page/result/success",
        name: "成功页",
        component: () => import("@/views/page/result/success/index.vue"),
        meta: {
          title: "success",
        },
      },
      {
        path: "/page/result/fail",
        name: "失败页",
        component: () => import("@/views/page/result/fail/index.vue"),
        meta: {
          title: "fail",
        },
      },
      {
        path: "/page/exception/404",
        name: "404",
        component: () => import("@/views/page/exception/404/index.vue"),
        meta: {
          title: "page404",
        },
      },
      {
        path: "/page/exception/403",
        name: "403",
        component: () => import("@/views/page/exception/403/index.vue"),
        meta: {
          title: "page403",
        },
      },
      {
        path: "/page/exception/500",
        name: "500",
        component: () => import("@/views/page/exception/500/index.vue"),
        meta: {
          title: "page500",
        },
      },
      {
        path: "/page/exception/network-error",
        name: "网络错误",
        component: () => import("@/views/page/exception/network-error/index.vue"),
        meta: {
          title: "networkError",
        },
      },
    ],
  },
];

export default pageRoutes;
