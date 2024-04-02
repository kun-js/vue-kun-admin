import { RouteRecordRaw } from "vue-router";
import Login from "@/views/Login/index.vue";

const baseRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "登录",
    component: Login,
  },
  {
    path: "/",
    name: "首页",
    redirect: "/dashboard",
  },
];

export default baseRoutes;
