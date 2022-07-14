/**
 * ボタングループのテスト
 */

import { render, screen } from "@testing-library/react";
import { ButtonGroup } from "../ButtonGroup";

describe("ButtonGroupのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<ButtonGroup className="test_class" testId="header" />);

    const elements = (await screen.findAllByTestId("header"))[0];
    expect(elements.tagName).toStrictEqual("DIV");
    expect(elements).toHaveClass("bl_buttonGroup", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <ButtonGroup>
        <span data-testid="children">test</span>
      </ButtonGroup>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});
