/**
 * フォームブロックのテスト
 */

import { render, screen } from "@testing-library/react";
import { FormBlock } from "../FormBlock";

describe("FormBlockのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<FormBlock className="test_class" testId="form-block" />);

    const elements = (await screen.findAllByTestId("form-block"))[0];
    expect(elements.tagName).toStrictEqual("DIV");
    expect(elements).toHaveClass("bl_formBlock", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <FormBlock>
        <span data-testid="children">test</span>
      </FormBlock>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});
