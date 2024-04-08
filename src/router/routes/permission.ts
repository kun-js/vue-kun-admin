import { RouteRecordRaw } from "vue-router";

const permissionRoutes: RouteRecordRaw[] = [
  {
    path: "/permission",
    name: "permission",
    component: () => import("@/components/index.vue"),
    redirect: "/permission/button-permission",
    meta: {
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
