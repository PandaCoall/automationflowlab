import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { Finding, Status } from "@/lib/growth/scan";

export const Route = createFileRoute("/tools/growth-check")({
  head: () => ({
    meta: [
      { title: "Website Growth Check — Automation Flow Lab" },
      { name: "description", content: "Website Growth Check. Website check, then a paid audit, then fix, grow, and monitor." },
    ],
  }),
  component: GrowthPage,
});

const tone: Record<Status, string> = {
  CRITICAL: "bg-primary text-primary-fg",
  "NEEDS WORK": "border border-primary text-primary",
  WORKING: "border border-line text-ink",
};

const steps = ["Website check", "Paid audit", "Fix", "Grow", "Monitor"] as const;

function GrowthPage() {
  const [url, setUrl] = useState("");
  const [business, setBusiness] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ overall: Status; findings: Finding[]; finalUrl: string } | null>(null);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10">
      <Link to="/tools" className="text-sm font-semibold text-primary">
        All tools
      </Link>
      <h1 className="mt-3 font-display text-4xl">Website Growth Check</h1>
      <p className="mt-2 max-w-2xl text-muted">Website Growth Check is the site intelligence system.</p>
      <ol className="mt-6 flex flex-col gap-2 text-sm font-semibold sm:flex-row sm:flex-wrap sm:items-center">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-sm border border-line bg-surface px-3 py-2">{step}</span>
            {index < steps.length - 1 ? (
              <span className="hidden text-primary sm:inline" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="mt-4 max-w-2xl text-sm text-muted">
        Start with the website check. The paid audit, the fix, the growth work, and monitoring are booked separately.
      </p>
      <form
        className="mt-8 grid gap-3 rounded-xl border border-line bg-surface p-5"
        onSubmit={async (e) => {
          e.preventDefault();
          setBusy(true);
          setError("");
          setResult(null);
          try {
            const res = await fetch("/api/growth-check", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ url, business }),
            });
            const data = (await res.json()) as { overall?: Status; findings?: Finding[]; finalUrl?: string; error?: string };
            if (!res.ok || !data.findings || !data.overall) {
              setError(data.error ?? "The check failed.");
            } else {
              setResult({ overall: data.overall, findings: data.findings, finalUrl: data.finalUrl ?? url });
            }
          } catch {
            setError("The check failed.");
          } finally {
            setBusy(false);
          }
        }}
      >
        <label className="text-sm font-semibold">
          Website URL
          <input
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="mt-1 h-11 w-full rounded-sm border border-line bg-paper px-3 text-sm"
          />
        </label>
        <label className="text-sm font-semibold">
          What does the business do? (optional)
          <input
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder="For example: website support for small firms"
            className="mt-1 h-11 w-full rounded-sm border border-line bg-paper px-3 text-sm"
          />
        </label>
        <p className="text-sm text-muted">
          The website address, and the optional description if you add one, are sent so this check can read the public page. They are not saved as an account or an enquiry.{" "}
          <Link to="/privacy" className="font-semibold underline decoration-line underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
        <button type="submit" disabled={busy} className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-fg">
          {busy ? "Checking" : "Check website"}
        </button>
      </form>
      {error ? <p className="mt-4 text-sm text-danger">{error}</p> : null}
      {result ? (
        <section className="mt-8">
          <h2 className="font-display text-3xl">Your Website Growth Check</h2>
          <p className="mt-2 text-sm font-semibold">Overall website status: {result.overall}</p>
          <p className="mt-2 max-w-2xl text-muted">
            We identified opportunities that may be limiting this website’s commercial potential. Page read: {result.finalUrl}
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-surface">
                <tr>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Area</th>
                  <th className="px-4 py-3 font-semibold">What it means</th>
                </tr>
              </thead>
              <tbody>
                {result.findings.map((item) => (
                  <tr key={item.area} className="border-t border-line align-top">
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-sm px-2 py-1 text-xs font-semibold ${tone[item.status]}`}>{item.status}</span>
                    </td>
                    <td className="px-4 py-3 font-semibold">{item.area}</td>
                    <td className="px-4 py-3 text-muted">
                      <p>{item.summary}</p>
                      <p className="mt-1">{item.meaning}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 rounded-xl border border-line bg-surface p-5">
            <p className="font-semibold">This was the website check.</p>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Next is a paid audit, then the fix, the growth work, and monitoring. Those steps are booked separately. This check does not include them.
            </p>
            <Link to="/contact" search={{ topic: "Website growth audit" }} className="mt-4 inline-flex h-11 items-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-fg">
              Book the paid audit
            </Link>
          </div>
        </section>
      ) : null}
    </div>
  );
}
