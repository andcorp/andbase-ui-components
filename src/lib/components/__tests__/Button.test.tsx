/**
 * ボタン要素のテスト
 */

import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Buttonのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<Button className="test_class" testId="header" />);

    const elements = (await screen.findAllByTestId("header"))[0];
    expect(elements.tagName).toStrictEqual("BUTTON");
    expect(elements).toHaveClass("el_button", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <Button>
        <span data-testid="children">test</span>
      </Button>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });

  it("テーマカラー指定が行えること", async () => {
    // レンダリング実行
    render(
      <Button className="test_class" testId="message" themeColor="recommend" />
    );

    const elements = (await screen.findAllByTestId("message"))[0];
    expect(elements).toHaveClass(
      "el_button",
      "el_button__recommend",
      "test_class"
    );
  });
});
