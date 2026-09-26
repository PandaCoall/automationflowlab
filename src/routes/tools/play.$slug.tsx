import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { demos, type DemoSlug } from "@/components/demos/play";
import { getTool } from "@/lib/site-content";

export const Route = createFileRoute("/tools/play/$slug")({
  loader: ({ params }) => {
    const tool = getTool(params.slug);
    if (!tool || !(params.slug in demos)) throw notFound();
    return { tool };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.tool.name} demo — Automation Flow Lab` : "Tool demo" },
      { name: "description", content: loaderData?.tool.summary ?? "Try a tool demo." },
    ],
  }),
  component: PlayPage,
});

function PlayPage() {
  const { tool } = Route.useLoaderData();
  const Demo = demos[tool.slug as DemoSlug];
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10">
      <Link to="/tools" className="text-sm font-semibold text-primary">
        All tools
      </Link>
      <h1 className="mt-3 font-display text-4xl">{tool.name}</h1>
      <p className="mt-2 max-w-2xl text-muted">{tool.summary}</p>
      <div className="mt-8">
        <Demo />
      </div>
    </div>
  );
}
