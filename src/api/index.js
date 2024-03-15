import axios from "axios";

const Api = {
  analysisCardInfo: "/api/analysisCardList",
};

export const getAnalysisCardList = async () => {
  const { data } = await axios.get(Api.analysisCardInfo);
  return data.analysisCardList;
};
