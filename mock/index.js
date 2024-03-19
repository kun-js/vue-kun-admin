import { menuList } from "./modules/menu";
import { analysisCardList } from "./modules/analysis";

export default [
  {
    url: "/api/menuList",
    method: "get",
    response: () => {
      return menuList;
    },
  },
  {
    url: "/api/analysisCardList",
    method: "get",
    response: () => {
      return analysisCardList;
    },
  },
];
