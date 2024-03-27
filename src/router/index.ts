import { createRouter, createWebHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";

import baseRoutes from "./routes/base";
import dashboardRoutes from "./routes/dashboard";
import featureRoutes from "./routes/feature";
import pageRoutes from "./routes/page";
import chartRoutes from "./routes/chart";
import aboutRoutes from "./routes/about";

const routes: RouteRecordRaw[] = [
  ...baseRoutes,
  ...dashboardRoutes,
  ...featureRoutes,
  ...pageRoutes,
  ...chartRoutes,
  ...aboutRoutes,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next(); // 如果是访问登录页，直接放行
  const result = localStorage.getItem("pinia-user");
  if (result) {
    const { token } = JSON.parse(result);
    // console.log("token: ", token);
    if (token) {
      next(); // 已登录则放行
    } else {
      next("/login"); // 如果未登录，则跳转到登录页
    }
  } else {
    next("/login"); // 如果未登录，则跳转到登录页
  }
});

export default router;
