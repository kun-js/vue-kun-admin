import Mock from "mockjs";

export const accountList = Mock.mock({
  "accountList|100": [
    {
      "id|+1": 1,
      username: "@word(8)",
      name: "@cname",
      email: /\w{5,10}@\w{2,5}\.com/,
      tel: /1[3456789]\d{9}/,
      createTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
      "role|1": ["超级管理员", "管理员", "普通用户"],
      "department|1": ["技术部", "人事部", "财务部", "市场部", "销售部"],
      remark: "@csentence",
    },
  ],
});
