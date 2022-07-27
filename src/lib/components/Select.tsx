/**
 * 選択リスト要素
 */

import React from "react";

import { ComponentWithChildren } from "lib/types";
import { joinClassNames } from "lib/utils";

/**
 * 選択リスト要素
 */
export const Select: ComponentWithChildren<{
  autoFocus?: boolean;
  name?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  size?: number;
  multiple?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({
  autoFocus,
  name,
  id,
  onChange,
  className,
  testId,
  required,
  disabled,
  size,
  multiple,
  value,
  children,
}) => {
  const selectClassName = React.useMemo(
    () => joinClassNames("el_select", className),
    [className]
  );

  return (
    <select
      className={selectClassName}
      autoFocus={autoFocus}
      name={name}
      id={id}
      data-testid={testId}
      required={required}
      disabled={disabled}
      size={size}
      multiple={multiple}
      onChange={onChange}
      value={value}
    >
      {children}
    </select>
  );
};
