/**
 *  ラジオボタン要素のテスト
 */

import { render, screen } from "@testing-library/react";
import { Radio } from "../Radio";

describe("Radioのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<Radio className="test_class" testId="radio" />);

    const elements = (
      await screen.findAllByTestId("radio")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("radio");
    expect(elements).toHaveClass("el_radio", "test_class");
    expect(elements.checked).toBeFalsy();
  });

  it("id指定が行えること", async () => {
    // レンダリング実行
    render(<Radio className="test_class" id="testRadio" testId="radio" />);

    const elements = (
      await screen.findAllByTestId("radio")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("radio");
    expect(elements).toHaveClass("el_radio", "test_class");
    expect(elements.id).toBe("testRadio");
  });

  it("name指定が行えること", async () => {
    // レンダリング実行
    render(<Radio className="test_class" name="testRadio" testId="radio" />);

    const elements = (
      await screen.findAllByTestId("radio")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("radio");
    expect(elements).toHaveClass("el_radio", "test_class");
    expect(elements.name).toBe("testRadio");
  });

  it("required指定が行えること", async () => {
    // レンダリング実行
    render(<Radio className="test_class" required testId="radio" />);

    const elements = (
      await screen.findAllByTestId("radio")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("radio");
    expect(elements).toHaveClass("el_radio", "test_class");
    expect(elements.required).toBeTruthy();
  });

  it("readOnly指定が行えること", async () => {
    // レンダリング実行
    render(<Radio className="test_class" readOnly testId="radio" />);

    const elements = (
      await screen.findAllByTestId("radio")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("radio");
    expect(elements).toHaveClass("el_radio", "test_class");
    expect(elements.readOnly).toBeTruthy();
  });

  it("disabled指定が行えること", async () => {
    // レンダリング実行
    render(<Radio className="test_class" disabled testId="radio" />);

    const elements = (
      await screen.findAllByTestId("radio")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("radio");
    expect(elements).toHaveClass("el_radio", "test_class");
    expect(elements.disabled).toBeTruthy();
  });

  it("value指定が行えること", async () => {
    // レンダリング実行
    render(<Radio className="test_class" value="test-radio" testId="radio" />);

    const elements = (
      await screen.findAllByTestId("radio")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("radio");
    expect(elements).toHaveClass("el_radio", "test_class");
    expect(elements.value).toBe("test-radio");
  });

  it("defaultChecked指定が行えること", async () => {
    // レンダリング実行
    render(
      <Radio
        className="test_class"
        value="test-radio"
        defaultChecked
        testId="radio"
      />
    );

    const elements = (
      await screen.findAllByTestId("radio")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("radio");
    expect(elements).toHaveClass("el_radio", "test_class");
    expect(elements.value).toBe("test-radio");
    expect(elements.defaultChecked).toBeTruthy();
    expect(elements.checked).toBeTruthy();
  });

  it("checked指定が行えること", async () => {
    // レンダリング実行
    render(
      <Radio className="test_class" value="test-radio" checked testId="radio" />
    );

    const elements = (
      await screen.findAllByTestId("radio")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("radio");
    expect(elements).toHaveClass("el_radio", "test_class");
    expect(elements.value).toBe("test-radio");
    expect(elements.checked).toBeTruthy();
  });
});
