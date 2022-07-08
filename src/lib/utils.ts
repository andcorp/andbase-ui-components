/**
 * ユーティリティ関数
 */

/**
 * クラス名を連結する.
 *
 * null・undefined・空文字列は除外する。
 *
 * @param classNames クラス名配列
 * @returns 連結されたクラス名
 */
export function joinClassNames(
  ...classNames: ReadonlyArray<string | null | undefined | false>
): string {
  return classNames.filter((e) => e).join(" ");
}
