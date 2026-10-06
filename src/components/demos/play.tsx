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

const sampleFlows = [
  {
    name: "Nightly Zoho contact update",
    link: "https://flow.example/zoho/nightly-contacts",
    raw: "401 Unauthorized. The OAuth token has expired.",
    means: "The flow is signed out of Zoho. Every step after the sign-in was refused.",
    why: "Connections expire. A password change or a removed app login does the same thing.",
  },
  {
    name: "Row-by-row invoice create",
    link: "https://flow.example/books/invoice-loop",
    raw: "429 Too Many Requests. Retry-After: 120.",
    means: "The flow is fine. Zoho told it to slow down. It sent more calls than that minute allows.",
    why: "A loop that creates one invoice per row, with no pause, hits the limit.",
  },
  {
    name: "Form to new CRM lead",
    link: "https://flow.example/crm/form-to-lead",
    raw: "Expression evaluation failed. Property 'Email' doesn't exist on the incoming item.",
    means: "This step asked for an email, and this submission did not have one. The flow cannot invent the field.",
    why: "The form left email optional, or an earlier step renamed the field.",
  },
  {
    name: "Update the deal owner",
    link: "https://flow.example/crm/deal-owner",
    raw: "404 Resource not found. Deal id 44102 does not exist.",
    means: "The flow tried to change a deal that is no longer there.",
    why: "The deal was deleted after the flow started and before this step ran.",
  },
  {
    name: "Copy the weekly sheet",
    link: "https://flow.example/excel/weekly-copy",
    raw: "The operation timed out after 120 seconds.",
    means: "The other side did not answer in time, so the flow stopped waiting. It did not finish the copy.",
    why: "The file is large, or the service was slow. The flow treats silence as a failure.",
  },
  {
    name: "Notify only when status is Won",
    link: "https://flow.example/crm/won-alert",
    raw: "Action skipped. Condition result: false.",
    means: "This is not a crash. The check said no, so the steps under it did not run.",
    why: "The status on the record is not exactly Won. A different spelling, or a blank status, takes the no path every time.",
  },
  {
    name: "Create the customer in Books",
    link: "https://flow.example/books/new-customer",
    raw: "409 Conflict. A record with this email already exists.",
    means: "The flow tried to create a customer who is already in Books.",
    why: "The flow always creates. It does not look up the email and update the existing customer.",
  },
];

export function AutomationWatchDemo() {
  const [open, setOpen] = useState(0);
  const flow = sampleFlows[open];
  return (
    <div className="grid gap-4">
      <DemoNote>These are sample flows with sample links. Open one to read the error and why it happened. You cannot add your own link here.</DemoNote>
      <div className="grid gap-4 lg:grid-cols-[240px_1fr]">
        <ul className="grid gap-2">
          {sampleFlows.map((item, index) => (
            <li key={item.name}>
              <button
                type="button"
                onClick={() => setOpen(index)}
                className={`w-full rounded-lg border px-3 py-2 text-left text-sm ${index === open ? "border-primary bg-surface font-semibold" : "border-line bg-surface"}`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <Panel title={flow.name}>
          <p className="text-sm text-muted">Sample link</p>
          <p className="mt-1 break-all font-mono text-sm">{flow.link}</p>
          <p className="mt-4 text-sm font-semibold">What the platform said</p>
          <p className="mt-1 text-sm text-danger">{flow.raw}</p>
          <p className="mt-4 text-sm font-semibold">What that means</p>
          <p className="mt-1 text-sm text-muted">{flow.means}</p>
          <p className="mt-4 text-sm font-semibold">Why it happens</p>
          <p className="mt-1 text-sm text-muted">{flow.why}</p>
        </Panel>
      </div>
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

const folders = ["Incoming", "Current", "Filed"] as const;

export function SharePointBuilderDemo() {
  const [files, setFiles] = useState([
    { id: "quote", name: "Quote.pdf", client: "North depot", folder: "Incoming" as (typeof folders)[number] },
    { id: "scope", name: "Signed scope.docx", client: "North depot", folder: "Current" as (typeof folders)[number] },
    { id: "old", name: "2024 invoice.pdf", client: "Harbour clinic", folder: "Filed" as (typeof folders)[number] },
  ]);
  const [over, setOver] = useState<string | null>(null);

  function move(id: string, folder: (typeof folders)[number]) {
    setFiles((list) => list.map((file) => (file.id === id ? { ...file, folder } : file)));
  }

  return (
    <div className="grid gap-4">
      <DemoNote>Drag a file into a column. The status follows the move. This does not create a SharePoint site or upload anything.</DemoNote>
      <div className="grid gap-3 md:grid-cols-3">
        {folders.map((folder) => (
          <section
            key={folder}
            className={`min-h-48 rounded-xl border bg-surface p-4 ${over === folder ? "border-primary" : "border-line"}`}
            onDragOver={(e) => {
              e.preventDefault();
              setOver(folder);
            }}
            onDragLeave={() => setOver((current) => (current === folder ? null : current))}
            onDrop={(e) => {
              e.preventDefault();
              const id = e.dataTransfer.getData("text/plain");
              if (id) move(id, folder);
              setOver(null);
            }}
          >
            <h2 className="font-display text-xl">{folder}</h2>
            <ul className="mt-3 space-y-2">
              {files
                .filter((file) => file.folder === folder)
                .map((file) => (
                  <li key={file.id}>
                    <div
                      draggable
                      onDragStart={(e) => e.dataTransfer.setData("text/plain", file.id)}
                      className="cursor-grab rounded-lg border border-line bg-paper p-3 text-sm active:cursor-grabbing"
                    >
                      <p className="font-semibold">{file.name}</p>
                      <p className="text-muted">{file.client}</p>
                      <p className="mt-1 text-xs font-semibold">Status: {folder}</p>
                    </div>
                    <label className="mt-1 block text-xs text-muted">
                      Move
                      <select
                        className={field}
                        value={file.folder}
                        onChange={(e) => move(file.id, e.target.value as (typeof folders)[number])}
                      >
                        {folders.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </label>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
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
  "sharepoint-library-builder": SharePointBuilderDemo,
  "change-request": ChangeRequestDemo,
} as const;

export type DemoSlug = keyof typeof demos;
