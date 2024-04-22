import { RouteRecordRaw } from "vue-router";

const systemRoutes: RouteRecordRaw[] = [
  {
    path: "/system",
    name: "系统管理",
    component: () => import("@/layouts/index.vue"),
    redirect: "/system/account",
    meta: {
      icon: "noto-v1:gear",
      title: "system",
    },
    children: [
      {
        path: "/system/account",
        name: "账号管理",
        component: () => import("@/views/system/account/index.vue"),
        meta: {
          title: "account",
        },
      },
      {
        path: "/system/role",
        name: "角色管理",
        component: () => import("@/views/system/role/index.vue"),
        meta: {
          title: "role",
        },
      },
    ],
  },
];

export default systemRoutes;
