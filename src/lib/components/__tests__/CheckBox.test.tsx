/**
 * チェックボックス要素のテスト
 */
import { render, screen } from "@testing-library/react";
import { CheckBox } from "../CheckBox";

describe("CheckBoxのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<CheckBox className="test_class" testId="chechBox" />);

    const elements = (
      await screen.findAllByTestId("chechBox")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("checkbox");
    expect(elements).toHaveClass("el_checkBox", "test_class");
    expect(elements.checked).toBeFalsy();
  });

  it("id指定が行えること", async () => {
    // レンダリング実行
    render(
      <CheckBox className="test_class" id="testCheckBox" testId="checkBox" />
    );

    const elements = (
      await screen.findAllByTestId("checkBox")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("checkbox");
    expect(elements).toHaveClass("el_checkBox", "test_class");
    expect(elements.id).toBe("testCheckBox");
  });

  it("name指定が行えること", async () => {
    // レンダリング実行
    render(
      <CheckBox className="test_class" name="testCheckBox" testId="checkBox" />
    );

    const elements = (
      await screen.findAllByTestId("checkBox")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("checkbox");
    expect(elements).toHaveClass("el_checkBox", "test_class");
    expect(elements.name).toBe("testCheckBox");
  });

  it("required指定が行えること", async () => {
    // レンダリング実行
    render(<CheckBox className="test_class" required testId="checkBox" />);

    const elements = (
      await screen.findAllByTestId("checkBox")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("checkbox");
    expect(elements).toHaveClass("el_checkBox", "test_class");
    expect(elements.required).toBeTruthy();
  });

  it("readOnly指定が行えること", async () => {
    // レンダリング実行
    render(<CheckBox className="test_class" readOnly testId="checkBox" />);

    const elements = (
      await screen.findAllByTestId("checkBox")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("checkbox");
    expect(elements).toHaveClass("el_checkBox", "test_class");
    expect(elements.readOnly).toBeTruthy();
  });

  it("disabled指定が行えること", async () => {
    // レンダリング実行
    render(<CheckBox className="test_class" disabled testId="checkBox" />);

    const elements = (
      await screen.findAllByTestId("checkBox")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("checkbox");
    expect(elements).toHaveClass("el_checkBox", "test_class");
    expect(elements.disabled).toBeTruthy();
  });

  it("value指定が行えること", async () => {
    // レンダリング実行
    render(
      <CheckBox
        className="test_class"
        value="test-checkBox"
        testId="checkBox"
      />
    );

    const elements = (
      await screen.findAllByTestId("checkBox")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("checkbox");
    expect(elements).toHaveClass("el_checkBox", "test_class");
    expect(elements.value).toBe("test-checkBox");
  });

  it("defaultChecked指定が行えること", async () => {
    // レンダリング実行
    render(
      <CheckBox
        className="test_class"
        value="test-checkBox"
        defaultChecked
        testId="checkBox"
      />
    );

    const elements = (
      await screen.findAllByTestId("checkBox")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("checkbox");
    expect(elements).toHaveClass("el_checkBox", "test_class");
    expect(elements.value).toBe("test-checkBox");
    expect(elements.defaultChecked).toBeTruthy();
    expect(elements.checked).toBeTruthy();
  });

  it("checked指定が行えること", async () => {
    // レンダリング実行
    render(
      <CheckBox
        className="test_class"
        value="test-checkBox"
        checked
        testId="checkBox"
      />
    );

    const elements = (
      await screen.findAllByTestId("checkBox")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("checkbox");
    expect(elements).toHaveClass("el_checkBox", "test_class");
    expect(elements.value).toBe("test-checkBox");
    expect(elements.checked).toBeTruthy();
  });
});
