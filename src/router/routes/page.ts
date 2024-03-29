import { RouteRecordRaw } from "vue-router";
import Layout from "@/components/index.vue";
import Form from "@/views/Pagedemo/Form/index.vue";
import List from "@/views/Pagedemo/List/index.vue";
import Detail from "@/views/Pagedemo/Detail/index.vue";
import Success from "@/views/Pagedemo/Result/Success/index.vue";
import Fail from "@/views/Pagedemo/Result/Fail/index.vue";
import FourZeroFour from "@/views/Pagedemo/Exception/404/index.vue";
import FourZeroThree from "@/views/Pagedemo/Exception/403/index.vue";
import FiveZeroZero from "@/views/Pagedemo/Exception/500/index.vue";
import NetworkError from "@/views/Pagedemo/Exception/NetworkError/index.vue";

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
        path: "/page/result/success",
        name: "success",
        component: Success,
        meta: {
          title: "success",
        },
      },
      {
        path: "/page/result/fail",
        name: "fail",
        component: Fail,
        meta: {
          title: "fail",
        },
      },
      {
        path: "/page/exception/404",
        name: "fourzerofour",
        component: FourZeroFour,
        meta: {
          title: "fourzerofour",
        },
      },
      {
        path: "/page/exception/403",
        name: "fourzerothree",
        component: FourZeroThree,
        meta: {
          title: "fourzerothree",
        },
      },
      {
        path: "/page/exception/500",
        name: "FiveZeroZero",
        component: FiveZeroZero,
        meta: {
          title: "fivezerozero",
        },
      },
      {
        path: "/page/exception/networkerror",
        name: "NetworkError",
        component: NetworkError,
        meta: {
          title: "networkerror",
        },
      },
    ],
  },
];

export default pageRoutes;
