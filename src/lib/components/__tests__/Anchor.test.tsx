/**
 * アンカー要素のテスト
 */

import { render, screen } from "@testing-library/react";
import { Anchor } from "../Anchor";

describe("Anchorのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<Anchor className="test_class" testId="header" />);

    const elements = (await screen.findAllByTestId("header"))[0];
    expect(elements).toHaveClass("el_anchor", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <Anchor>
        <span data-testid="children">test</span>
      </Anchor>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});
