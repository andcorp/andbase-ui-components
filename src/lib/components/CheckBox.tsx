/**
 * チェックボックス要素
 */

import React from "react";

import { Component } from "lib/types";
import { joinClassNames } from "lib/utils";

/**
 * チェックボックス要素
 */
export const CheckBox: Component<{
  autoFocus?: boolean;
  name?: string;
  id?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  value?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  autoFocus,
  name,
  id,
  onChange,
  className,
  testId,
  required,
  readOnly,
  disabled,
  value,
  defaultChecked,
  checked,
}) => {
  const radioClassName = React.useMemo(
    () => joinClassNames("el_checkBox", className),
    [className]
  );

  return (
    <input
      type="checkbox"
      className={radioClassName}
      autoFocus={autoFocus}
      name={name}
      id={id}
      data-testid={testId}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
      onChange={onChange}
      defaultChecked={defaultChecked}
      checked={checked}
      value={value}
    />
  );
};
