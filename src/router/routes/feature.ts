import { RouteRecordRaw } from "vue-router";

const featureRoutes: RouteRecordRaw[] = [
  {
    path: "/feature",
    name: "功能",
    component: () => import("@/layouts/index.vue"),
    redirect: "/feature/download",
    meta: {
      icon: "noto:dna",
      title: "feature",
    },
    children: [
      {
        path: "/feature/download",
        name: "Download",
        component: () => import("@/views/feature/download/index.vue"),
        meta: {
          title: "download",
        },
      },
      {
        path: "/feature/verify",
        name: "Verify",
        component: () => import("@/views/feature/verify/index.vue"),
        meta: {
          title: "verify",
        },
      },
      {
        path: "/feature/code-editor",
        name: "CodeEditor",
        component: () => import("@/views/feature/code-editor/index.vue"),
        meta: {
          title: "codeEditor",
        },
      },
      {
        path: "/feature/text-editor",
        name: "TextEditor",
        component: () => import("@/views/feature/text-editor/index.vue"),
        meta: {
          title: "textEditor",
        },
      },
      {
        path: "/feature/markdown-editor",
        name: "MarkdownEditor",
        component: () => import("@/views/feature/markdown-editor/index.vue"),
        meta: {
          title: "markdownEditor",
        },
      },
      {
        path: "/feature/json-editor",
        name: "JsonEditor",
        component: () => import("@/views/feature/json-editor/index.vue"),
        meta: {
          title: "jsonEditor",
        },
      },
      {
        path: "/feature/image-clipper",
        name: "ImageClipper",
        component: () => import("@/views/feature/image-clipper/index.vue"),
        meta: {
          title: "imageClipper",
        },
      },
      {
        path: "/feature/audio",
        name: "Audio",
        component: () => import("@/views/feature/audio/index.vue"),
        meta: {
          title: "audio",
        },
      },
      {
        path: "/feature/video",
        name: "Video",
        component: () => import("@/views/feature/video/index.vue"),
        meta: {
          title: "video",
        },
      },
      {
        path: "/feature/print",
        name: "Print",
        component: () => import("@/views/feature/print/index.vue"),
        meta: {
          title: "print",
        },
      },
      {
        path: "/feature/draggable",
        name: "Draggable",
        component: () => import("@/views/feature/draggable/index.vue"),
        meta: {
          title: "draggable",
        },
      },
      {
        path: "/feature/word-preview",
        name: "WordPreview",
        component: () => import("@/views/feature/word-preview/index.vue"),
        meta: {
          title: "wordPreview",
        },
      },
      {
        path: "/feature/excel-preview",
        name: "ExcelPreview",
        component: () => import("@/views/feature/excel-preview/index.vue"),
        meta: {
          title: "excelPreview",
        },
      },
      {
        path: "/feature/pdf-preview",
        name: "PdfPreview",
        component: () => import("@/views/feature/pdf-preview/index.vue"),
        meta: {
          title: "pdfPreview",
        },
      },
      {
        path: "/feature/pdf-preview-iframe",
        name: "PdfPreviewIframe",
        component: () => import("@/views/feature/pdf-preview-iframe/index.vue"),
        meta: {
          title: "pdfPreviewIframe",
        },
      },
      {
        path: "/feature/excel-action",
        name: "ExcelAction",
        component: () => import("@/views/feature/excel-action/index.vue"),
        meta: {
          title: "excelAction",
        },
      },
      {
        path: "/feature/barcode",
        name: "Barcode",
        component: () => import("@/views/feature/barcode/index.vue"),
        meta: {
          title: "barcode",
        },
      },
      {
        path: "/feature/clipboard",
        name: "Clipboard",
        component: () => import("@/views/feature/clipboard/index.vue"),
        meta: {
          title: "clipboard",
        },
      },
      {
        path: "/feature/signature",
        name: "Signature",
        component: () => import("@/views/feature/signature/index.vue"),
        meta: {
          title: "signature",
        },
      },
      {
        path: "/feature/watermark",
        name: "WaterMark",
        component: () => import("@/views/feature/watermark/index.vue"),
        meta: {
          title: "watermark",
        },
      },
      {
        path: "/feature/flow-chart",
        name: "FlowChart",
        component: () => import("@/views/feature/flow-chart/index.vue"),
        meta: {
          title: "flowChart",
        },
      },
      {
        path: "/feature/polling",
        name: "Polling",
        component: () => import("@/views/feature/polling/index.vue"),
        meta: {
          title: "polling",
        },
      },
      {
        path: "/feature/debounce",
        name: "Debounce",
        component: () => import("@/views/feature/debounce/index.vue"),
        meta: {
          title: "debounce",
        },
      },
      {
        path: "/feature/sensitive",
        name: "Sensitive",
        component: () => import("@/views/feature/sensitive/index.vue"),
        meta: {
          title: "sensitive",
        },
      },
    ],
  },
];

export default featureRoutes;
