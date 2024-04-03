// <define:import.meta.env>
var define_import_meta_env_default = { BASE_URL: "/", MODE: "test", DEV: true, PROD: false };

// mock/dict.mock.ts
import path from "path";
import { createDefineMock } from "vite-plugin-mock-dev-server";
var defineMock = createDefineMock((mock) => {
  mock.url = path.join(define_import_meta_env_default.VITE_APP_BASE_API, mock.url);
});
var dict_mock_default = defineMock([
  {
    url: "/api/v1/dict/:code/options",
    method: ["GET"],
    body: ({ params }) => {
      const typeCode = params.code;
      let list = null;
      if (typeCode == "gender") {
        list = [
          {
            value: "1",
            label: "\u7537"
          },
          {
            value: "2",
            label: "\u5973"
          },
          {
            value: "0",
            label: "\u672A\u77E5"
          }
        ];
      }
      return {
        code: "00000",
        data: list,
        msg: "success"
      };
    }
  },
  {
    url: "/api/v1/dict/types/page",
    method: ["GET"],
    body: {
      code: "00000",
      data: {
        list: [
          {
            id: 1,
            name: "\u6027\u522B",
            code: "gender",
            status: 1
          },
          {
            id: 2,
            name: "\u72B6\u6001",
            code: "status",
            status: 1
          }
        ],
        total: 2
      },
      msg: "success"
    }
  },
  {
    url: "/api/v1/dict/page",
    method: ["GET"],
    body: {
      code: "00000",
      data: {
        list: [
          {
            id: 1,
            name: "\u7537",
            value: "1",
            status: 1
          },
          {
            id: 2,
            name: "\u5973",
            value: "2",
            status: 1
          },
          {
            id: 3,
            name: "\u672A\u77E5",
            value: "0",
            status: 1
          }
        ],
        total: 3
      },
      msg: "success"
    }
  }
]);
export {
  dict_mock_default as default
};
