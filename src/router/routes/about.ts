import { RouteRecordRaw } from "vue-router";

const aboutRoutes: RouteRecordRaw[] = [
  {
    path: "/about",
    name: "About",
    component: () => import("@/layouts/index.vue"),
    redirect: "/about/me",
    meta: {
      icon: "streamline-emojis:smiling-face-with-sunglasses",
      title: "about",
    },
    children: [
      {
        path: "/about/me",
        name: "Me",
        component: () => import("@/views/about/me/index.vue"),
        meta: {
          title: "me",
        },
      },
      {
        path: "/about/skill",
        name: "Skill",
        component: () => import("@/views/about/skill/index.vue"),
        meta: {
          title: "skill",
        },
      },
    ],
  },
];

export default aboutRoutes;
