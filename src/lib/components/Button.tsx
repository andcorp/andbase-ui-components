/**
 * ボタンコンポーネント
 */

import React from "react";

import { ComponentWithChildren, ThemeColorProps } from "lib/types";
import { joinClassNames } from "lib/utils";

/**
 * ボタン要素
 */
export const Button: ComponentWithChildren<
  ThemeColorProps & {
    onClick?: () => void;
  }
> = ({ onClick, children, className, testId, themeColor }) => {
  const buttonClassName = React.useMemo(
    () =>
      joinClassNames(
        "el_button",
        themeColor && `el_button__${themeColor}`,
        className
      ),
    [className, themeColor]
  );

  return (
    <button className={buttonClassName} onClick={onClick} data-testid={testId}>
      {children}
    </button>
  );
};
