/**
 * メッセージコンポーネント
 */

import React from "react";

import { ComponentWithChildren, ThemeColorProps } from "../types";
import { joinClassNames } from "../utils";

/**
 * メッセージコンポーネント
 */
export const Message: ComponentWithChildren<ThemeColorProps> = ({
  children,
  className,
  testId,
  themeColor,
}) => {
  const messageClassName = React.useMemo(
    () =>
      joinClassNames(
        "bl_message",
        themeColor && `bl_message__${themeColor}`,
        className
      ),
    [className, themeColor]
  );

  return (
    <p className={messageClassName} data-testid={testId}>
      {children}
    </p>
  );
};
