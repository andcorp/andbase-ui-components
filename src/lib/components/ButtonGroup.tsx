/**
 * ボタングループコンポーネント
 */

import React from "react";

import { joinClassNames } from "lib/utils";
import { ComponentWithChildren } from "lib/types";

/**
 * ボタングループコンポーネント
 */
export const ButtonGroup: ComponentWithChildren = ({
  children,
  className,
  testId,
}) => {
  const buttonGroupClassName = React.useMemo(
    () => joinClassNames("bl_buttonGroup", className),
    [className]
  );
  return (
    <div className={buttonGroupClassName} data-testid={testId}>
      {children}
    </div>
  );
};
