import { RouteRecordRaw } from "vue-router";

const baseRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "登录页",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/",
    name: "首页",
    redirect: "/dashboard",
  },
];

export default baseRoutes;
