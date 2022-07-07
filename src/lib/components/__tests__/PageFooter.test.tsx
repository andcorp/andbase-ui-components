/**
 * ページフッター要素のテスト.
 */

import { render, screen } from "@testing-library/react";
import { PageFooter, PageFooterItem } from "../PageFooter";

describe("PageFooterのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<PageFooter className="test_class" testId="footer" />);

    const elements = (await screen.findAllByTestId("footer"))[0];
    expect(elements).toHaveClass("bl_pageFooter", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <PageFooter>
        <span data-testid="children">test</span>
      </PageFooter>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});

describe("PageFooterItemのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<PageFooterItem className="test_class" testId="footer" />);

    const elements = (await screen.findAllByTestId("footer"))[0];
    expect(elements).toHaveClass("bl_pageFooter_item", "test_class");
    expect(elements).not.toHaveClass("bl_pageFooter_item__grow");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <PageFooterItem>
        <span data-testid="children">test</span>
      </PageFooterItem>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });

  it("growが指定できること", async () => {
    // レンダリング実行
    render(
      <PageFooterItem grow testId="footer">
        <span>test</span>
      </PageFooterItem>
    );

    const elements = (await screen.findAllByTestId("footer"))[0];
    expect(elements).toHaveClass("bl_pageFooter_item__grow");
  });
});
