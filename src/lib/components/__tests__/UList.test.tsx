/**
 * 順序無しリスト要素のテスト.
 */

import { render, screen } from "@testing-library/react";

import { UList, UListItem } from "../UList";

describe("UListのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<UList className="test_class" testId="list" />);

    const elements = (await screen.findAllByTestId("list"))[0];
    expect(elements).toHaveClass("bl_ulist", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <UList>
        <span data-testid="children">test</span>
      </UList>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});

describe("UListItemのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<UListItem className="test_class" testId="list" />);

    const elements = (await screen.findAllByTestId("list"))[0];
    expect(elements).toHaveClass("bl_ulist_item", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <UListItem>
        <span data-testid="children">test</span>
      </UListItem>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});
