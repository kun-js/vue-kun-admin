import axios from "axios";

const Api = {
  analysisCardInfo: "/api/analysisCardList",
  MenuInfo: "/api/menuList",
};

export const getMenuList = async () => {
  const { data } = await axios.get(Api.MenuInfo);
  return data.menuList;
};

export const getAnalysisCardList = async () => {
  const { data } = await axios.get(Api.analysisCardInfo);
  return data.analysisCardList;
};
