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
        name: "文件下载",
        component: () => import("@/views/feature/download/index.vue"),
        meta: {
          title: "download",
        },
      },
      {
        path: "/feature/verify",
        name: "验证码",
        component: () => import("@/views/feature/verify/index.vue"),
        meta: {
          title: "verify",
        },
      },
      {
        path: "/feature/code-editor",
        name: "代码编辑器",
        component: () => import("@/views/feature/code-editor/index.vue"),
        meta: {
          title: "codeEditor",
        },
      },
      {
        path: "/feature/text-editor",
        name: "文本编辑器",
        component: () => import("@/views/feature/text-editor/index.vue"),
        meta: {
          title: "textEditor",
        },
      },
      {
        path: "/feature/markdown-editor",
        name: "Markdown编辑器",
        component: () => import("@/views/feature/markdown-editor/index.vue"),
        meta: {
          title: "markdownEditor",
        },
      },
      {
        path: "/feature/image-clipper",
        name: "图片裁剪",
        component: () => import("@/views/feature/image-clipper/index.vue"),
        meta: {
          title: "imageClipper",
        },
      },
      {
        path: "/feature/audio",
        name: "音频可视化",
        component: () => import("@/views/feature/audio/index.vue"),
        meta: {
          title: "audio",
        },
      },
      {
        path: "/feature/video",
        name: "视频播放器",
        component: () => import("@/views/feature/video/index.vue"),
        meta: {
          title: "video",
        },
      },
      {
        path: "/feature/print",
        name: "打印",
        component: () => import("@/views/feature/print/index.vue"),
        meta: {
          title: "print",
        },
      },
      {
        path: "/feature/drag",
        name: "拖拽",
        component: () => import("@/views/feature/draggable/index.vue"),
        meta: {
          title: "drag",
        },
      },
      {
        path: "/feature/pdf",
        name: "PDF预览",
        component: () => import("@/views/feature/pdf/index.vue"),
        meta: {
          title: "pdf",
        },
      },
      {
        path: "/feature/barcode",
        name: "条形码",
        component: () => import("@/views/feature/barcode/index.vue"),
        meta: {
          title: "barcode",
        },
      },
      {
        path: "/feature/excel",
        name: "excel",
        component: () => import("@/views/feature/excel/index.vue"),
        meta: {
          title: "excel",
        },
      },
      {
        path: "/feature/clipboard",
        name: "剪贴板",
        component: () => import("@/views/feature/clipboard/index.vue"),
        meta: {
          title: "clipboard",
        },
      },
      {
        path: "/feature/watermark",
        name: "水印",
        component: () => import("@/views/feature/watermark/index.vue"),
        meta: {
          title: "watermark",
        },
      },
      {
        path: "/feature/debounce",
        name: "防抖节流",
        component: () => import("@/views/feature/debounce/index.vue"),
        meta: {
          title: "debounce",
        },
      },
      {
        path: "/feature/sensitive",
        name: "敏感词过滤",
        component: () => import("@/views/feature/sensitive/index.vue"),
        meta: {
          title: "sensitive",
        },
      },
    ],
  },
];

export default featureRoutes;
