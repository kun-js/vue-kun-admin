import Mock from "mockjs";

export const roleList = Mock.mock({
  roleList: [
    {
      id: 1,
      role: "超级管理员",
      roleValue: "superAdmin",
      status: true,
      createTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
      remark: "@csentence",
    },
    {
      id: 2,
      role: "管理员",
      roleValue: "admin",
      status: true,
      createTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
      remark: "@csentence",
    },
    {
      id: 3,
      role: "普通用户",
      roleValue: "user",
      status: true,
      createTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
      remark: "@csentence",
    },
    {
      id: 4,
      role: "访客",
      roleValue: "visitor",
      status: false,
      createTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
      remark: "@csentence",
    },
  ],
});
