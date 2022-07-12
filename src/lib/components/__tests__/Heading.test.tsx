/**
 * 見出し要素のテスト
 */

import { render, screen } from "@testing-library/react";
import { Heading, HeadingLevel } from "../Heading";

describe("Headingのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(
      <Heading
        level={1}
        id="test-header-id"
        className="test_class"
        testId="heading"
      />
    );

    const elements = (await screen.findAllByTestId("heading"))[0];
    expect(elements.tagName).toStrictEqual("H1");
    expect(elements).toHaveAttribute("id", "test-header-id");
    expect(elements).toHaveClass("el_heading", "el_heading__h1", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <Heading level={1}>
        <span data-testid="children">test</span>
      </Heading>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });

  it("見出しレベル指定が行えること", async () => {
    // 初回レンダリング
    const { rerender } = render(<></>);

    for (let i = 1; i <= 6; ++i) {
      // レンダリング実行
      rerender(
        <Heading
          level={i as HeadingLevel}
          className="test_class"
          testId="heading"
        />
      );

      // 指定レベルの見出しになっているかチェック
      const elements = (await screen.findAllByTestId("heading"))[0];
      expect(elements.tagName).toStrictEqual(`H${i}`);
      expect(elements).toHaveClass("el_heading", `el_heading__h${i}`);
    }
  });
});
