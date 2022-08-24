/**
 * ボタンコンポーネント
 */

import React from "react";

import {
  ComponentWithChildren,
  DisabledProps,
  ThemeColorProps,
} from "../types";
import { joinClassNames } from "../utils";

/**
 * ボタン要素
 */
export const Button: ComponentWithChildren<
  ThemeColorProps &
    DisabledProps & {
      onClick?: () => void;
    }
> = ({ onClick, children, className, testId, themeColor, disabled }) => {
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
    <button
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </button>
  );
};
