import { RouteRecordRaw } from "vue-router";
import Login from "@/views/Login/index.vue";

const baseRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "home",
    redirect: "/dashboard",
  },
];

export default baseRoutes;
