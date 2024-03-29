import axios from "axios";

const Api = {
  loginInfo: "/api/login",
  analysisCardInfo: "/api/analysisCardList",
  MenuInfo: "/api/menuList",
  userList: "/api/userList",
  detailList: "/api/detailList",
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
  return data.userList;
};

export const getDetailList = async () => {
  const { data } = await axios.get(Api.detailList);
  return data.detailList;
};
