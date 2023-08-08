import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "../../App";
import * as remotes from "../../api/remote";

afterAll(() => {
  jest.clearAllMocks();
});

describe("page test", () => {
  test("list 불러오기", async () => {
    const spyonGetList = jest.spyOn(remotes, "getList");
    render(
      <MemoryRouter initialEntries={["list"]}>
        <App />
      </MemoryRouter>
    );
    expect(spyonGetList).toHaveBeenCalled();
  });
});
