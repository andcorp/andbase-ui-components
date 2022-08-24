/**
 * フォームブロック
 */

import React from "react";

import { joinClassNames } from "../utils";
import { ComponentWithChildren } from "../types";

/**
 * フォームブロックコンポーネント
 */
export const FormBlock: ComponentWithChildren<{ grid?: boolean }> = ({
  children,
  className,
  testId,
  grid,
}) => {
  const formBlockClassName = React.useMemo(
    () =>
      joinClassNames("bl_formBlock", grid && "bl_formBlock__grid", className),
    [className, grid]
  );
  return (
    <div className={formBlockClassName} data-testid={testId}>
      {children}
    </div>
  );
};

/**
 * フォームブロック項目コンポーネント
 */
export const FormBlockItem: ComponentWithChildren = ({
  children,
  className,
  testId,
}) => {
  const formBlockItemClassName = React.useMemo(
    () => joinClassNames("bl_formBlock_item", className),
    [className]
  );
  return (
    <div className={formBlockItemClassName} data-testid={testId}>
      {children}
    </div>
  );
};
