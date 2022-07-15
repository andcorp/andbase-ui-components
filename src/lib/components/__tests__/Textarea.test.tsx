/**
 * Textarea要素のテスト
 */

import { render, screen } from "@testing-library/react";
import { TextArea } from "../Textarea";

describe("Textareaのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<TextArea className="test_class" testId="textArea" />);

    const elements = (
      await screen.findAllByTestId("textArea")
    )[0] as HTMLTextAreaElement;
    expect(elements).toHaveClass("el_textarea", "test_class");
  });
});
