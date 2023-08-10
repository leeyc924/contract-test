import path from "path";
import {
  PactV3,
  MatchersV3,
  SpecificationVersion,
} from "@pact-foundation/pact";
import axios from "axios";
const { eachLike, like, string } = MatchersV3;

const provider = new PactV3({
  consumer: "consumer",
  provider: "provider",
  logLevel: "warn",
  dir: path.resolve(process.cwd(), "pacts"),
  spec: SpecificationVersion.SPECIFICATION_VERSION_V3,
});

describe("get list", () => {
  it("list", async () => {
    // set up Pact interactions
    await provider.addInteraction({
      states: [{ description: "i want list" }],
      uponReceiving: "get list",
      withRequest: {
        method: "GET",
        path: "/list",
      },
      willRespondWith: {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: eachLike({
          id: string("0"),
          title: string("첫번째 계획"),
          regDt: string("2023-04-27T08:18:57.454Z"),
          regId: string("leeyc924"),
          modDt: string("2023-04-27T08:18:57.454Z"),
          modId: string("leeyc924"),
        }),
      },
    });

    await provider.executeTest(async (mockService) => {
      const url = mockService.url ?? "";
      const res = await axios.get(url + "/list");

      expect(res.data).toStrictEqual([
        {
          id: "0",
          title: "첫번째 계획",
          regDt: "2023-04-27T08:18:57.454Z",
          regId: "leeyc924",
          modDt: "2023-04-27T08:18:57.454Z",
          modId: "leeyc924",
        },
      ]);
    });
  });
});
