/**
 * フッター要素のテスト.
 */

import { render, screen } from "@testing-library/react";

import { Footer } from "../Footer";

describe("Footerのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<Footer className="test_class" testId="footer" />);

    const elements = (await screen.findAllByTestId("footer"))[0];
    expect(elements).toHaveClass("ly_footer", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <Footer>
        <span data-testid="children">test</span>
      </Footer>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});
