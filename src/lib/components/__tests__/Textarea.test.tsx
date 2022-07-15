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

  it("placeholder指定が行えること", async () => {
    // レンダリング実行
    render(
      <TextArea
        className="test_class"
        placeholder="テスト入力"
        testId="textArea"
      />
    );

    const elements = (
      await screen.findAllByTestId("textArea")
    )[0] as HTMLTextAreaElement;
    expect(elements).toHaveClass("el_textarea", "test_class");
    expect(elements.placeholder).toBe("テスト入力");
  });

  it("autoComplete指定が行えること", async () => {
    // レンダリング実行
    render(
      <TextArea className="test_class" autoComplete="name" testId="textArea" />
    );

    const elements = (
      await screen.findAllByTestId("textArea")
    )[0] as HTMLTextAreaElement;
    expect(elements).toHaveClass("el_textarea", "test_class");
    expect(elements.autocomplete).toBe("name");
  });

  it("id指定が行えること", async () => {
    // レンダリング実行
    render(
      <TextArea className="test_class" id="testInput" testId="textArea" />
    );

    const elements = (
      await screen.findAllByTestId("textArea")
    )[0] as HTMLTextAreaElement;
    expect(elements).toHaveClass("el_textarea", "test_class");
    expect(elements.id).toBe("testInput");
  });

  it("name指定が行えること", async () => {
    // レンダリング実行
    render(
      <TextArea className="test_class" name="testInput" testId="textArea" />
    );

    const elements = (
      await screen.findAllByTestId("textArea")
    )[0] as HTMLTextAreaElement;
    expect(elements).toHaveClass("el_textarea", "test_class");
    expect(elements.name).toBe("testInput");
  });

  it("minLength・maxLength指定が行えること", async () => {
    // レンダリング実行
    render(
      <TextArea
        className="test_class"
        minLength={1}
        maxLength={100}
        testId="textArea"
      />
    );

    const elements = (
      await screen.findAllByTestId("textArea")
    )[0] as HTMLTextAreaElement;
    expect(elements).toHaveClass("el_textarea", "test_class");
    expect(elements.minLength).toBe(1);
    expect(elements.maxLength).toBe(100);
  });

  it("cols・rows指定が行えること", async () => {
    // レンダリング実行
    render(
      <TextArea className="test_class" cols={10} rows={20} testId="textArea" />
    );

    const elements = (
      await screen.findAllByTestId("textArea")
    )[0] as HTMLTextAreaElement;
    expect(elements).toHaveClass("el_textarea", "test_class");
    expect(elements.cols).toBe(10);
    expect(elements.rows).toBe(20);
  });

  it("required指定が行えること", async () => {
    // レンダリング実行
    render(<TextArea className="test_class" required testId="textArea" />);

    const elements = (
      await screen.findAllByTestId("textArea")
    )[0] as HTMLTextAreaElement;
    expect(elements).toHaveClass("el_textarea", "test_class");
    expect(elements.required).toBeTruthy();
  });

  it("readOnly指定が行えること", async () => {
    // レンダリング実行
    render(<TextArea className="test_class" readOnly testId="textArea" />);

    const elements = (
      await screen.findAllByTestId("textArea")
    )[0] as HTMLTextAreaElement;
    expect(elements).toHaveClass("el_textarea", "test_class");
    expect(elements.readOnly).toBeTruthy();
  });

  it("disabled指定が行えること", async () => {
    // レンダリング実行
    render(<TextArea className="test_class" disabled testId="textArea" />);

    const elements = (
      await screen.findAllByTestId("textArea")
    )[0] as HTMLTextAreaElement;
    expect(elements).toHaveClass("el_textarea", "test_class");
    expect(elements.disabled).toBeTruthy();
  });

  it("value指定が行えること", async () => {
    // レンダリング実行
    render(
      <TextArea className="test_class" value="test-input" testId="textArea" />
    );

    const elements = (
      await screen.findAllByTestId("textArea")
    )[0] as HTMLTextAreaElement;
    expect(elements).toHaveClass("el_textarea", "test_class");
    expect(elements.value).toBe("test-input");
  });

  it("resize指定が行えること", async () => {
    // レンダリング実行
    render(
      <TextArea className="test_class" resize="vertical" testId="textArea" />
    );

    const elements = (
      await screen.findAllByTestId("textArea")
    )[0] as HTMLTextAreaElement;
    expect(elements).toHaveClass(
      "el_textarea",
      "el_textarea__resizeVertical",
      "test_class"
    );
  });
});
