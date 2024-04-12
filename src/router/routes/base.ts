import { RouteRecordRaw } from "vue-router";

const baseRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "登录页",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/",
    name: "home",
    redirect: "/dashboard",
  },
];

export default baseRoutes;
