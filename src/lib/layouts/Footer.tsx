/**
 * フッター要素
 */
import React from "react";

import { ComponentWithChildren } from "../types";
import { joinClassNames } from "../utils";

/**
 * フッター要素
 */
export const Footer: ComponentWithChildren = ({
  className,
  children,
  testId,
}) => {
  // フッタークラス名
  const footerClassName = React.useMemo(
    () => joinClassNames("ly_footer", className),
    [className]
  );

  return (
    <footer className={footerClassName} data-testid={testId}>
      {children}
    </footer>
  );
};
