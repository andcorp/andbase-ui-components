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
 * Input要素
 */
export const Input: Component<{
  type?: InputType;
  placeholder?: string;
  autoComplete?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ type, placeholder, autoComplete, onChange, className, testId }) => {
  const inputClassName = React.useMemo(
    () => joinClassNames("el_input", className),
    [className]
  );

  return (
    <input
      type={type}
      className={inputClassName}
      autoComplete={autoComplete}
      data-testid={testId}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
