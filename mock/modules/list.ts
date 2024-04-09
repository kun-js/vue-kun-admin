import Mock from "mockjs";

export const userList = Mock.mock({
  "userList|10": [
    {
      "id|+1": 100,
      name: "@cname",
      gender: '@cword("男女")',
      age: () => Mock.Random.integer(1, 100),
      email: "@email",
      tel: /^1[3-9]\d{9}$/,
      address: "@county(true)",
    },
  ],
  "cardList|12": [
    {
      "id|+1": 200,
      icon: '@image("30x30","#409eff", "Icon")',
      title: "@ctitle(3, 6)",
      content: "@cparagraph(3)",
    },
  ],
});
