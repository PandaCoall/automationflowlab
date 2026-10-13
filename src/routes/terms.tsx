import { createFileRoute } from "@tanstack/react-router";
import { PolicyDocument } from "@/components/site/policy-document";
import { termsPage } from "@/lib/legal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Automation Flow Lab" },
      { name: "description", content: termsPage.description },
    ],
  }),
  component: () => <PolicyDocument page={termsPage} />,
});
