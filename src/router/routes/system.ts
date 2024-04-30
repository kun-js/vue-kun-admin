import { RouteRecordRaw } from "vue-router";

const systemRoutes: RouteRecordRaw[] = [
  {
    path: "/system",
    name: "System",
    component: () => import("@/layouts/index.vue"),
    redirect: "/system/account",
    meta: {
      icon: "noto-v1:gear",
      title: "system",
    },
    children: [
      {
        path: "/system/account",
        name: "Account",
        component: () => import("@/views/system/account/index.vue"),
        meta: {
          title: "account",
        },
      },
      {
        path: "/system/role",
        name: "Role",
        component: () => import("@/views/system/role/index.vue"),
        meta: {
          title: "role",
        },
      },
    ],
  },
];

export default systemRoutes;
