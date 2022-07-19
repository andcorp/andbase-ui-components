/**
 * ラベルコンポーネントのテスト
 */

import { render, screen } from "@testing-library/react";
import { Label } from "../Label";

describe("Labelのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<Label className="test_class" testId="label" />);

    const elements = (await screen.findAllByTestId("label"))[0];
    expect(elements.tagName).toBe("LABEL");
    expect(elements).toHaveClass("el_label", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <Label>
        <span data-testid="children">test</span>
      </Label>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });

  it("htmlFor指定が行えること", async () => {
    // レンダリング実行
    render(<Label testId="label" htmlFor="test-for" />);

    const elements = (await screen.findAllByTestId("label"))[0];
    expect(elements.tagName).toBe("LABEL");
    expect(elements).toHaveAttribute("for", "test-for");
  });
});
