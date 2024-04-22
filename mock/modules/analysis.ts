import Mock from "mockjs";
import dayjs from "dayjs";

// 获取中文星期几的函数
const getChineseWeekday = (date: dayjs.Dayjs): string => {
  const chineseWeekday = ["日", "一", "二", "三", "四", "五", "六"]; // 中文星期几的数组
  const dayIndex = date.day(); // 获取星期几的索引
  return `星期${chineseWeekday[dayIndex]}`; // 返回中文星期几
};

// 生成前14天的数据
const updateList = (): { id: number; content: string; time: string }[] => {
  const data: { id: number; content: string; time: string }[] = [];
  let currentDate: dayjs.Dayjs = dayjs().startOf("day"); // 当天开始
  let newIssues = 0; // 新增问题数量
  let solvedIssues = 0; // 已解决问题数量
  for (let i = 0; i < 14; i++) {
    const dataTime = `${currentDate.format("YYYY-MM-DD")} ${getChineseWeekday(currentDate)}`; // 时间和星期拼接在一起
    // 随机生成新增问题数量和已解决问题数量
    newIssues = Math.floor(Math.random() * 10000); // 随机生成0到99之间的数字
    solvedIssues = Math.floor(Math.random() * newIssues); // 已解决问题数量不能超过新增问题数量
    const content = `新增${newIssues}条问题，已解决${solvedIssues}条问题`;
    data.push({
      id: 1 + i,
      content: content, // 生成随机内容
      time: dataTime, // 时间和星期的拼接结果
    });
    currentDate = currentDate.subtract(1, "day"); // 向前推一天
  }
  return data;
};

// 生成模拟数据列表
const DataList = (): {
  id: number;
  demand: number;
  issuesRaised: number;
  issuesResolved: number;
  satisfactionRate: string;
  date: string;
  icon: string;
}[] => {
  const dataList: {
    id: number;
    demand: number;
    issuesRaised: number;
    issuesResolved: number;
    satisfactionRate: string;
    date: string;
    icon: string;
  }[] = [];
  let currentDate: dayjs.Dayjs = dayjs().subtract(29, "day"); // 从今天开始往前30天
  for (let i = 0; i < 30; i++) {
    const demand = Math.floor(Math.random() * 10000); // 随机生成需求人数
    const issuesRaised = Math.floor(Math.random() * 10000); // 随机生成提出问题数量
    const issuesResolved = Math.floor(Math.random() * issuesRaised); // 随机生成解决问题数量，不能超过提出问题数量
    const satisfactionRate = `${Math.floor(Math.random() * 10) + 90}%`; // 随机生成用户满意度百分比（大于90%）
    const date = currentDate.format("YYYY-MM-DD"); // 统计日期
    const icon = satisfactionRate >= "97%" ? "noto:red-heart" : "noto:thumbs-up"; // 根据满意度设置图标
    dataList.push({
      id: i + 1,
      demand: demand,
      issuesRaised: issuesRaised,
      issuesResolved: issuesResolved,
      satisfactionRate: satisfactionRate,
      date: date,
      icon: icon,
    });
    currentDate = currentDate.add(1, "day"); // 向后推一天
  }
  return dataList;
};

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
  updateList: updateList,
  dataList: DataList,
});
