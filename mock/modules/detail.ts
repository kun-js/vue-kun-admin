import Mock from "mockjs";

export const detailList = Mock.mock({
  detailList: [
    {
      id: 1,
      username: "@cname",
      address: "@county(true)",
      tel: /^1[385][1-9]\d{8}/,
      orderId: "@string('number', 10)",
      "status|1": ["待发货", "已发货", "已完成"],
      createTime: "@datetime",
      effectiveTime: "@datetime ~ @datetime",
      remark: "@cparagraph",
    },
  ],
});
