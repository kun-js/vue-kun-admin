import { RouteRecordRaw } from "vue-router";
import Layout from "@/components/index.vue";
import Form from "@/views/PageDemo/Form/index.vue";
import List from "@/views/PageDemo/List/index.vue";
import Detail from "@/views/PageDemo/Detail/index.vue";
import Success from "@/views/PageDemo/Result/Success/index.vue";
import Fail from "@/views/PageDemo/Result/Fail/index.vue";
import FourZeroFour from "@/views/PageDemo/Exception/404/index.vue";
import FourZeroThree from "@/views/PageDemo/Exception/403/index.vue";
import FiveZeroZero from "@/views/PageDemo/Exception/500/index.vue";
import NetworkError from "@/views/PageDemo/Exception/NetworkError/index.vue";

const pageRoutes: RouteRecordRaw[] = [
  {
    path: "/page",
    name: "page",
    component: Layout,
    meta: {
      title: "page",
    },
    children: [
      {
        path: "/page/form",
        name: "表单页",
        component: Form,
        meta: {
          title: "form",
        },
      },
      {
        path: "/page/list",
        name: "列表页",
        component: List,
        meta: {
          title: "list",
        },
      },
      {
        path: "/page/detail",
        name: "详情页",
        component: Detail,
        meta: {
          title: "detail",
        },
      },
      {
        path: "/page/result/success",
        name: "成功页",
        component: Success,
        meta: {
          title: "success",
        },
      },
      {
        path: "/page/result/fail",
        name: "失败页",
        component: Fail,
        meta: {
          title: "fail",
        },
      },
      {
        path: "/page/exception/404",
        name: "404",
        component: FourZeroFour,
        meta: {
          title: "404",
        },
      },
      {
        path: "/page/exception/403",
        name: "403",
        component: FourZeroThree,
        meta: {
          title: "403",
        },
      },
      {
        path: "/page/exception/500",
        name: "500",
        component: FiveZeroZero,
        meta: {
          title: "500",
        },
      },
      {
        path: "/page/exception/networkerror",
        name: "网络错误",
        component: NetworkError,
        meta: {
          title: "networkerror",
        },
      },
    ],
  },
];

export default pageRoutes;
