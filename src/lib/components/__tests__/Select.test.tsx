/**
 * 選択リスト要素のテスト
 */

import { render, screen } from "@testing-library/react";
import { Select } from "../Select";

describe("Radioのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<Select className="test_class" testId="select" />);

    const elements = (
      await screen.findAllByTestId("select")
    )[0] as HTMLSelectElement;
    expect(elements.tagName).toBe("SELECT");
    expect(elements).toHaveClass("el_select", "test_class");
  });

  it("id指定が行えること", async () => {
    // レンダリング実行
    render(<Select className="test_class" id="testSelect" testId="select" />);

    const elements = (
      await screen.findAllByTestId("select")
    )[0] as HTMLSelectElement;
    expect(elements.tagName).toBe("SELECT");
    expect(elements).toHaveClass("el_select", "test_class");
    expect(elements.id).toBe("testSelect");
  });

  it("name指定が行えること", async () => {
    // レンダリング実行
    render(<Select className="test_class" name="testSelect" testId="select" />);

    const elements = (
      await screen.findAllByTestId("select")
    )[0] as HTMLSelectElement;
    expect(elements.tagName).toBe("SELECT");
    expect(elements).toHaveClass("el_select", "test_class");
    expect(elements.name).toBe("testSelect");
  });

  it("required指定が行えること", async () => {
    // レンダリング実行
    render(<Select className="test_class" required testId="select" />);

    const elements = (
      await screen.findAllByTestId("select")
    )[0] as HTMLSelectElement;
    expect(elements.tagName).toBe("SELECT");
    expect(elements).toHaveClass("el_select", "test_class");
    expect(elements.required).toBeTruthy();
  });

  it("disabled指定が行えること", async () => {
    // レンダリング実行
    render(<Select className="test_class" disabled testId="select" />);

    const elements = (
      await screen.findAllByTestId("select")
    )[0] as HTMLSelectElement;
    expect(elements.tagName).toBe("SELECT");
    expect(elements).toHaveClass("el_select", "test_class");
    expect(elements.disabled).toBeTruthy();
  });

  it("size指定が行えること", async () => {
    // レンダリング実行
    render(
      <Select className="test_class" size={3} testId="select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>
    );

    const elements = (
      await screen.findAllByTestId("select")
    )[0] as HTMLSelectElement;
    expect(elements.tagName).toBe("SELECT");
    expect(elements).toHaveClass("el_select", "test_class");
    expect(elements.size).toBe(3);
  });

  it("multiple指定が行えること", async () => {
    // レンダリング実行
    render(
      <Select className="test_class" size={3} multiple testId="select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>
    );

    const elements = (
      await screen.findAllByTestId("select")
    )[0] as HTMLSelectElement;
    expect(elements.tagName).toBe("SELECT");
    expect(elements).toHaveClass("el_select", "test_class");
    expect(elements.multiple).toBeTruthy();
  });

  it("value指定が行えること", async () => {
    // レンダリング実行
    render(
      <Select className="test_class" value="test-select" testId="select">
        <option value="test-select">test-select</option>
      </Select>
    );

    const elements = (
      await screen.findAllByTestId("select")
    )[0] as HTMLSelectElement;
    expect(elements.tagName).toBe("SELECT");
    expect(elements).toHaveClass("el_select", "test_class");
    expect(elements.value).toBe("test-select");
  });
});
