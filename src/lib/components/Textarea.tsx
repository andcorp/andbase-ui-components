/**
 * テキストエリア要素
 */

import React from "react";

import { Component } from "lib/types";
import { joinClassNames } from "lib/utils";

/**
 * テキストエリアリサイズ設定
 */
export type TextAreaResize = "none" | "both" | "horizontal" | "vertical";

/**
 * エリアリサイズ設定からクラス名に変換する
 *
 * @param resize テキストエリアリサイズ設定
 * @returns クラス名
 */
function resizableToClassName(resize?: TextAreaResize): string | undefined {
  if (!resize) {
    return undefined;
  }

  switch (resize) {
    case "vertical":
      return "el_textarea__resizeVertical";
    case "horizontal":
      return "el_textarea__resizeHorizontal";
    case "none":
      return "el_textarea__resizeNone";
    default:
    case "both":
      return "el_textarea__resizeBoth";
  }
}

/**
 * テキストエリア要素
 */
export const TextArea: Component<{
  placeholder?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  name?: string;
  id?: string;
  cols?: number;
  rows?: number;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  resize?: TextAreaResize;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({
  placeholder,
  autoComplete,
  autoFocus,
  name,
  id,
  cols,
  rows,
  onChange,
  className,
  testId,
  minLength,
  maxLength,
  required,
  readOnly,
  disabled,
  resize,
  value,
}) => {
  const textAreaClassName = React.useMemo(
    () =>
      joinClassNames("el_textarea", resizableToClassName(resize), className),
    [className, resize]
  );

  return (
    <textarea
      className={textAreaClassName}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      minLength={minLength}
      maxLength={maxLength}
      data-testid={testId}
      placeholder={placeholder}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
      onChange={onChange}
      value={value}
    />
  );
};
