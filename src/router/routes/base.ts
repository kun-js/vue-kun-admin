import { RouteRecordRaw } from "vue-router";

const baseRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/",
    name: "home",
    redirect: "/dashboard",
  },
];

export default baseRoutes;
