/**
 * Input要素のテスト
 */

import { render, screen } from "@testing-library/react";
import { Input } from "../Input";

describe("Inputのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<Input className="test_class" testId="input" />);

    const elements = (
      await screen.findAllByTestId("input")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
  });

  it("type指定が行えること", async () => {
    // レンダリング実行
    render(<Input className="test_class" type="password" testId="input" />);

    const elements = (
      await screen.findAllByTestId("input")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("password");
    expect(elements).toHaveClass("el_input", "test_class");
  });

  it("placeholder指定が行えること", async () => {
    // レンダリング実行
    render(
      <Input className="test_class" placeholder="テスト入力" testId="input" />
    );

    const elements = (
      await screen.findAllByTestId("input")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.placeholder).toBe("テスト入力");
  });

  it("autoComplete指定が行えること", async () => {
    // レンダリング実行
    render(<Input className="test_class" autoComplete="name" testId="input" />);

    const elements = (
      await screen.findAllByTestId("input")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.autocomplete).toBe("name");
  });

  it("id指定が行えること", async () => {
    // レンダリング実行
    render(<Input className="test_class" id="testInput" testId="input" />);

    const elements = (
      await screen.findAllByTestId("input")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.id).toBe("testInput");
  });

  it("name指定が行えること", async () => {
    // レンダリング実行
    render(<Input className="test_class" name="testInput" testId="input" />);

    const elements = (
      await screen.findAllByTestId("input")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.name).toBe("testInput");
  });

  it("size指定が行えること", async () => {
    // レンダリング実行
    render(<Input className="test_class" size={100} testId="input" />);

    const elements = (
      await screen.findAllByTestId("input")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.size).toBe(100);
  });

  it("minLength・maxLength指定が行えること", async () => {
    // レンダリング実行
    render(
      <Input
        className="test_class"
        minLength={1}
        maxLength={100}
        testId="input"
      />
    );

    const elements = (
      await screen.findAllByTestId("input")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.minLength).toBe(1);
    expect(elements.maxLength).toBe(100);
  });

  it("min・max・step指定が行えること", async () => {
    // レンダリング実行
    render(
      <Input
        className="test_class"
        type="number"
        min={1}
        max={100}
        step={10}
        testId="input"
      />
    );

    const elements = (
      await screen.findAllByTestId("input")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("number");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.min).toBe("1");
    expect(elements.max).toBe("100");
    expect(elements.step).toBe("10");
  });

  it("pattern指定が行えること", async () => {
    // レンダリング実行
    render(
      <Input className="test_class" pattern="[0-9a-zA-Z]" testId="input" />
    );

    const elements = (
      await screen.findAllByTestId("input")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.pattern).toBe("[0-9a-zA-Z]");
  });

  it("required指定が行えること", async () => {
    // レンダリング実行
    render(<Input className="test_class" required testId="input" />);

    const elements = (
      await screen.findAllByTestId("input")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.required).toBeTruthy();
  });

  it("readOnly指定が行えること", async () => {
    // レンダリング実行
    render(<Input className="test_class" readOnly testId="input" />);

    const elements = (
      await screen.findAllByTestId("input")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.readOnly).toBeTruthy();
  });

  it("disabled指定が行えること", async () => {
    // レンダリング実行
    render(<Input className="test_class" disabled testId="input" />);

    const elements = (
      await screen.findAllByTestId("input")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.disabled).toBeTruthy();
  });

  it("value指定が行えること", async () => {
    // レンダリング実行
    render(<Input className="test_class" value="test-input" testId="input" />);

    const elements = (
      await screen.findAllByTestId("input")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.value).toBe("test-input");
  });
});
