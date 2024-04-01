import { RouteRecordRaw } from "vue-router";
import Layout from "@/components/index.vue";
import OuterChain from "@/views/ExternalPage/OuterChain/index.vue";
import Element from "@/views/ExternalPage/Iframe/Element/index.vue";
import Vue from "@/views/ExternalPage/Iframe/Vue/index.vue";

const ExternalPageRoutes: RouteRecordRaw[] = [
  {
    path: "/externalpage",
    name: "externalpage",
    component: Layout,
    meta: {
      title: "externalpage",
    },
    children: [
      {
        path: "/externalpage/outerchain",
        name: "outerchain",
        component: OuterChain,
        meta: {
          title: "outerchain",
        },
      },
      {
        path: "/externalpage/iframe/element",
        name: "element",
        component: Element,
        meta: {
          title: "element",
        },
      },
      {
        path: "/externalpage/iframe/vue",
        name: "vue",
        component: Vue,
        meta: {
          title: "vue",
        },
      },
    ],
  },
];

export default ExternalPageRoutes;
