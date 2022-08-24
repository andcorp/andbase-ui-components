/**
 * ページルート要素
 */

import React from "react";

import { ComponentWithChildren } from "../types";
import { joinClassNames } from "../utils";

/**
 * ページルート要素
 */
export const PageRoot: ComponentWithChildren<{ stretch?: boolean }> = ({
  stretch,
  className,
  children,
  testId,
}) => {
  // ページルートクラス名
  const pageRootClassName = React.useMemo(
    () =>
      joinClassNames(
        "ly_pageRoot",
        stretch && "ly_pageRoot__stretch",
        className
      ),
    [className, stretch]
  );

  return (
    <div className={pageRootClassName} data-testid={testId}>
      {children}
    </div>
  );
};
