import { analysisCardList } from "./modules/analysis";

export default [
  {
    url: "/api/analysisCardList",
    method: "get",
    response: () => {
      return analysisCardList;
    },
  },
];
