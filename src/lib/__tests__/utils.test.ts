/**
 * ユーティリティ関数のテスト
 */

import { joinClassNames } from "../utils";

test("joinClassNamesのテスト", () => {
  // 単一のクラス指定が正常に扱えること
  expect(joinClassNames("test_class")).toStrictEqual("test_class");

  // 複数のクラス指定が正常に扱えること
  expect(joinClassNames("test_class1", "test_class2")).toStrictEqual(
    "test_class1 test_class2"
  );

  // 途中の空文字列等は取り除かれること
  expect(
    joinClassNames("test_class1", "", null, undefined, false, "test_class2")
  ).toStrictEqual("test_class1 test_class2");

  // 空の入力の場合は空文字列が返ること。
  expect(joinClassNames(undefined)).toStrictEqual("");
  expect(joinClassNames(null)).toStrictEqual("");
  expect(joinClassNames(false)).toStrictEqual("");
  expect(joinClassNames("")).toStrictEqual("");
});
