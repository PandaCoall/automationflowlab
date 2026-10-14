import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tools/play/$slug")({
  beforeLoad: () => {
    throw redirect({ to: "/tools", statusCode: 301 });
  },
  component: () => null,
});
