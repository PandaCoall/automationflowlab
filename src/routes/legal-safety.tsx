import { createFileRoute } from "@tanstack/react-router";
import { PolicyDocument } from "@/components/site/policy-document";
import { safetyPage } from "@/lib/legal";

export const Route = createFileRoute("/legal-safety")({
  head: () => ({
    meta: [
      { title: "Legal and Safety — Automation Flow Lab" },
      { name: "description", content: safetyPage.description },
    ],
  }),
  component: () => <PolicyDocument page={safetyPage} />,
});
