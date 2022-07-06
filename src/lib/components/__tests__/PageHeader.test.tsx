/**
 * ページヘッダー要素のテスト.
 */

import { render, screen } from "@testing-library/react";

import { PageHeader, PageHeaderItem } from "../PageHeader";

describe("PageHeaderのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<PageHeader className="test_class" testId="header" />);

    const elements = (await screen.findAllByTestId("header"))[0];
    expect(elements).toHaveClass("bl_pageHeader", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <PageHeader>
        <span data-testid="children">test</span>
      </PageHeader>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});

describe("PageHeaderItemのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<PageHeaderItem className="test_class" testId="header" />);

    const elements = (await screen.findAllByTestId("header"))[0];
    expect(elements).toHaveClass("bl_pageHeader_item", "test_class");
    expect(elements).not.toHaveClass("bl_pageHeader_item__grow");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <PageHeaderItem>
        <span data-testid="children">test</span>
      </PageHeaderItem>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });

  it("growが指定できること", async () => {
    // レンダリング実行
    render(
      <PageHeaderItem grow testId="header">
        <span>test</span>
      </PageHeaderItem>
    );

    const elements = (await screen.findAllByTestId("header"))[0];
    expect(elements).toHaveClass("bl_pageHeader_item__grow");
  });
});
