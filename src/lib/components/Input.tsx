/**
 * Input要素
 */

import React from "react";

import { Component } from "lib/types";
import { joinClassNames } from "lib/utils";

/**
 * Input要素
 */
export const Input: Component<{
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ placeholder, onChange, className, testId }) => {
  const inputClassName = React.useMemo(
    () => joinClassNames("el_input", className),
    [className]
  );

  return (
    <input
      type="text"
      className={inputClassName}
      data-testid={testId}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
