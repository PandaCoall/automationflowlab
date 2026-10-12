import { Link } from "@tanstack/react-router";

export function ToolOpen({ slug, label, className }: { slug: string; label: string; className: string }) {
  if (slug === "certflow") {
    return (
      <Link to="/tools/certflow" className={className}>
        {label}
      </Link>
    );
  }
  if (slug === "growth-check") {
    return (
      <Link to="/tools/growth-check" className={className}>
        {label}
      </Link>
    );
  }
  if (slug === "zoho-fit") {
    return (
      <Link to="/tools/zoho-fit" className={className}>
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
