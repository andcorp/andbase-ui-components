/**
 * Input要素のテスト
 */

import { render, screen } from "@testing-library/react";
import { Input } from "../Input";

describe("Inputのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<Input className="test_class" testId="header" />);

    const elements = (await screen.findAllByTestId("header"))[0];
    expect(elements).toHaveClass("el_input", "test_class");
  });
});
