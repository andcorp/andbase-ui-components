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
