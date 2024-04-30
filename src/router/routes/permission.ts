import { RouteRecordRaw } from "vue-router";

const permissionRoutes: RouteRecordRaw[] = [
  {
    path: "/permission",
    name: "Permission",
    component: () => import("@/layouts/index.vue"),
    redirect: "/permission/button-permission",
    meta: {
      icon: "noto:locked-with-key",
      title: "permission",
    },
    children: [
      {
        path: "/permission/button-permission",
        name: "ButtonPermission",
        component: () => import("@/views/permission/button-permission/index.vue"),
        meta: {
          title: "buttonPermission",
        },
      },
    ],
  },
];

export default permissionRoutes;
