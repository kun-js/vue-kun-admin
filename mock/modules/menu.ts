import Mock from "mockjs";

export const menuList = Mock.mock({
  menuList: [
    {
      name: "dashboard",
      title: "首页",
      path: "/dashboard",
      icon: "noto:house",
      meta: {
        permission: ["admin", "user"],
      },
      children: [
        {
          name: "analysis",
          title: "分析页",
          path: "/analysis",
        },
        {
          name: "workbench",
          title: "工作台",
          path: "/workbench",
        },
      ],
    },
    {
      name: "permission",
      title: "权限管理",
      path: "/permission",
      icon: "noto:locked-with-key",
      meta: {
        permission: ["admin", "user"],
      },
      children: [
        {
          name: "buttonPermission",
          title: "按钮权限",
          path: "/button-permission",
        },
        {
          name: "pagePermission",
          title: "页面权限",
          path: "/page-permission",
        },
      ],
    },
    {
      name: "component",
      title: "组件",
      path: "/component",
      icon: "noto:closed-book",
      meta: {
        permission: ["admin", "user"],
      },
      children: [
        {
          name: "button",
          title: "按钮",
          path: "/button",
        },
        {
          name: "tag",
          title: "标签",
          path: "/tag",
        },
        {
          name: "colorPicker",
          title: "取色器",
          path: "/color-picker",
        },
        {
          name: "datePicker",
          title: "日期选择器",
          path: "/date-picker",
        },
        {
          name: "description",
          title: "描述列表",
          path: "/description",
        },
        {
          name: "message",
          title: "消息提示",
          path: "/message",
        },
        {
          name: "scroll",
          title: "滚动组件",
          path: "/scroll",
          children: [
            {
              name: "basicScroll",
              title: "基础滚动",
              path: "/basic",
            },
            {
              name: "functionScroll",
              title: "滚动方法",
              path: "/function",
            },
          ],
        },
        {
          name: "statistic",
          title: "统计组件",
          path: "/statistic",
        },
        {
          name: "menuTree",
          title: "树形菜单",
          path: "/menu-tree",
        },
        {
          name: "timestamp",
          title: "相对时间",
          path: "/timestamp",
        },
        {
          name: "passwordStrength",
          title: "密码强度",
          path: "/password-strength",
        },
      ],
    },
    {
      name: "feature",
      title: "功能",
      path: "/feature",
      icon: "noto:dna",
      meta: {
        permission: ["admin", "user"],
      },
      children: [
        {
          name: "download",
          title: "文件下载",
          path: "/download",
        },
        {
          name: "verify",
          title: "验证码",
          path: "/verify",
        },
        {
          name: "codeEditor",
          title: "代码编辑器",
          path: "/code-editor",
        },
        {
          name: "textEditor",
          title: "文本编辑器",
          path: "/text-editor",
        },
        {
          name: "markdownEditor",
          title: "Markdown编辑器",
          path: "/markdown-editor",
        },
        {
          name: "jsonEditor",
          title: "Json编辑器",
          path: "/json-editor",
        },
        {
          name: "imageClipper",
          title: "图片裁剪",
          path: "/image-clipper",
        },
        {
          name: "audio",
          title: "音频可视化",
          path: "/audio",
        },
        {
          name: "video",
          title: "视频播放器",
          path: "/video",
        },
        {
          name: "print",
          title: "打印",
          path: "/print",
        },
        {
          name: "draggable",
          title: "拖拽",
          path: "/draggable",
        },
        {
          name: "wordPreview",
          title: "Word预览",
          path: "/word-preview",
        },
        {
          name: "excelPreview",
          title: "Excel预览",
          path: "/excel-preview",
        },
        {
          name: "pdfPreview",
          title: "PDF预览",
          path: "/pdf-preview",
        },
        {
          name: "pdfPreviewIframe",
          title: "PDF预览Iframe版",
          path: "/pdf-preview-iframe",
        },
        {
          name: "excelAction",
          title: "Excel操作",
          path: "/excel-action",
        },
        {
          name: "barcode",
          title: "条码",
          path: "/barcode",
        },
        {
          name: "clipboard",
          title: "剪贴板",
          path: "/clipboard",
        },
        {
          name: "signature",
          title: "签名",
          path: "/signature",
        },
        {
          name: "watermark",
          title: "水印",
          path: "/watermark",
        },
        {
          name: "flowChart",
          title: "流程图",
          path: "/flow-chart",
        },
        {
          name: "polling",
          title: "轮询",
          path: "/polling",
        },
        {
          name: "debounce",
          title: "防抖节流",
          path: "/debounce",
        },
        {
          name: "sensitive",
          title: "敏感词过滤",
          path: "/sensitive",
        },
      ],
    },
    {
      name: "page",
      title: "页面",
      path: "/page",
      icon: "noto:framed-picture",
      meta: {
        permission: ["admin"],
      },
      children: [
        {
          name: "form",
          title: "表单页",
          path: "/form",
          children: [
            {
              name: "basicForm",
              title: "基础表单",
              path: "/basic",
            },
            {
              name: "stepForm",
              title: "分布表单",
              path: "/step",
            },
          ],
        },
        {
          name: "list",
          title: "列表页",
          path: "/list",
          children: [
            {
              name: "basicList",
              title: "基础列表",
              path: "/basic",
            },
            {
              name: "cardList",
              title: "卡片列表",
              path: "/card",
            },
          ],
        },
        {
          name: "detail",
          title: "详情页",
          path: "/detail",
        },
        {
          name: "result",
          title: "结果页",
          path: "/result",
          children: [
            {
              name: "success",
              title: "成功页",
              path: "/success",
            },
            {
              name: "fail",
              title: "失败页",
              path: "/fail",
            },
          ],
        },
        {
          name: "exception",
          title: "异常页",
          path: "/exception",
          children: [
            {
              name: "page404",
              title: "404",
              path: "/404",
            },
            {
              name: "page403",
              title: "403",
              path: "/403",
            },
            {
              name: "page500",
              title: "500",
              path: "/500",
            },
            {
              name: "noData",
              title: "无数据",
              path: "/no-data",
            },
            {
              name: "networkError",
              title: "网络错误",
              path: "/network-error",
            },
          ],
        },
      ],
    },
    {
      name: "chart",
      title: "图表",
      path: "/chart",
      icon: "emojione:bar-chart",
      meta: {
        permission: ["admin"],
      },
      children: [
        {
          name: "AMap",
          title: "高德地图",
          path: "/amap",
        },
        {
          name: "BMap",
          title: "百度地图",
          path: "/bmap",
        },
        {
          name: "TMap",
          title: "腾讯地图",
          path: "/tmap",
        },
        {
          name: "barChart",
          title: "柱状图",
          path: "/bar-chart",
        },
        {
          name: "lineChart",
          title: "折线图",
          path: "/line-chart",
        },
        {
          name: "pieChart",
          title: "饼图",
          path: "/pie-chart",
          children: [
            {
              name: "basicPieChart",
              title: "基础饼图",
              path: "/basic",
            },
            {
              name: "doughnutChart",
              title: "环形饼图",
              path: "/doughnut",
            },
          ],
        },
      ],
    },
    {
      name: "externalPage",
      title: "外部页面",
      path: "/external-page",
      icon: "fluent-emoji-flat:desktop-computer",
      meta: {
        permission: ["admin"],
      },
      children: [
        {
          name: "iframe",
          title: "文档内嵌",
          path: "/iframe",
          children: [
            {
              name: "element",
              title: "element",
              path: "/element",
            },
            {
              name: "vue",
              title: "vue",
              path: "/vue",
            },
          ],
        },
        {
          name: "outerChain",
          title: "文档外链",
          path: "/outerchain",
          children: [
            {
              name: "element",
              title: "element",
              path: "/element",
            },
            {
              name: "vue",
              title: "vue",
              path: "/vue",
            },
            {
              name: "baidu",
              title: "baidu",
              path: "/baidu",
            },
          ],
        },
      ],
    },
    {
      name: "system",
      title: "系统管理",
      path: "/system",
      icon: "noto-v1:gear",
      meta: {
        permission: ["admin"],
      },
      children: [
        {
          name: "account",
          title: "账号管理",
          path: "/account",
        },
        {
          name: "role",
          title: "角色管理",
          path: "/role",
        },
      ],
    },
    {
      name: "about",
      title: "关于",
      path: "/about",
      icon: "streamline-emojis:smiling-face-with-sunglasses",
      meta: {
        permission: ["admin", "user"],
      },
      children: [
        {
          name: "me",
          title: "关于我们",
          path: "/me",
        },
        {
          name: "skill",
          title: "开发依赖",
          path: "/skill",
        },
      ],
    },
  ],
});
