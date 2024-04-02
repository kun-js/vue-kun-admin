import { RouteRecordRaw } from "vue-router";
import Layout from "@/components/index.vue";
import Button from "@/views/ComponentDemo/Button/index.vue";
import ColorPicker from "@/views/ComponentDemo/ColorPicker/index.vue";

const componentRoutes: RouteRecordRaw[] = [
  {
    path: "/component",
    name: "component",
    component: Layout,
    redirect: "/component/button",
    meta: {
      title: "chart",
    },
    children: [
      {
        path: "/component/button",
        name: "按钮",
        component: Button,
        meta: {
          title: "button",
        },
      },
      {
        path: "/component/colorpicker",
        name: "取色器",
        component: ColorPicker,
        meta: {
          title: "colorpicker",
        },
      },
    ],
  },
];

export default componentRoutes;
