import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { compare, needLabels, regions, type Need, type Product, type RegionId, type Verdict } from "@/lib/license/catalog";

export const Route = createFileRoute("/tools/license-compare")({
  head: () => ({
    meta: [
      { title: "Microsoft licence comparison — Automation Flow Lab" },
      { name: "description", content: "Compare two Microsoft 365 suites using the public commercial price list." },
    ],
  }),
  component: LicencePage,
});

type Rate = { country: string; currency: string; rate: number };

function money(amount: number, currency: string) {
  return new Intl.NumberFormat("en", { style: "currency", currency, maximumFractionDigits: 0 }).format(amount);
}

function Groups({ products, value, onChange }: { products: Product[]; value: string; onChange: (value: string) => void }) {
  const groups = ["Business", "Enterprise", "Frontline", "Server"].filter((group) => products.some((p) => p.group === group));
  return (
    <select className="mt-1 h-11 w-full rounded-sm border border-line bg-surface px-3 text-sm" value={value} onChange={(e) => onChange(e.target.value)}>
      {groups.map((group) => (
        <optgroup key={group} label={group}>
          {products
            .filter((p) => p.group === group)
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
        </optgroup>
      ))}
    </select>
  );
}

const needs = Object.keys(needLabels) as Need[];

function LicencePage() {
  const [region, setRegion] = useState<RegionId>("with-teams");
  const [products, setProducts] = useState<Product[]>([]);
  const [rates, setRates] = useState<Rate[]>([]);
  const [source, setSource] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [seats, setSeats] = useState(10);
  const [budget, setBudget] = useState("");
  const [picked, setPicked] = useState<Need[]>(["email", "desktop"]);
  const [verdict, setVerdict] = useState<Verdict | null>(null);

  useEffect(() => {
    let cancel = false;
    setBusy(true);
    setError("");
    setVerdict(null);
    fetch(`/api/license-catalog?region=${region}`)
      .then(async (res) => {
        const data = (await res.json()) as { products?: Product[]; rates?: Rate[]; source?: string; error?: string };
        if (!res.ok || !data.products) throw new Error(data.error ?? "Could not load prices");
        if (cancel) return;
        setProducts(data.products);
        setRates((data.rates ?? []).filter((row) => typeof row.rate === "number"));
        setSource(data.source ?? "");
        setLeft(data.products[0]?.id ?? "");
        setRight(data.products[1]?.id ?? data.products[0]?.id ?? "");
      })
      .catch((err: Error) => {
        if (!cancel) setError(err.message);
      })
      .finally(() => {
        if (!cancel) setBusy(false);
      });
    return () => {
      cancel = true;
    };
  }, [region]);

  const field = "mt-1 h-11 w-full rounded-sm border border-line bg-surface px-3 text-sm";

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10">
      <Link to="/tools" className="text-sm font-semibold text-primary">
        All tools
      </Link>
      <h1 className="mt-3 font-display text-4xl">Microsoft licence comparison</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Free. Each visit reads Microsoft’s published commercial price page and uses those figures. Nothing on this page is written by a model, and Microsoft does not offer a public price API without a partner login.
      </p>
      <p className="mt-4 max-w-2xl rounded-lg border border-line bg-surface p-4 text-sm text-muted">
        Read this at your own discretion. Prices, taxes, currency, and what a suite includes can change, and they can differ from the price Microsoft or a reseller offers you. Automation Flow Lab is not liable for any loss, cost, or decision that follows from using this comparison.
      </p>
      <form
        className="mt-8 grid gap-4 rounded-xl border border-line bg-surface p-5"
        onSubmit={(e) => {
          e.preventDefault();
          if (left === right) {
            setError("Pick two different products.");
            setVerdict(null);
            return;
          }
          setError("");
          const amount = budget.trim() ? Number(budget) : null;
          setVerdict(
            compare({
              products,
              leftId: left,
              rightId: right,
              seats,
              budget: amount != null && Number.isFinite(amount) ? amount : null,
              needs: picked,
            }),
          );
        }}
      >
        <label className="text-sm font-semibold">
          Where the licences are bought
          <select className={field} value={region} onChange={(e) => setRegion(e.target.value as RegionId)}>
            {regions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <p className="text-sm text-muted">{regions.find((item) => item.id === region)?.detail}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-semibold">
            First product
            <Groups products={products} value={left} onChange={setLeft} />
          </label>
          <label className="text-sm font-semibold">
            Second product
            <Groups products={products} value={right} onChange={setRight} />
          </label>
          <label className="text-sm font-semibold">
            Quantity
            <input className={field} type="number" min={1} value={seats} onChange={(e) => setSeats(Number(e.target.value))} />
            <span className="mt-1 block text-xs font-normal text-muted">Business suites are published for 1–300 users. Enterprise suites are for above that.</span>
          </label>
          <label className="text-sm font-semibold">
            Budget per user / month (optional)
            <input className={field} inputMode="decimal" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Leave blank if you have no cap" />
          </label>
        </div>
        <fieldset>
          <legend className="text-sm font-semibold">What the licence has to cover</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {needs.map((need) => (
              <label key={need} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={picked.includes(need)}
                  onChange={(e) => setPicked((list) => (e.target.checked ? [...list, need] : list.filter((item) => item !== need)))}
                />
                {needLabels[need]}
              </label>
            ))}
          </div>
        </fieldset>
        <button type="submit" disabled={busy || products.length < 2} className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-fg">
          {busy ? "Reading Microsoft’s list" : "Compare"}
        </button>
      </form>
      {error ? <p className="mt-4 text-sm text-danger">{error}</p> : null}
      {verdict ? (
        <section className="mt-6 rounded-xl border border-line bg-surface p-5">
          <h2 className="font-display text-2xl">{verdict.headline}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            {verdict.reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {verdict.rows.map((row) => (
                <article key={row.id} className="rounded-lg border border-line p-3 text-sm">
                  <p className="font-semibold">{row.id}</p>
                  <p className="text-muted">{row.group}</p>
                  <p className="mt-2">
                    {money(row.monthly, "USD")} {row.unitLabel}
                  </p>
                  <ul className="mt-2 space-y-1 text-muted">
                    {rates.map((rate) => (
                      <li key={rate.currency}>
                        {rate.country}: {money(row.monthly * rate.rate, rate.currency)}
                        {row.unit === "user-month" ? " per user / month" : ""}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2">{row.note}</p>
                  <p className="mt-3 text-sm font-semibold">Published with</p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-muted">
                    {row.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-muted">Against the boxes you ticked: {row.covers.join(", ") || "none of those."}</p>
                  <p className="text-muted">{row.missing.length ? `Does not include: ${row.missing.join(", ")}` : "Covers the needs you ticked."}</p>
                  <p className={row.underMin || row.overCap ? "mt-2 font-semibold" : "mt-2 text-muted"}>{row.seatRule}</p>
                  <p className="text-muted">
                    {row.unit === "pack"
                      ? "Pack or server price. It is not scored against a per-user budget."
                      : row.overBudget
                        ? "Over the per-user budget you entered."
                        : budget.trim()
                          ? "Inside the per-user budget you entered."
                          : "No per-user budget was set."}
                  </p>
                </article>
            ))}
          </div>
          {source ? (
            <a className="mt-4 inline-flex text-sm font-semibold text-primary" href={source}>
              Public list this was read from
            </a>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
