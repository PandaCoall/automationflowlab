import { Link } from "@tanstack/react-router";

export function ToolOpen({ slug, label, className }: { slug: string; label: string; className: string }) {
  if (slug === "cert-batch") {
    return (
      <Link to="/tools/cert-batch" className={className}>
        {label}
      </Link>
    );
  }
  if (slug === "license-compare") {
    return (
      <Link to="/tools/license-compare" className={className}>
        {label}
      </Link>
    );
  }
  return (
    <Link to="/tools/play/$slug" params={{ slug }} className={className}>
      {label}
    </Link>
  );
}
