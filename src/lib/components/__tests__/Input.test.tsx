/**
 * Input要素のテスト
 */

import { render, screen } from "@testing-library/react";
import { Input } from "../Input";

describe("Inputのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<Input className="test_class" testId="header" />);

    const elements = (
      await screen.findAllByTestId("header")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
  });

  it("type指定が行えること", async () => {
    // レンダリング実行
    render(<Input className="test_class" type="password" testId="header" />);

    const elements = (
      await screen.findAllByTestId("header")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("password");
    expect(elements).toHaveClass("el_input", "test_class");
  });

  it("placeholder指定が行えること", async () => {
    // レンダリング実行
    render(
      <Input className="test_class" placeholder="テスト入力" testId="header" />
    );

    const elements = (
      await screen.findAllByTestId("header")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.placeholder).toBe("テスト入力");
  });

  it("autoComplete指定が行えること", async () => {
    // レンダリング実行
    render(
      <Input className="test_class" autoComplete="name" testId="header" />
    );

    const elements = (
      await screen.findAllByTestId("header")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.autocomplete).toBe("name");
  });

  it("id指定が行えること", async () => {
    // レンダリング実行
    render(<Input className="test_class" id="testInput" testId="header" />);

    const elements = (
      await screen.findAllByTestId("header")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.id).toBe("testInput");
  });

  it("name指定が行えること", async () => {
    // レンダリング実行
    render(<Input className="test_class" name="testInput" testId="header" />);

    const elements = (
      await screen.findAllByTestId("header")
    )[0] as HTMLInputElement;
    expect(elements.type).toBe("text");
    expect(elements).toHaveClass("el_input", "test_class");
    expect(elements.name).toBe("testInput");
  });
});
