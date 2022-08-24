/**
 * アンカー要素
 */

import React from "react";

import { ComponentWithChildren } from "../types";
import { joinClassNames } from "../utils";

/**
 * アンカー要素
 */
export const Anchor: ComponentWithChildren<{
  href?: string;
  onClick?: () => void;
}> = ({ href, onClick, children, className, testId }) => {
  const anchorClassName = React.useMemo(
    () => joinClassNames("el_anchor", className),
    [className]
  );

  return (
    <a
      className={anchorClassName}
      href={href}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </a>
  );
};
