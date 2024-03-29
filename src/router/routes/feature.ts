import { RouteRecordRaw } from "vue-router";
import Layout from "@/components/index.vue";
import Download from "@/views/Feature/Download/index.vue";
import CodeEditor from "@/views/Feature/CodeEditor/index.vue";
import Print from "@/views/Feature/Print/index.vue";
import Excel from "@/views/Feature/Excel/index.vue";
import Pdf from "@/views/Feature/Pdf/index.vue";
import Draggable from "@/views/Feature/Draggable/index.vue";
import Barcode from "@/views/Feature/Barcode/index.vue";
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
        path: "/feature/print",
        name: "print",
        component: Print,
        meta: {
          title: "print",
        },
      },
      {
        path: "/feature/drag",
        name: "drag",
        component: Draggable,
        meta: {
          title: "drag",
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
        path: "/feature/barcode",
        name: "barcode",
        component: Barcode,
        meta: {
          title: "barcode",
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
