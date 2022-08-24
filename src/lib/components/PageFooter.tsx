/**
 * ページフッター要素.
 */
import React from "react";

import { ComponentWithChildren } from "../types";
import { joinClassNames } from "../utils";

/**
 * ページフッター要素
 */
export const PageFooter: ComponentWithChildren = ({
  className,
  children,
  testId,
}) => {
  // フッタークラス名
  const footerClassName = React.useMemo(
    () => joinClassNames("bl_pageFooter", className),
    [className]
  );

  return (
    <div className={footerClassName} data-testid={testId}>
      {children}
    </div>
  );
};

/**
 * ページフッター項目要素
 */
export const PageFooterItem: ComponentWithChildren<{ grow?: boolean }> = ({
  className,
  children,
  testId,
  grow,
}) => {
  // フッタークラス名
  const footerClassName = React.useMemo(
    () =>
      joinClassNames(
        "bl_pageFooter_item",
        grow ? "bl_pageFooter_item__grow" : undefined,
        className
      ),
    [className, grow]
  );

  return (
    <div className={footerClassName} data-testid={testId}>
      {children}
    </div>
  );
};
