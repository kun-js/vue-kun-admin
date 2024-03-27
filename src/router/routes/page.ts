import { RouteRecordRaw } from "vue-router";
import Layout from "@/components/index.vue";
import Form from "@/views/Pagedemo/Form/index.vue";
import List from "@/views/Pagedemo/List/index.vue";
import Detail from "@/views/Pagedemo/Detail/index.vue";
import Result from "@/views/Pagedemo/Result/index.vue";
import Exception from "@/views/Pagedemo/Exception/index.vue";

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
        component: Detail,
        meta: {
          title: "detail",
        },
      },
      {
        path: "/page/result",
        name: "result",
        component: Result,
        meta: {
          title: "result",
        },
      },
      {
        path: "/page/exception",
        name: "exception",
        component: Exception,
        meta: {
          title: "exception",
        },
      },
    ],
  },
];

export default pageRoutes;
