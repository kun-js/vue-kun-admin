import Mock from "mockjs";

export const menuList = Mock.mock({
  menuList: [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "Menu",
      children: [
        {
          name: "分析页",
          path: "/analysis",
        },
        {
          name: "工作台",
          path: "/workbench",
        },
      ],
    },
    {
      name: "功能",
      path: "/feature",
      icon: "SetUp",
      children: [
        {
          name: "文件下载",
          path: "/download",
        },
        {
          name: "剪贴板",
          path: "/clipboard",
        },
        {
          name: "水印",
          path: "/watermark",
        },
      ],
    },
    {
      name: "页面",
      path: "/page",
      icon: "Picture",
      children: [
        {
          name: "表单页",
          path: "/form",
        },
        {
          name: "列表页",
          path: "/list",
        },
        // {
        //     name: "详情页",
        //     path: "/detail",
        // },
        // {
        //     name: "结果页",
        //     path: "/result",
        // },
        // {
        //     name: "异常页",
        //     path: "/exception",
        // },
      ],
    },
    {
      name: "图表",
      path: "/chart",
      icon: "PieChart",
      children: [
        {
          name: "柱状图",
          path: "/barchart",
        },
        // {
        //     name: "折线图",
        //     path: "/linechart",
        // },
        // {
        //     name: "饼图",
        //     path: "/piechart",
        // },
      ],
    },
    {
      name: "关于",
      path: "/about",
      icon: "User",
      children: [
        {
          name: "关于我们",
          path: "/me",
        },
        // {
        //     name: "技术栈",
        //     path: "/skill",
        // },
      ],
    },
  ],
});
