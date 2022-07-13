/**
 * メッセージコンポーネントのテスト
 */

import { render, screen } from "@testing-library/react";
import { Message } from "../Message";

describe("Messageのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<Message className="test_class" testId="message" />);

    const elements = (await screen.findAllByTestId("message"))[0];
    expect(elements).toHaveClass("bl_message", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <Message>
        <span data-testid="children">test</span>
      </Message>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });

  it("テーマカラー指定が行えること", async () => {
    // レンダリング実行
    render(
      <Message className="test_class" testId="message" themeColor="recommend" />
    );

    const elements = (await screen.findAllByTestId("message"))[0];
    expect(elements).toHaveClass(
      "bl_message",
      "bl_message__recommend",
      "test_class"
    );
  });
});
