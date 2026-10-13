import { createFileRoute } from "@tanstack/react-router";
import { PolicyDocument } from "@/components/site/policy-document";
import { cookiePage } from "@/lib/legal";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Automation Flow Lab" },
      { name: "description", content: cookiePage.description },
    ],
  }),
  component: () => <PolicyDocument page={cookiePage} />,
});
