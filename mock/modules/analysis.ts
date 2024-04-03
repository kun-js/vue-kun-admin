import Mock from "mockjs";

export const analysisCardList = Mock.mock({
  analysisCardList: [
    {
      id: 1,
      title: "访问量",
      time: "月",
      text: "2000",
      iconType: "1",
      total: "总访问量",
      number: "100000",
    },
    {
      id: 2,
      title: "下载量",
      time: "周",
      text: "800",
      iconType: "2",
      total: "总下载量",
      number: "4000",
    },
    {
      id: 3,
      title: "成交额",
      time: "月",
      text: "$20000",
      iconType: "3",
      total: "总成交额",
      number: "$1000000",
    },
    {
      id: 4,
      title: "成交数",
      time: "年",
      text: "5000",
      iconType: "4",
      total: "总成交数",
      number: "600000",
    },
  ],
});
