import Mock from "mockjs";

export const menuList = Mock.mock({
  menuList: [
    {
      name: "dashboard",
      title: "首页",
      path: "/dashboard",
      icon: "Menu",
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
      name: "feature",
      title: "功能",
      path: "/feature",
      icon: "SetUp",
      children: [
        {
          name: "download",
          title: "文件下载",
          path: "/download",
        },
        {
          name: "codeeditor",
          title: "代码编辑器",
          path: "/codeeditor",
        },
        {
          name: "print",
          title: "打印",
          path: "/print",
        },
        {
          name: "pdf",
          title: "PDF预览",
          path: "/pdf",
        },
        {
          name: "excel",
          title: "Excel导入/导出",
          path: "/excel",
        },
        {
          name: "clipboard",
          title: "剪贴板",
          path: "/clipboard",
        },
        {
          name: "watermark",
          title: "水印",
          path: "/watermark",
        },
      ],
    },
    {
      name: "page",
      title: "页面",
      path: "/page",
      icon: "Picture",
      children: [
        {
          name: "form",
          title: "表单页",
          path: "/form",
        },
        {
          name: "list",
          title: "列表页",
          path: "/list",
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
        },
        {
          name: "exception",
          title: "异常页",
          path: "/exception",
        },
      ],
    },
    {
      name: "chart",
      title: "图表",
      path: "/chart",
      icon: "PieChart",
      children: [
        {
          name: "gaodemap",
          title: "高德地图",
          path: "/gaodemap",
        },
        {
          name: "barchart",
          title: "柱状图",
          path: "/barchart",
        },
        {
          name: "linechart",
          title: "折线图",
          path: "/linechart",
        },
        {
          name: "piechart",
          title: "饼图",
          path: "/piechart",
        },
      ],
    },
    {
      name: "about",
      title: "关于",
      path: "/about",
      icon: "User",
      children: [
        {
          name: "me",
          title: "关于我们",
          path: "/me",
        },
        {
          name: "skill",
          title: "技术栈",
          path: "/skill",
        },
      ],
    },
  ],
});
