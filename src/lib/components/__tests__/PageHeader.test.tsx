/**
 * ページヘッダー要素のテスト.
 */

import { render } from "@testing-library/react";

import { PageHeader, PageHeaderItem } from "../PageHeader";

describe("PageHeaderのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    const { findAllByTestId } = render(
      <PageHeader className="test_class" testId="header" />
    );

    const elements = (await findAllByTestId("header"))[0];
    expect(elements).toHaveClass("bl_pageHeader", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    const { findAllByTestId } = render(
      <PageHeader>
        <span data-testid="children">test</span>
      </PageHeader>
    );

    const elements = (await findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});

describe("PageHeaderItemのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    const { findAllByTestId } = render(
      <PageHeaderItem className="test_class" testId="header" />
    );

    const elements = (await findAllByTestId("header"))[0];
    expect(elements).toHaveClass("bl_pageHeader_item", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    const { findAllByTestId } = render(
      <PageHeaderItem>
        <span data-testid="children">test</span>
      </PageHeaderItem>
    );

    const elements = (await findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});