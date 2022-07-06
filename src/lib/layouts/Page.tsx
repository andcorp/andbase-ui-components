/**
 * ページ要素
 */

import React from "react";

import { ComponentWithChildren } from "lib/types";
import { joinClassNames } from "lib/utils";

/**
 * ページ要素
 */
export const Page: ComponentWithChildren = ({
  className,
  children,
  testId,
}) => {
  // ページクラス名
  const pageClassName = React.useMemo(
    () => joinClassNames("ly_page", className),
    [className]
  );

  return (
    <div className={pageClassName} data-testid={testId}>
      <div className="ly_page_inner">{children}</div>
    </div>
  );
};
