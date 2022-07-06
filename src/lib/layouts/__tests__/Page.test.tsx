/**
 * ページ要素のテスト.
 */

import { render } from "@testing-library/react";

import { Page } from "../Page";

describe("Pageのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    const { findAllByTestId } = render(
      <Page className="test_class" testId="page" />
    );

    const elements = (await findAllByTestId("page"))[0];
    expect(elements).toHaveClass("ly_page", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    const { findAllByTestId } = render(
      <Page>
        <span data-testid="children">test</span>
      </Page>
    );

    const elements = (await findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});
