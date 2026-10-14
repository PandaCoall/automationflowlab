import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ToolOpen } from "@/components/site/tool-open";
import { PageIntro } from "@/components/site/frame";
import { track } from "@/lib/analytics";
import { tools } from "@/lib/site-content";

export const Route = createFileRoute("/tools/")({
  head: () => ({
    meta: [
      { title: "Tools — Automation Flow Lab" },
      {
        name: "description",
        content: "Practical tools from Automation Flow Lab to help businesses make better technology and growth decisions.",
      },
    ],
    links: [{ rel: "canonical", href: "https://automationflowlab.com/tools" }],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  const available = tools.filter((tool) => tool.status === "available");
  useEffect(() => {
    track("tools_page_viewed");
  }, []);

  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="Tools"
        title="Tools"
        lede="Practical tools from Automation Flow Lab to help businesses make better technology and growth decisions."
      />
      <ul className="mx-auto grid w-full max-w-6xl gap-4 px-5 md:grid-cols-2">
        {available.map((tool) => (
          <li key={tool.slug} className="flex flex-col rounded-xl border border-line bg-surface p-6">
            <h2 className="font-display text-2xl">{tool.name}</h2>
            <p className="mt-3 flex-1 text-sm text-muted">{tool.summary}</p>
            <ToolOpen slug={tool.slug} label={`Open ${tool.name}`} className="mt-5 inline-flex h-11 items-center font-semibold text-primary" />
          </li>
        ))}
      </ul>
    </div>
  );
}
