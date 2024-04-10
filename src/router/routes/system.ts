import { RouteRecordRaw } from "vue-router";

const systemRoutes: RouteRecordRaw[] = [
  {
    path: "/system",
    name: "system",
    component: () => import("@/components/index.vue"),
    redirect: "/system/account",
    meta: {
      icon: "Setting",
      title: "system",
    },
    children: [
      {
        path: "/system/account",
        name: "account",
        component: () => import("@/views/system/account/index.vue"),
        meta: {
          title: "account",
        },
      },
      {
        path: "/system/role",
        name: "role",
        component: () => import("@/views/system/role/index.vue"),
        meta: {
          title: "role",
        },
      },
    ],
  },
];

export default systemRoutes;
