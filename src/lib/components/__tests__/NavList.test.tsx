/**
 * ナビゲーションリストコンポーネントのテスト
 */

import { render, screen } from "@testing-library/react";
import { NavList } from "../NavList";

describe("NavListのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<NavList className="test_class" testId="header" />);

    const elements = (await screen.findAllByTestId("header"))[0];
    expect(elements.tagName).toStrictEqual("NAV");
    expect(elements).toHaveClass("bl_navList", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <NavList>
        <span data-testid="children">test</span>
      </NavList>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});
