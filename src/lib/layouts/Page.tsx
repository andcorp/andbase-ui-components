/**
 * ページ要素
 */

import React from "react";

import { ComponentWithChildren } from "lib/types";
import { joinClassNames } from "lib/utils";

/**
 * ページ要素
 */
export const Page: ComponentWithChildren<{ grow?: boolean }> = ({
  className,
  children,
  testId,
  grow,
}) => {
  // ページクラス名
  const pageClassName = React.useMemo(
    () => joinClassNames("ly_page", grow && "ly_page__grow", className),
    [className, grow]
  );

  return (
    <main className={pageClassName} data-testid={testId}>
      <div className="ly_page_inner">{children}</div>
    </main>
  );
};
