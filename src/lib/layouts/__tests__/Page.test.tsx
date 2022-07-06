/**
 * ページ要素のテスト.
 */

import { render, screen } from "@testing-library/react";

import { Page } from "../Page";

describe("Pageのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<Page className="test_class" testId="page" />);

    const elements = (await screen.findAllByTestId("page"))[0];
    expect(elements).toHaveClass("ly_page", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <Page>
        <span data-testid="children">test</span>
      </Page>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});
