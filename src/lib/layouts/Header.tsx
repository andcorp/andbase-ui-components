/**
 * ヘッダー要素
 */
import React from "react";

import { ComponentWithChildren } from "lib/types";
import { joinClassNames } from "lib/utils";

/**
 * ヘッダー要素
 */
export const Header: ComponentWithChildren = ({
  className,
  children,
  testId,
}) => {
  // ヘッダークラス名
  const headerClassName = React.useMemo(
    () => joinClassNames("ly_header", className),
    [className]
  );

  return (
    <header className={headerClassName} data-testid={testId}>
      {children}
    </header>
  );
};
