import { RouteRecordRaw } from "vue-router";
import Layout from "@/components/index.vue";
import Form from "@/views/Pagedemo/Form/index.vue";
import List from "@/views/Pagedemo/List/index.vue";

const pageRoutes: RouteRecordRaw[] = [
  {
    path: "/page",
    name: "page",
    component: Layout,
    redirect: "/page/form",
    meta: {
      title: "page",
    },
    children: [
      {
        path: "/page/form",
        name: "form",
        component: Form,
        meta: {
          title: "form",
        },
      },
      {
        path: "/page/list",
        name: "list",
        component: List,
        meta: {
          title: "list",
        },
      },
      {
        path: "/page/detail",
        name: "detail",
        component: Form,
        meta: {
          title: "detail",
        },
      },
      {
        path: "/page/result",
        name: "result",
        component: Form,
        meta: {
          title: "result",
        },
      },
      {
        path: "/page/exception",
        name: "exception",
        component: Form,
        meta: {
          title: "exception",
        },
      },
    ],
  },
];

export default pageRoutes;
