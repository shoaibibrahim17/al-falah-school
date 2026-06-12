/**
 * Resolves a public asset path with the Astro base URL.
 * Works correctly for both local dev and GitHub Pages deployment
 * where the site is served under base: "/al-falah-school/".
 */
export function assetUrl(path?: string | null): string {
  if (!path) return "";
  const cleanPath = path.replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL || "/";
  // Ensure base ends with /
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${cleanPath}`;
}
