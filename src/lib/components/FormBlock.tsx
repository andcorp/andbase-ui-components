/**
 * フォームブロック
 */

import React from "react";

import { joinClassNames } from "lib/utils";
import { ComponentWithChildren } from "lib/types";

/**
 * フォームブロックコンポーネント
 */
export const FormBlock: ComponentWithChildren = ({
  children,
  className,
  testId,
}) => {
  const formBlockClassName = React.useMemo(
    () => joinClassNames("bl_formBlock", className),
    [className]
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
