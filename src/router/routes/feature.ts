import { RouteRecordRaw } from "vue-router";
import Layout from "@/components/index.vue";
import Download from "@/views/Feature/Download/index.vue";
import CodeEditor from "@/views/Feature/CodeEditor/index.vue";
import Excel from "@/views/Feature/Excel/index.vue";
import Pdf from "@/views/Feature/Pdf/index.vue";
import Clipboard from "@/views/Feature/Clipboard/index.vue";
import Watermark from "@/views/Feature/WaterMark/index.vue";

const featureRoutes: RouteRecordRaw[] = [
  {
    path: "/feature",
    name: "feature",
    component: Layout,
    redirect: "/feature/watermark",
    meta: {
      title: "feature",
    },
    children: [
      {
        path: "/feature/download",
        name: "download",
        component: Download,
        meta: {
          title: "download",
        },
      },
      {
        path: "/feature/codeeditor",
        name: "codeeditor",
        component: CodeEditor,
        meta: {
          title: "codeeditor",
        },
      },
      {
        path: "/feature/pdf",
        name: "pdf",
        component: Pdf,
        meta: {
          title: "pdf",
        },
      },
      {
        path: "/feature/excel",
        name: "excel",
        component: Excel,
        meta: {
          title: "excel",
        },
      },
      {
        path: "/feature/clipboard",
        name: "clipboard",
        component: Clipboard,
        meta: {
          title: "clipboard",
        },
      },
      {
        path: "/feature/watermark",
        name: "watermark",
        component: Watermark,
        meta: {
          title: "watermark",
        },
      },
    ],
  },
];

export default featureRoutes;
