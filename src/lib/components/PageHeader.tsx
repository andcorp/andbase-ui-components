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
