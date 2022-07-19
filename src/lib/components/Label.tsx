/**
 * ラベルコンポーネント
 */

import React from "react";
import { ComponentWithChildren } from "lib/types";
import { joinClassNames } from "lib/utils";

/**
 * ラベルコンポーネント
 */
export const Label: ComponentWithChildren<{ htmlFor?: string }> = ({
  children,
  className,
  htmlFor,
  testId,
}) => {
  const labelClassName = React.useMemo(
    () => joinClassNames("el_label", className),
    [className]
  );

  return (
    <label className={labelClassName} htmlFor={htmlFor} data-testid={testId}>
      {children}
    </label>
  );
};
