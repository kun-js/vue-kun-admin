import { loginInfo } from "./modules/login";
import { menuList } from "./modules/menu";
import { analysisCardList } from "./modules/analysis";
import { userList } from "./modules/list";
import { detailList } from "./modules/detail";

export default [
  {
    url: "/api/login",
    method: "post",
    response: () => {
      return loginInfo;
    },
  },
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
  {
    url: "/api/userList",
    method: "get",
    response: () => {
      return userList;
    },
  },
  {
    url: "/api/detailList",
    method: "get",
    response: () => {
      return detailList;
    },
  },
];
