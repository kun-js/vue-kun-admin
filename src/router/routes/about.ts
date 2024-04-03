import { RouteRecordRaw } from "vue-router";

const aboutRoutes: RouteRecordRaw[] = [
  {
    path: "/about",
    name: "about",
    component: () => import("@/components/index.vue"),
    redirect: "/about/me",
    meta: {
      title: "about",
    },
    children: [
      {
        path: "/about/me",
        name: "关于我们",
        component: () => import("@/views/about/me/index.vue"),
        meta: {
          title: "me",
        },
      },
      {
        path: "/about/skill",
        name: "关于技术栈",
        component: () => import("@/views/about/skill/index.vue"),
        meta: {
          title: "skill",
        },
      },
    ],
  },
];

export default aboutRoutes;
