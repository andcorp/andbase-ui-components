/**
 * 見出し要素
 */

import React from "react";

import { ComponentWithChildren } from "../types";
import { joinClassNames } from "../utils";

/**
 * 見出し要素レベル
 */
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * 見出し要素
 */
export const Heading: ComponentWithChildren<{
  id?: string;
  level: HeadingLevel;
}> = ({ id, children, className, testId, level }) => {
  // 見出しレベルに応じたタグを生成
  const HeadingTag = React.useMemo(
    () => `h${level}` as keyof JSX.IntrinsicElements,
    [level]
  );

  const headingClassName = React.useMemo(
    () => joinClassNames("el_heading", `el_heading__${HeadingTag}`, className),
    [className, HeadingTag]
  );

  return (
    <HeadingTag id={id} className={headingClassName} data-testid={testId}>
      {children}
    </HeadingTag>
  );
};
