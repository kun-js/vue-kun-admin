const ExternalPageRoutes = [
  {
    path: "/external-page",
    name: "外部页面",
    component: () => import("@/layouts/index.vue"),
    redirect: "/external-page/iframe/element",
    meta: {
      icon: "fluent-emoji-flat:desktop-computer",
      title: "externalPage",
    },
    children: [
      {
        path: "/external-page/iframe",
        name: "Iframe",
        redirect: "/external-page/iframe/element",
        meta: {
          title: "iframe",
        },
        children: [
          {
            path: "/external-page/iframe/element",
            name: "Element",
            component: () => import("@/views/external-page/iframe/element/index.vue"),
            meta: {
              title: "element",
            },
          },
          {
            path: "/external-page/iframe/vue",
            name: "Vue",
            component: () => import("@/views/external-page/iframe/vue/index.vue"),
            meta: {
              title: "vue",
            },
          },
        ],
      },
      {
        path: "/external-page/outerchain/element",
        name: "outerchainelement",
        beforeEnter: (to: any, from: any, next: (arg0: boolean) => void) => {
          window.open("https://element-plus.org/zh-CN/#/zh-CN", "_blank");
          // 需要调用 next() 函数来结束路由导航
          next(false); // 因为我们手动打开了一个新标签页，所以不需要继续导航
        },
      },
      {
        path: "/external-page/outerchain/vue",
        name: "outerchainvue",
        beforeEnter: (to: any, from: any, next: (arg0: boolean) => void) => {
          window.open("https://cn.vuejs.org/", "_blank");
          // 需要调用 next() 函数来结束路由导航
          next(false); // 因为我们手动打开了一个新标签页，所以不需要继续导航
        },
      },
      {
        path: "/external-page/outerchain/baidu",
        name: "outerchainbaidu",
        beforeEnter: (to: any, from: any, next: (arg0: boolean) => void) => {
          window.open("https://www.baidu.com", "_blank");
          // 需要调用 next() 函数来结束路由导航
          next(false); // 因为我们手动打开了一个新标签页，所以不需要继续导航
        },
      },
    ],
  },
];

export default ExternalPageRoutes;
