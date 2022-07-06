/**
 * ヘッダー要素のテスト.
 */

import { render, screen } from "@testing-library/react";

import { Header } from "../Header";

describe("Headerのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<Header className="test_class" testId="header" />);

    const elements = (await screen.findAllByTestId("header"))[0];
    expect(elements).toHaveClass("ly_header", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <Header>
        <span data-testid="children">test</span>
      </Header>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});
