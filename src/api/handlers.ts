import { rest } from "msw";

export const handlers = [
  rest.get("/list", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "0",
          title: "첫번째 계획",
          regDt: "2023-04-27T08:18:57.454Z",
          regId: "leeyc924",
          modDt: "2023-04-27T08:18:57.454Z",
          modId: "leeyc924",
        },
        {
          id: "1",
          title: "두번째 계획",
          regDt: "2023-04-27T08:18:57.454Z",
          regId: "leeyc924",
          modDt: "2023-04-27T08:18:57.454Z",
          modId: "leeyc924",
        },
        {
          id: "2",
          title: "세번째 계획",
          regDt: "2023-04-27T08:18:57.454Z",
          regId: "leeyc924",
          modDt: "2023-04-27T08:18:57.454Z",
          modId: "leeyc924",
        },
        {
          id: "3",
          title: "네번째 계획",
          regDt: "2023-04-27T08:18:57.454Z",
          regId: "leeyc924",
          modDt: "2023-04-27T08:18:57.454Z",
          modId: "leeyc924",
        },
        {
          id: "4",
          title: "다섯번째 계획",
          regDt: "2023-04-27T08:18:57.454Z",
          regId: "leeyc924",
          modDt: "2023-04-27T08:18:57.454Z",
          modId: "leeyc924",
        },
      ])
    );
  }),
];
