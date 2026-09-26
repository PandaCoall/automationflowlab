import { createFileRoute } from "@tanstack/react-router";
import { SOURCE, parseCatalog, parseServerLicences, type RegionId } from "@/lib/license/catalog";

let cache: { at: number; html: string } | null = null;

const WINDOWS = "https://www.microsoft.com/en-us/windows-server/pricing";
const SQL = "https://www.microsoft.com/en-us/sql-server/sql-server-2022-pricing";
const FX = "https://api.frankfurter.app/latest?from=USD&to=ZAR,GBP,EUR,INR,AUD,CAD";

async function page(url: string) {
  const res = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
      accept: "text/html",
    },
    signal: AbortSignal.timeout(12000),
  });
  if (!res.ok) throw new Error(`Microsoft returned ${res.status}`);
  return res.text();
}

export const Route = createFileRoute("/api/license-catalog")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const region = new URL(request.url).searchParams.get("region") === "no-teams" ? "no-teams" : "with-teams";
        try {
          const html = cache && Date.now() - cache.at < 6 * 60 * 60 * 1000 ? cache.html : await page(SOURCE);
          cache = { at: cache?.at && Date.now() - cache.at < 6 * 60 * 60 * 1000 ? cache.at : Date.now(), html };
          const [windows, sql, fxRes] = await Promise.all([page(WINDOWS), page(SQL), fetch(FX, { signal: AbortSignal.timeout(8000) })]);
          const suites = parseCatalog(html, region as RegionId);
          const servers = region === "with-teams" ? parseServerLicences(windows, sql) : [];
          const products = [...suites, ...servers];
          const fx = fxRes.ok ? ((await fxRes.json()) as { rates?: Record<string, number> }) : {};
          const rates = [
            { country: "South Africa", currency: "ZAR", rate: fx.rates?.ZAR },
            { country: "United Kingdom", currency: "GBP", rate: fx.rates?.GBP },
            { country: "Euro area", currency: "EUR", rate: fx.rates?.EUR },
            { country: "India", currency: "INR", rate: fx.rates?.INR },
            { country: "Australia", currency: "AUD", rate: fx.rates?.AUD },
            { country: "Canada", currency: "CAD", rate: fx.rates?.CAD },
          ].filter((row) => typeof row.rate === "number");
          if (!products.length) {
            return Response.json({ error: "The public price page did not include a readable list." }, { status: 422 });
          }
          return Response.json({
            source: SOURCE,
            region,
            currency: "USD",
            billing: "per user / month, annual commitment, published commercial list",
            fetchedAt: new Date().toISOString(),
            products,
            rates,
          });
        } catch {
          return Response.json({ error: "The Microsoft licensing page could not be read just now." }, { status: 422 });
        }
      },
    },
  },
});
