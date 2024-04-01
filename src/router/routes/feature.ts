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
import Debounce from "@/views/Feature/Debounce/index.vue";
import Sensitive from "@/views/Feature/Sensitive/index.vue";

const featureRoutes: RouteRecordRaw[] = [
  {
    path: "/feature",
    name: "功能",
    component: Layout,
    redirect: "/feature/watermark",
    meta: {
      title: "feature",
    },
    children: [
      {
        path: "/feature/download",
        name: "文件下载",
        component: Download,
        meta: {
          title: "download",
        },
      },
      {
        path: "/feature/codeeditor",
        name: "代码编辑器",
        component: CodeEditor,
        meta: {
          title: "codeeditor",
        },
      },
      {
        path: "/feature/print",
        name: "打印",
        component: Print,
        meta: {
          title: "print",
        },
      },
      {
        path: "/feature/drag",
        name: "拖拽",
        component: Draggable,
        meta: {
          title: "drag",
        },
      },
      {
        path: "/feature/pdf",
        name: "PDF预览",
        component: Pdf,
        meta: {
          title: "pdf",
        },
      },
      {
        path: "/feature/barcode",
        name: "条形码",
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
        name: "剪贴板",
        component: Clipboard,
        meta: {
          title: "clipboard",
        },
      },
      {
        path: "/feature/watermark",
        name: "水印",
        component: Watermark,
        meta: {
          title: "watermark",
        },
      },
      {
        path: "/feature/debounce",
        name: "防抖节流",
        component: Debounce,
        meta: {
          title: "debounce",
        },
      },
      {
        path: "/feature/sensitive",
        name: "敏感词过滤",
        component: Sensitive,
        meta: {
          title: "sensitive",
        },
      },
    ],
  },
];

export default featureRoutes;
