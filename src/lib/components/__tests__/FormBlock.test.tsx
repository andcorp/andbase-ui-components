/**
 * フォームブロックのテスト
 */

import { render, screen } from "@testing-library/react";
import { FormBlock, FormBlockItem } from "../FormBlock";

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

  it("grid指定が行えること", async () => {
    // レンダリング実行
    render(<FormBlock grid className="test_class" testId="form-block" />);

    const elements = (await screen.findAllByTestId("form-block"))[0];
    expect(elements.tagName).toStrictEqual("DIV");
    expect(elements).toHaveClass(
      "bl_formBlock",
      "bl_formBlock__grid",
      "test_class"
    );
  });
});

describe("FormBlockItemのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<FormBlockItem className="test_class" testId="form-block-item" />);

    const elements = (await screen.findAllByTestId("form-block-item"))[0];
    expect(elements.tagName).toStrictEqual("DIV");
    expect(elements).toHaveClass("bl_formBlock_item", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <FormBlockItem>
        <span data-testid="children">test</span>
      </FormBlockItem>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});
