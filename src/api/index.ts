import axios from "axios";

const Api = {
  loginInfo: "/api/login",
  analysisCardInfo: "/api/analysisCardList",
  MenuInfo: "/api/menuList",
  userList: "/api/userList",
  detailList: "/api/detailList",
  messageList: "/api/messageList",
  accountList: "/api/accountList",
  roleList: "/api/roleList",
};

export const getLoginInfo = async (username: string, password: string) => {
  const { data } = await axios.post(Api.loginInfo);
  if (username === data.loginInfo.username && password === data.loginInfo.password) return data.loginInfo;
};

export const getMenuList = async () => {
  const { data } = await axios.get(Api.MenuInfo);
  return data.menuList;
};

export const getAnalysisCardList = async () => {
  const { data } = await axios.get(Api.analysisCardInfo);
  return data.analysisCardList;
};

export const getUserList = async () => {
  const { data } = await axios.get(Api.userList);
  return data;
};

export const getDetailList = async () => {
  const { data } = await axios.get(Api.detailList);
  return data.detailList;
};

export const getMessageList = async () => {
  const { data } = await axios.get(Api.messageList);
  return data;
};

export const getAccountList = async (page: number = 1, pageSize: number = 10, keyword: string = "") => {
  const { data } = await axios.get(Api.accountList, {
    params: {
      page,
      pageSize,
      keyword,
    },
  });

  let filteredData = data.accountList;
  if (typeof keyword === "string" && keyword.trim() !== "") {
    filteredData = filteredData.filter((account) => account.name.includes(keyword.trim()));
  }

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const slicedData = filteredData.slice(start, end);
  const total = filteredData.length;
  return {
    accountList: slicedData,
    total: total,
  };
};

export const getRoleList = async () => {
  const { data } = await axios.get(Api.roleList);
  return data.roleList;
};
