/**
 * ページ要素
 */

import React from "react";

import { ComponentWithChildren } from "lib/types";

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
    () => `ly_page ${className}`,
    [className]
  );

  return (
    <div className={pageClassName} data-test-id={testId}>
      <div className="ly_page_inner">{children}</div>
    </div>
  );
};
