import { createFileRoute } from "@tanstack/react-router";
import { CertApp } from "@/components/cert-app";

export const Route = createFileRoute("/tools/certflow")({
  head: () => ({
    meta: [
      { title: "Certflow — Automation Flow Lab" },
      {
        name: "description",
        content: "Upload a learner list, preview the certificate, and run the batch. One PDF per person.",
      },
    ],
  }),
  component: CertflowPage,
});

function CertflowPage() {
  return <CertApp />;
}
