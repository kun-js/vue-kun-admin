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
        path: "/externalpage/outerchain/element",
        name: "outerchainelement",
        beforeEnter: (to, from, next) => {
          window.open("https://element-plus.org/zh-CN/#/zh-CN", "_blank");
          // 需要调用 next() 函数来结束路由导航
          next(false); // 因为我们手动打开了一个新标签页，所以不需要继续导航
        },
      },
      {
        path: "/externalpage/outerchain/vue",
        name: "outerchainvue",
        beforeEnter: (to, from, next) => {
          window.open("https://cn.vuejs.org/", "_blank");
          // 需要调用 next() 函数来结束路由导航
          next(false); // 因为我们手动打开了一个新标签页，所以不需要继续导航
        },
      },
      {
        path: "/externalpage/outerchain/baidu",
        name: "outerchainbaidu",
        beforeEnter: (to, from, next) => {
          window.open("https://www.baidu.com", "_blank");
          // 需要调用 next() 函数来结束路由导航
          next(false); // 因为我们手动打开了一个新标签页，所以不需要继续导航
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
