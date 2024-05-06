import { RouteRecordRaw } from "vue-router";

const pageRoutes: RouteRecordRaw[] = [
  {
    path: "/page",
    name: "Page",
    component: () => import("@/layouts/index.vue"),
    redirect: "/page/form",
    meta: {
      icon: "noto:framed-picture",
      title: "page",
    },
    children: [
      {
        path: "/page/form/basic",
        name: "BasicForm",
        component: () => import("@/views/page/form/basic/index.vue"),
        meta: {
          title: "basicForm",
        },
      },
      {
        path: "/page/form/step",
        name: "StepForm",
        component: () => import("@/views/page/form/step/index.vue"),
        meta: {
          title: "stepForm",
        },
      },
      {
        path: "/page/list/basic",
        name: "BasicList",
        component: () => import("@/views/page/list/basic/index.vue"),
        meta: {
          title: "basicList",
        },
      },
      {
        path: "/page/list/card",
        name: "CarkList",
        component: () => import("@/views/page/list/card/index.vue"),
        meta: {
          title: "cardList",
        },
      },
      {
        path: "/page/detail",
        name: "Detail",
        component: () => import("@/views/page/detail/index.vue"),
        meta: {
          title: "detail",
        },
      },
      {
        path: "/page/result/success",
        name: "SuccessPage",
        component: () => import("@/views/page/result/success/index.vue"),
        meta: {
          title: "success",
        },
      },
      {
        path: "/page/result/fail",
        name: "FailPage",
        component: () => import("@/views/page/result/fail/index.vue"),
        meta: {
          title: "fail",
        },
      },
      {
        path: "/page/exception/404",
        name: "404Page",
        component: () => import("@/views/page/exception/404/index.vue"),
        meta: {
          title: "page404",
        },
      },
      {
        path: "/page/exception/403",
        name: "403Page",
        component: () => import("@/views/page/exception/403/index.vue"),
        meta: {
          title: "page403",
        },
      },
      {
        path: "/page/exception/500",
        name: "500Page",
        component: () => import("@/views/page/exception/500/index.vue"),
        meta: {
          title: "page500",
        },
      },
      {
        path: "/page/exception/no-data",
        name: "NoDataPage",
        component: () => import("@/views/page/exception/no-data/index.vue"),
        meta: {
          title: "noData",
        },
      },
      {
        path: "/page/exception/network-error",
        name: "NetworkErrorPage",
        component: () => import("@/views/page/exception/network-error/index.vue"),
        meta: {
          title: "networkError",
        },
      },
    ],
  },
];

export default pageRoutes;
