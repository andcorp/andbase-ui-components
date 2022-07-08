/**
 * 順序無しリストのコンポーネント
 */

import React from "react";

import { ComponentWithChildren } from "lib/types";
import { joinClassNames } from "lib/utils";

/**
 * 順序無しリスト
 */
export const UList: ComponentWithChildren = ({
  className,
  children,
  testId,
}) => {
  // リストクラス名
  const listClassName = React.useMemo(
    () => joinClassNames("bl_ulist", className),
    [className]
  );

  return (
    <ul className={listClassName} data-testid={testId}>
      {children}
    </ul>
  );
};

/**
 * 順序無しリスト項目要素
 */
export const UListItem: ComponentWithChildren = ({
  className,
  children,
  testId,
}) => {
  // 項目クラス名
  const itemClassName = React.useMemo(
    () => joinClassNames("bl_ulist_item", className),
    [className]
  );

  return (
    <li className={itemClassName} data-testid={testId}>
      {children}
    </li>
  );
};
