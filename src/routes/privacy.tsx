import { createFileRoute } from "@tanstack/react-router";
import { PolicyDocument } from "@/components/site/policy-document";
import { privacyPage } from "@/lib/legal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Automation Flow Lab" },
      { name: "description", content: privacyPage.description },
    ],
  }),
  component: () => <PolicyDocument page={privacyPage} />,
});
