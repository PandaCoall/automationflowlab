import { createFileRoute } from '@tanstack/react-router'
import { ToolOpen } from "@/components/site/tool-open";
import { PageIntro } from "@/components/site/frame";
import { StatusPill } from "@/components/site/status-pill";
import { tools } from "@/lib/site-content";

export const Route = createFileRoute("/tools/")({
  head: () => ({
    meta: [
      { title: "Tools — Automation Flow Lab" },
      {
        name: "description",
        content:
          "IT tools you can try in the browser. Cert Batch is the live product. The others are demos: your inputs stay in this browser and are not written to your live systems.",
      },
    ],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="Tools"
        title="IT tools you can try."
        lede="Cert Batch and the Microsoft licence comparison are live. The rest are demos. A demo does not sign into Microsoft, Zoho, or your mailbox."
      />
      <ul className="mx-auto grid w-full max-w-6xl gap-4 px-5 md:grid-cols-2">
        {tools.map((tool) => (
          <li key={tool.slug} className="flex flex-col rounded-xl border border-line bg-surface p-6">
            <StatusPill status={tool.status} />
            <h2 className="mt-4 font-display text-2xl">{tool.name}</h2>
            <p className="mt-3 text-sm font-semibold">Who it is for</p>
            <p className="mt-1 text-sm text-muted">{tool.audience}</p>
            <p className="mt-4 flex-1 text-sm text-muted">{tool.summary}</p>
            <ToolOpen
              slug={tool.slug}
              label={tool.status === "available" ? `Open ${tool.name}` : "Try the demo"}
              className="mt-5 inline-flex h-11 items-center font-semibold text-primary"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
