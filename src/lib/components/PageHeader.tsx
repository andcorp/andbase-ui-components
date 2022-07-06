/**
 * ページヘッダー要素.
 */
import React from "react";

import { ComponentWithChildren } from "lib/types";
import { joinClassNames } from "lib/utils";

/**
 * ページヘッダー要素
 */
export const PageHeader: ComponentWithChildren = ({
  className,
  children,
  testId,
}) => {
  // ヘッダークラス名
  const headerClassName = React.useMemo(
    () => joinClassNames("bl_pageHeader", className),
    [className]
  );

  return (
    <div className={headerClassName} data-testid={testId}>
      {children}
    </div>
  );
};

/**
 * ページヘッダー項目要素
 */
export const PageHeaderItem: ComponentWithChildren<{ grow?: boolean }> = ({
  className,
  children,
  testId,
  grow,
}) => {
  // ヘッダークラス名
  const headerClassName = React.useMemo(
    () =>
      joinClassNames(
        "bl_pageHeader_item",
        grow ? "bl_pageHeader_item__grow" : undefined,
        className
      ),
    [className, grow]
  );

  return (
    <div className={headerClassName} data-testid={testId}>
      {children}
    </div>
  );
};
