import { RouteRecordRaw } from "vue-router";
import Layout from "@/components/index.vue";
import About from "@/views/About/Me/index.vue";
import Skill from "@/views/About/Skill/index.vue";

const aboutRoutes: RouteRecordRaw[] = [
  {
    path: "/about",
    name: "about",
    component: Layout,
    redirect: "/about/me",
    meta: {
      title: "about",
    },
    children: [
      {
        path: "/about/me",
        name: "关于我们",
        component: About,
        meta: {
          title: "me",
        },
      },
      {
        path: "/about/skill",
        name: "关于技术栈",
        component: Skill,
        meta: {
          title: "skill",
        },
      },
    ],
  },
];

export default aboutRoutes;
