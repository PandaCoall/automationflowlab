import { Link } from "@tanstack/react-router";
import { useId, useState } from "react";
import { track } from "@/lib/analytics";
import type { Finding, Status } from "@/lib/growth/scan";

const tone: Record<Status, string> = {
  CRITICAL: "bg-primary text-primary-fg",
  "NEEDS WORK": "border border-primary text-primary",
  WORKING: "border border-line text-ink",
};

const overallCopy: Record<Status, string> = {
  CRITICAL: "We identified issues that may be stopping this website from being found, trusted, or chosen.",
  "NEEDS WORK": "We identified several areas that may be limiting this website’s ability to attract, convince, or convert potential customers.",
  WORKING: "This initial check did not find a critical issue on the page we read. A full audit can still find opportunities this short check does not cover.",
};

export function StatusMark({ status }: { status: Status }) {
  return <span className={`inline-flex rounded-sm px-2 py-1 text-xs font-semibold ${tone[status]}`}>{status}</span>;
}

export function FindingCard({ status, area, summary, meaning }: Finding) {
  return (
    <article className="rounded-xl border border-line bg-surface p-5">
      <div className="flex flex-wrap items-center gap-3">
        <StatusMark status={status} />
        <h3 className="font-sans text-base font-semibold">{area}</h3>
      </div>
      <p className="mt-3 text-sm">{summary}</p>
      <p className="mt-3 text-sm font-semibold">What this may mean</p>
      <p className="mt-1 text-sm text-muted">{meaning}</p>
    </article>
  );
}

export function WebsiteCheck({ source, id = "website-check" }: { source: "homepage" | "tool"; id?: string }) {
  const fieldId = useId();
  const [url, setUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ overall: Status; findings: Finding[] } | null>(null);

  return (
    <div id={id}>
      <form
        className="rounded-xl border border-line bg-surface p-4 sm:p-5"
        onSubmit={async (event) => {
          event.preventDefault();
          setError("");
          setResult(null);
          const raw = url.trim();
          let parsed: URL;
          try {
            parsed = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
          } catch {
            setError("Enter a website address, such as yourbusiness.com.");
            return;
          }
          if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
            setError("Enter a public website address.");
            return;
          }
          setBusy(true);
          track("growth_check_started", { source });
          try {
            const response = await fetch("/api/growth-check", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ url: parsed.toString() }),
            });
            const data = (await response.json()) as { overall?: Status; findings?: Finding[]; error?: string };
            if (!response.ok || !data.findings || !data.overall) {
              setError(data.error ?? "The check could not be completed.");
            } else {
              setResult({ overall: data.overall, findings: data.findings.slice(0, 5) });
              track("growth_check_completed", { source, status: data.overall });
            }
          } catch {
            setError("The check could not be completed.");
          } finally {
            setBusy(false);
          }
        }}
      >
        <label htmlFor={fieldId} className="text-sm font-semibold">
          Website address
        </label>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <input
            id={fieldId}
            name="url"
            type="url"
            inputMode="url"
            autoComplete="url"
            required
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="https://yourwebsite.com"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${fieldId}-error` : `${fieldId}-note`}
            className="h-12 w-full rounded-sm border border-line bg-paper px-3 text-base"
          />
          <button
            type="submit"
            disabled={busy}
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-sm bg-primary px-5 text-base font-semibold text-primary-fg sm:min-w-48"
          >
            {busy ? "Checking" : "Check my website"}
          </button>
        </div>
        <p id={`${fieldId}-note`} className="mt-3 text-sm text-muted">
          The address is used to read the public page and is not saved as an account.{" "}
          <Link to="/privacy" className="font-semibold underline decoration-line underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
      {error ? (
        <p id={`${fieldId}-error`} role="alert" className="mt-3 text-sm text-danger">
          {error}
        </p>
      ) : null}
      {result ? (
        <section className="mt-8" aria-live="polite">
          <p className="text-sm font-semibold text-primary">Your website status</p>
          <p className="mt-2 font-display text-4xl">{result.overall}</p>
          <p className="mt-3 max-w-2xl text-muted">{overallCopy[result.overall]}</p>
          <div className="mt-6 grid gap-4">
            {result.findings.map((item) => (
              <FindingCard key={`${item.area}-${item.status}`} {...item} />
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-line bg-paper p-5">
            <h2 className="font-display text-3xl">This is only your initial check.</h2>
            <p className="mt-3 max-w-2xl text-muted">
              We found the issues most deserving your attention first. A full Website Revenue & Growth Audit looks deeper into search visibility, conversion, technical health, content, trust, competitors, and growth opportunities.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/audit"
                onClick={() => track("full_audit_cta_clicked", { source })}
                className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-5 text-base font-semibold text-primary-fg"
              >
                Get my full website audit
              </Link>
              <Link
                to="/contact"
                search={{ topic: "Website Revenue & Growth Audit" }}
                onClick={() => track("contact_cta_clicked", { source })}
                className="inline-flex h-12 items-center justify-center rounded-sm border border-line bg-surface px-5 text-base font-semibold"
              >
                Talk to Automation Flow Lab
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
