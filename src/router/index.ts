import { createRouter, createWebHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import { useMenuStore } from "@/stores/menu";

import baseRoutes from "./routes/base";
import dashboardRoutes from "./routes/dashboard";
import permissionRoutes from "./routes/permission";
import componentRoutes from "./routes/component";
import featureRoutes from "./routes/feature";
import pageRoutes from "./routes/page";
import chartRoutes from "./routes/chart";
import systemRoutes from "./routes/system";
import ExternalPageRoutes from "./routes/externalpage";
import aboutRoutes from "./routes/about";

const routes: RouteRecordRaw[] = [
  ...baseRoutes,
  ...dashboardRoutes,
  ...permissionRoutes,
  ...componentRoutes,
  ...featureRoutes,
  ...pageRoutes,
  ...chartRoutes,
  ...systemRoutes,
  ...ExternalPageRoutes,
  ...aboutRoutes,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// el-menu 高亮
router.beforeEach((to, from, next) => {
  useMenuStore().defaultActive = to.path;
  // console.log("useMenuStore().defaultActive: ", useMenuStore().defaultActive);
  next();
});

// 登录判断
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
