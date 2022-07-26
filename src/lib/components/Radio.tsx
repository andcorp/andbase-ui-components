/**
 * ラジオボタン要素
 */

import React from "react";

import { Component } from "lib/types";
import { joinClassNames } from "lib/utils";

/**
 * ラジオボタン要素
 */
export const Radio: Component<{
  autoFocus?: boolean;
  name?: string;
  id?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  value?: string;
  defaultChecked?: boolean;
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
}) => {
  const radioClassName = React.useMemo(
    () => joinClassNames("el_radio", className),
    [className]
  );

  return (
    <input
      type="radio"
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
      value={value}
    />
  );
};
