import { RouteRecordRaw } from "vue-router";

const permissionRoutes: RouteRecordRaw[] = [
  {
    path: "/permission",
    name: "权限管理",
    component: () => import("@/layouts/index.vue"),
    redirect: "/permission/button-permission",
    meta: {
      icon: "Key",
      title: "permission",
    },
    children: [
      {
        path: "/permission/button-permission",
        name: "按钮权限",
        component: () => import("@/views/permission/button-permission/index.vue"),
        meta: {
          title: "buttonPermission",
        },
      },
    ],
  },
];

export default permissionRoutes;
