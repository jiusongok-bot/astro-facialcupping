/**
 * Article / Section visibility helper.
 *
 * status values:
 *   - "published" → always visible
 *   - "draft"     → never visible (hidden everywhere)
 *   - "dev"       → visible only in dev mode (astro dev)
 */

export type ArticleStatus = "published" | "draft" | "dev";

/** Returns true when the given status should be visible in the current environment. */
export function isVisible(status: ArticleStatus | undefined): boolean {
  if (!status || status === "published") return true;
  if (status === "dev") return import.meta.env.DEV;
  // "draft" → always hidden
  return false;
}

/** Filter helper: keeps only visible entries from a collection. */
export function filterVisible<T extends { data: { status?: ArticleStatus } }>(
  entries: T[],
): T[] {
  return entries.filter((e) => isVisible(e.data.status));
}
