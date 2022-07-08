/**
 * ページルート要素のテスト.
 */

import { render, screen } from "@testing-library/react";

import { PageRoot } from "../PageRoot";

describe("PageRootのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<PageRoot className="test_class" testId="pageRoot" />);

    const elements = (await screen.findAllByTestId("pageRoot"))[0];
    expect(elements).toHaveClass("ly_pageRoot", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <PageRoot>
        <span data-testid="children">test</span>
      </PageRoot>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});
