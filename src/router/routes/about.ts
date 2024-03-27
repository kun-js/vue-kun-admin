import { RouteRecordRaw } from "vue-router";
import Layout from "@/components/index.vue";
import About from "@/views/About/Me/index.vue";
import Skill from "@/views/About/Skill/index.vue";

const aboutRoutes: RouteRecordRaw[] = [
  {
    path: "/about",
    name: "about",
    component: Layout,
    meta: {
      title: "about",
    },
    children: [
      {
        path: "/about/me",
        name: "me",
        component: About,
        meta: {
          title: "me",
        },
      },
      {
        path: "/about/skill",
        name: "skill",
        component: Skill,
        meta: {
          title: "skill",
        },
      },
    ],
  },
];

export default aboutRoutes;
