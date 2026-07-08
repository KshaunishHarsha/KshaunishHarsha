// Resolves the canonical site URL without manual configuration:
// 1. NEXT_PUBLIC_SITE_URL — set this if/when a custom domain exists
// 2. VERCEL_PROJECT_PRODUCTION_URL — provided by Vercel at build time (e.g. "foo.vercel.app")
// 3. localhost — local dev fallback
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
