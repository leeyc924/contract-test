import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom" 
import * as remotes from "../../api/remote";
import ListPage from ".";

describe("page test", () => {
  test("list 불러오기", async () => {
    const spyonGetList = jest.spyOn(remotes, "getList");
    render(<ListPage />);
    expect(spyonGetList).toHaveBeenCalled();
  });
});
