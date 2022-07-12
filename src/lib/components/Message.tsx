/**
 * メッセージコンポーネント
 */

import React from "react";

import { ComponentWithChildren } from "lib/types";
import { joinClassNames } from "lib/utils";

/**
 * メッセージコンポーネント
 */
export const Message: ComponentWithChildren = ({
  children,
  className,
  testId,
}) => {
  const messageClassName = React.useMemo(
    () => joinClassNames("bl_message", className),
    [className]
  );

  return (
    <p className={messageClassName} data-testid={testId}>
      {children}
    </p>
  );
};
