import { RouteRecordRaw } from "vue-router";

const baseRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/",
    name: "Home",
    redirect: "/dashboard",
  },
];

export default baseRoutes;
