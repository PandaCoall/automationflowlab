import { createFileRoute } from "@tanstack/react-router";
import { PolicyDocument } from "@/components/site/policy-document";
import { copyrightPage } from "@/lib/legal";

export const Route = createFileRoute("/copyright")({
  head: () => ({
    meta: [
      { title: "Copyright Policy — Automation Flow Lab" },
      { name: "description", content: copyrightPage.description },
    ],
  }),
  component: () => <PolicyDocument page={copyrightPage} />,
});
