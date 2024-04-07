import Mock from "mockjs";

export const messageList = Mock.mock({
  "noticeList|6-8": [
    {
      "id|+1": 100,
      title: "@ctitle(5, 8)",
      time: '@datetime("yyyy-MM-dd")',
      icon: '@image("30x30","#409eff", "Icon")',
    },
  ],
  "messageList|4-6": [
    {
      "id|+1": 200,
      avatar: '@image("30x30", "#4A7BF7", "Avatar")',
      username: "@cname",
      "type|1": ["回复", "评论"],
      content: "@cparagraph(1,3)",
      time: '@datetime("yyyy-MM-dd HH:mm:ss")',
    },
  ],
  "todoList|3-5": [
    {
      "id|+1": 300,
      title: "@ctitle(3, 6)",
      description: "@cparagraph(1)",
      "status|1": ["未开始", "进行中", "即将截止", "已逾期"],
    },
  ],
});
