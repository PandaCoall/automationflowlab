import { createFileRoute } from "@tanstack/react-router";
import { PolicyDocument } from "@/components/site/policy-document";
import { communityPage } from "@/lib/legal";

export const Route = createFileRoute("/community-standards")({
  head: () => ({
    meta: [
      { title: "Community Standards — Automation Flow Lab" },
      { name: "description", content: communityPage.description },
    ],
  }),
  component: () => <PolicyDocument page={communityPage} />,
});
