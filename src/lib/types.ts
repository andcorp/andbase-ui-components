/**
 * 基本的な型定義
 */

import React from "react";

/**
 * 基本的なコンポーネントのプロパティ
 */
export interface ComponentProps {
  /**
   * クラス名
   */
  className?: string;

  /**
   * テストID
   */
  testId?: string;
}

/**
 * コンポーネントの型
 */
export type Component = React.FC<ComponentProps>;

/**
 * 親コンポーネントの型
 */
export type ComponentWithChildren<Props = {}> = React.FC<
  ComponentProps & React.PropsWithChildren & Props
>;
