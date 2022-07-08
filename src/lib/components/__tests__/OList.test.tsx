/**
 * 番号付きリスト要素のテスト.
 */

import { render, screen } from "@testing-library/react";

import { OList, OListItem } from "../OList";

describe("OListのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<OList className="test_class" testId="list" />);

    const elements = (await screen.findAllByTestId("list"))[0];
    expect(elements).toHaveClass("bl_olist", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <OList>
        <span data-testid="children">test</span>
      </OList>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});

describe("OListItemのテスト", () => {
  it("className指定が行えること", async () => {
    // レンダリング実行
    render(<OListItem className="test_class" testId="list" />);

    const elements = (await screen.findAllByTestId("list"))[0];
    expect(elements).toHaveClass("bl_olist_item", "test_class");
  });

  it("childrenが生成されていること", async () => {
    // レンダリング実行
    render(
      <OListItem>
        <span data-testid="children">test</span>
      </OListItem>
    );

    const elements = (await screen.findAllByTestId("children"))[0];
    expect(elements).toHaveTextContent("test");
  });
});
