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
export type Component<Props = {}> = React.FC<ComponentProps & Props>;

/**
 * 親コンポーネントの型
 */
export type ComponentWithChildren<Props = {}> = React.FC<
  ComponentProps & React.PropsWithChildren & Props
>;

/**
 * テーマ色定義
 */
export type ThemeColor =
  | "recommend"
  | "review"
  | "fresh"
  | "warning"
  | "danger";

/**
 * テーマ色プロパティ
 */
export interface ThemeColorProps {
  themeColor?: ThemeColor;
}

/**
 * 有効状態プロパティ
 */
export interface DisabledProps {
  disabled?: boolean;
}
