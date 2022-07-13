/**
 * ボタンコンポーネント
 */

import React from "react";

import { ComponentWithChildren } from "lib/types";
import { joinClassNames } from "lib/utils";

/**
 * ボタン要素
 */
export const Button: ComponentWithChildren<{
  onClick?: () => void;
}> = ({ onClick, children, className, testId }) => {
  const buttonClassName = React.useMemo(
    () => joinClassNames("el_button", className),
    [className]
  );

  return (
    <button className={buttonClassName} onClick={onClick} data-testid={testId}>
      {children}
    </button>
  );
};
