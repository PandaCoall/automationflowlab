import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tools/cert-batch")({
  beforeLoad: () => {
    throw redirect({ to: "/tools/certflow" });
  },
});
