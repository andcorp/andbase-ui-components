/**
 * ナビゲーションリストコンポーネント
 */

import React from "react";

import { joinClassNames } from "lib/utils";
import { ComponentWithChildren } from "lib/types";

/**
 * ナビゲーションリストコンポーネント
 */
export const NavList: ComponentWithChildren = ({
  children,
  className,
  testId,
}) => {
  const navListClassName = React.useMemo(
    () => joinClassNames("bl_navList", className),
    [className]
  );
  return (
    <nav className={navListClassName} data-testid={testId}>
      {children}
    </nav>
  );
};
