import { useState } from "react";
import * as XLSX from "xlsx";
import { Link } from "@tanstack/react-router";

const field = "mt-1 w-full rounded-sm border border-line bg-surface px-3 py-2 text-sm text-ink";
const btn = "inline-flex h-11 items-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-fg";
const ghost = "inline-flex h-11 items-center rounded-sm border border-line bg-surface px-4 text-sm font-semibold text-ink";

export function DemoNote({ children }: { children: string }) {
  return <p className="mt-3 max-w-2xl text-sm text-muted">{children}</p>;
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-line bg-surface p-5">
      <h2 className="font-display text-2xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function AutomationWatchDemo() {
  const [items, setItems] = useState([
    { name: "Nightly Zoho sync", ok: true, at: "Today 02:14", note: "" },
    { name: "Form to mailbox", ok: false, at: "Yesterday 18:02", note: "Mailbox rejected the connector." },
  ]);
  const [name, setName] = useState("");
  return (
    <div className="grid gap-4">
      <DemoNote>Add the workflows you actually run. Mark a run as healthy or failed. Nothing here calls your automation platform.</DemoNote>
      <Panel title="Workflows">
        <form
          className="flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (!name.trim()) return;
            setItems((list) => [{ name: name.trim(), ok: true, at: "Not run yet", note: "" }, ...list]);
            setName("");
          }}
        >
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder="Workflow name" aria-label="Workflow name" />
          <button className={btn} type="submit">Add</button>
        </form>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {items.map((item, i) => (
            <li key={item.name + i} className="grid gap-2 py-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold">{item.name}</p>
                <span className={item.ok ? "text-sm font-semibold text-primary" : "text-sm font-semibold text-danger"}>{item.ok ? "Healthy" : "Failed"}</span>
              </div>
              <p className="text-sm text-muted">Last check: {item.at}</p>
              <div className="flex flex-wrap gap-2">
                <button type="button" className={ghost} onClick={() => setItems((list) => list.map((row, j) => (j === i ? { ...row, ok: true, at: "Just now" } : row)))}>Mark healthy</button>
                <button type="button" className={ghost} onClick={() => setItems((list) => list.map((row, j) => (j === i ? { ...row, ok: false, at: "Just now" } : row)))}>Mark failed</button>
              </div>
              <label className="text-sm font-semibold">
                Note after a fail
                <input className={field} value={item.note} onChange={(e) => setItems((list) => list.map((row, j) => (j === i ? { ...row, note: e.target.value } : row)))} />
              </label>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

type SheetReport = { name: string; rows: number; formulas: number; errors: string[]; external: number };

export function ExcelHealthDemo() {
  const [reports, setReports] = useState<SheetReport[]>([]);
  const [fileName, setFileName] = useState("");
  return (
    <div className="grid gap-4">
      <DemoNote>Upload a workbook. The check runs in this browser. The file is not uploaded to a server.</DemoNote>
      <Panel title="Workbook">
        <input
          className="text-sm"
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            setFileName(file.name);
            const book = XLSX.read(await file.arrayBuffer(), { type: "array" });
            setReports(
              book.SheetNames.map((name) => {
                const sheet = book.Sheets[name];
                const ref = sheet["!ref"];
                const range = ref ? XLSX.utils.decode_range(ref) : null;
                const rows = range ? range.e.r - range.s.r : 0;
                let formulas = 0;
                let external = 0;
                const errors: string[] = [];
                for (const key of Object.keys(sheet)) {
                  if (key.startsWith("!")) continue;
                  const cell = sheet[key] as { f?: string; v?: unknown; t?: string };
                  if (cell.f) {
                    formulas += 1;
                    if (/[[\]]/.test(cell.f) || /https?:/i.test(cell.f)) external += 1;
                    if (/#REF!|#NAME\?|#VALUE!|#DIV\/0!|#N\/A/.test(String(cell.v ?? ""))) errors.push(`${key} ${cell.v}`);
                  }
                  if (typeof cell.v === "string" && /#REF!|#NAME\?|#VALUE!|#DIV\/0!/.test(cell.v)) errors.push(`${key} ${cell.v}`);
                }
                return { name, rows, formulas, errors: errors.slice(0, 8), external };
              }),
            );
          }}
        />
        {fileName ? <p className="mt-3 text-sm font-semibold">{fileName}</p> : null}
        <ul className="mt-4 space-y-3">
          {reports.map((sheet) => (
            <li key={sheet.name} className="rounded-lg border border-line p-3 text-sm">
              <p className="font-semibold">{sheet.name}</p>
              <p className="text-muted">{sheet.rows} rows · {sheet.formulas} formulas · {sheet.external} formulas that look external</p>
              <p className="mt-1">{sheet.errors.length ? `Fix first: ${sheet.errors.join("; ")}` : "No obvious error values on this sheet."}</p>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

export function FormInboxDemo() {
  const [rows, setRows] = useState([{ form: "Contact", dest: "info@example.com", state: "Unknown" }]);
  const [form, setForm] = useState("");
  const [dest, setDest] = useState("");
  return (
    <div className="grid gap-4">
      <DemoNote>Name each form and where it should land. Mark the last check. This does not send a real test message.</DemoNote>
      <Panel title="Forms">
        <form
          className="grid gap-2 sm:grid-cols-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (!form.trim() || !dest.trim()) return;
            setRows((list) => [{ form: form.trim(), dest: dest.trim(), state: "Unknown" }, ...list]);
            setForm("");
            setDest("");
          }}
        >
          <input className={field} value={form} onChange={(e) => setForm(e.target.value)} placeholder="Form name" aria-label="Form name" />
          <input className={field} value={dest} onChange={(e) => setDest(e.target.value)} placeholder="Destination" aria-label="Destination" />
          <button className={btn} type="submit">Add</button>
        </form>
        <ul className="mt-4 divide-y divide-line">
          {rows.map((row, i) => (
            <li key={row.form + i} className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold">{row.form}</p>
                <p className="text-sm text-muted">{row.dest} · {row.state}</p>
              </div>
              <div className="flex gap-2">
                <button type="button" className={ghost} onClick={() => setRows((list) => list.map((r, j) => (j === i ? { ...r, state: "Received" } : r)))}>Received</button>
                <button type="button" className={ghost} onClick={() => setRows((list) => list.map((r, j) => (j === i ? { ...r, state: "Failed" } : r)))}>Failed</button>
              </div>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

type DnsRow = { type: string; present: boolean; detail: string };

export function MailFlowDemo() {
  const [domain, setDomain] = useState("");
  const [rows, setRows] = useState<DnsRow[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function lookup(name: string, type: string) {
    const url = `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${type}`;
    const res = await fetch(url, { headers: { accept: "application/dns-json" } });
    if (!res.ok) throw new Error("DNS lookup failed");
    const data = (await res.json()) as { Answer?: { data: string }[] };
    return (data.Answer ?? []).map((a) => a.data.replace(/^"|"$/g, ""));
  }
  return (
    <div className="grid gap-4">
      <DemoNote>Looks up public mail records for a domain you type. It does not send mail and it does not log into Zoho.</DemoNote>
      <Panel title="Domain">
        <form
          className="flex flex-col gap-2 sm:flex-row"
          onSubmit={async (e) => {
            e.preventDefault();
            const host = domain.trim().replace(/^https?:\/\//, "").split("/")[0];
            if (!host) return;
            setBusy(true);
            setError("");
            try {
              const txt = await lookup(host, "TXT");
              const spf = txt.find((r) => r.toLowerCase().includes("v=spf1"));
              const dmarc = await lookup(`_dmarc.${host}`, "TXT");
              const dkimSelectors = ["google", "selector1", "zoho", "s1"];
              const dkimHits: string[] = [];
              for (const sel of dkimSelectors) {
                const hit = await lookup(`${sel}._domainkey.${host}`, "TXT");
                if (hit.some((r) => r.toLowerCase().includes("v=dkim1"))) dkimHits.push(sel);
              }
              setRows([
                { type: "SPF", present: Boolean(spf), detail: spf ?? "No SPF TXT record" },
                { type: "DMARC", present: dmarc.some((r) => r.toLowerCase().includes("v=dmarc1")), detail: dmarc[0] ?? "No DMARC record" },
                { type: "DKIM", present: dkimHits.length > 0, detail: dkimHits.length ? `Found on ${dkimHits.join(", ")}` : "Not found on google, selector1, zoho, or s1" },
              ]);
            } catch {
              setError("Could not look up that domain. Check the name and try again.");
              setRows([]);
            } finally {
              setBusy(false);
            }
          }}
        >
          <input className={field} value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="yourdomain.com" aria-label="Domain" />
          <button className={btn} type="submit" disabled={busy}>{busy ? "Checking" : "Check records"}</button>
        </form>
        {error ? <p className="mt-3 text-sm text-danger">{error}</p> : null}
        <ul className="mt-4 space-y-2 text-sm">
          {rows.map((row) => (
            <li key={row.type} className="rounded-lg border border-line p-3">
              <p className="font-semibold">{row.type}: {row.present ? "Present" : "Missing"}</p>
              <p className="text-muted">{row.detail}</p>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

export function SharePointBuilderDemo() {
  const [libs, setLibs] = useState([{ name: "Client files", columns: "Client, Status, Current", who: "Delivery team" }]);
  const [name, setName] = useState("");
  const [columns, setColumns] = useState("");
  const [who, setWho] = useState("");
  const text = libs.map((l, i) => `${i + 1}. ${l.name}\nColumns: ${l.columns}\nWho can see it: ${l.who}`).join("\n\n");
  return (
    <div className="grid gap-4">
      <DemoNote>Build the library plan here. Copy it out. This page does not create a SharePoint site.</DemoNote>
      <Panel title="Libraries">
        <form
          className="grid gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (!name.trim()) return;
            setLibs((list) => [...list, { name: name.trim(), columns: columns.trim(), who: who.trim() }]);
            setName("");
            setColumns("");
            setWho("");
          }}
        >
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder="Library name" aria-label="Library name" />
          <input className={field} value={columns} onChange={(e) => setColumns(e.target.value)} placeholder="Columns, comma separated" aria-label="Columns" />
          <input className={field} value={who} onChange={(e) => setWho(e.target.value)} placeholder="Who should see it" aria-label="Who should see it" />
          <button className={btn} type="submit">Add library</button>
        </form>
        <pre className="mt-4 whitespace-pre-wrap text-sm">{text}</pre>
        <button type="button" className={`${ghost} mt-3`} onClick={() => navigator.clipboard.writeText(text)}>Copy build list</button>
      </Panel>
    </div>
  );
}

type Change = { title: string; kind: string; owner: string; status: string; reason: string };

export function ChangeRequestDemo() {
  const [items, setItems] = useState<Change[]>([
    { title: "Publish the careers page", kind: "Publish", owner: "Unassigned", status: "Waiting", reason: "" },
  ]);
  const [title, setTitle] = useState("");
  const [kind, setKind] = useState("Access");
  return (
    <div className="grid gap-4">
      <DemoNote>A queue for access, publish, and system changes. Decisions stay in this browser.</DemoNote>
      <Panel title="Queue">
        <form
          className="grid gap-2 sm:grid-cols-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (!title.trim()) return;
            setItems((list) => [{ title: title.trim(), kind, owner: "Unassigned", status: "Waiting", reason: "" }, ...list]);
            setTitle("");
          }}
        >
          <input className={field} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What needs to change" aria-label="Request" />
          <select className={field} value={kind} onChange={(e) => setKind(e.target.value)} aria-label="Kind">
            <option>Access</option>
            <option>Publish</option>
            <option>System change</option>
          </select>
          <button className={btn} type="submit">Add request</button>
        </form>
        <ul className="mt-4 space-y-4">
          {items.map((item, i) => (
            <li key={item.title + i} className="rounded-lg border border-line p-3 text-sm">
              <p className="font-semibold">{item.title}</p>
              <p className="text-muted">{item.kind} · {item.status} · {item.owner}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Yes", "No", "Send back"].map((status) => (
                  <button key={status} type="button" className={ghost} onClick={() => setItems((list) => list.map((row, j) => (j === i ? { ...row, status, owner: "You" } : row)))}>{status}</button>
                ))}
              </div>
              <input className={field} placeholder="Short reason" value={item.reason} onChange={(e) => setItems((list) => list.map((row, j) => (j === i ? { ...row, reason: e.target.value } : row)))} />
            </li>
          ))}
        </ul>
      </Panel>
      <p className="text-sm">
        <Link to="/tools" className="font-semibold text-primary">Back to tools</Link>
      </p>
    </div>
  );
}

export const demos = {
  "automation-watch": AutomationWatchDemo,
  "excel-health-check": ExcelHealthDemo,
  "form-to-inbox-check": FormInboxDemo,
  "mail-flow-check": MailFlowDemo,
  "sharepoint-library-builder": SharePointBuilderDemo,
  "change-request": ChangeRequestDemo,
} as const;

export type DemoSlug = keyof typeof demos;
