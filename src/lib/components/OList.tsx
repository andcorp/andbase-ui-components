/**
 * 番号付きリストのコンポーネント
 */

import React from "react";

import { ComponentWithChildren } from "../types";
import { joinClassNames } from "../utils";

/**
 * 番号付きリスト
 */
export const OList: ComponentWithChildren = ({
  className,
  children,
  testId,
}) => {
  // リストクラス名
  const listClassName = React.useMemo(
    () => joinClassNames("bl_olist", className),
    [className]
  );

  return (
    <ol className={listClassName} data-testid={testId}>
      {children}
    </ol>
  );
};

/**
 * 番号付きリスト項目要素
 */
export const OListItem: ComponentWithChildren = ({
  className,
  children,
  testId,
}) => {
  // 項目クラス名
  const itemClassName = React.useMemo(
    () => joinClassNames("bl_olist_item", className),
    [className]
  );

  return (
    <li className={itemClassName} data-testid={testId}>
      {children}
    </li>
  );
};
