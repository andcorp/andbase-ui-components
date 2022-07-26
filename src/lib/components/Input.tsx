/**
 * Input要素
 */

import React from "react";

import { Component } from "lib/types";
import { joinClassNames } from "lib/utils";

/**
 * 入力項目の種類
 */
export type InputType =
  | "date"
  | "datetime-local"
  | "email"
  | "month"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "url"
  | "week";

/**
 * 入力モード
 */
export type InputMode =
  | "none"
  | "text"
  | "decimal"
  | "numeric"
  | "tel"
  | "search"
  | "email"
  | "url";

/**
 * Input要素
 */
export const Input: Component<{
  type?: InputType;
  placeholder?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  name?: string;
  id?: string;
  size?: number;
  min?: number;
  max?: number;
  step?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  value?: string | number;
  inputMode?: InputMode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  type,
  placeholder,
  autoComplete,
  autoFocus,
  name,
  id,
  onChange,
  className,
  testId,
  size,
  min,
  max,
  step,
  minLength,
  maxLength,
  pattern,
  required,
  readOnly,
  disabled,
  value,
  inputMode,
}) => {
  const inputClassName = React.useMemo(
    () => joinClassNames("el_input", className),
    [className]
  );

  return (
    <input
      type={type}
      className={inputClassName}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      name={name}
      id={id}
      size={size}
      min={min}
      max={max}
      step={step}
      minLength={minLength}
      maxLength={maxLength}
      pattern={pattern}
      data-testid={testId}
      placeholder={placeholder}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
      onChange={onChange}
      value={value}
      inputMode={inputMode}
    />
  );
};
