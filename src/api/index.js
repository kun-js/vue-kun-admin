import axios from "axios";

const Api = {
  loginInfo: "/api/login",
  analysisCardInfo: "/api/analysisCardList",
  MenuInfo: "/api/menuList",
};

export const getLoginInfo = async (username, password) => {
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
