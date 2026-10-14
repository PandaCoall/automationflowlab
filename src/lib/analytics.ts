export type AnalyticsEvent =
  | "growth_check_started"
  | "growth_check_completed"
  | "full_audit_cta_clicked"
  | "contact_cta_clicked"
  | "service_page_viewed"
  | "tools_page_viewed";

type Params = Record<string, string | number | boolean>;

export function track(event: AnalyticsEvent, params: Params = {}) {
  if (typeof window === "undefined") return;
  const detail = { event, ...params };
  window.dispatchEvent(new CustomEvent("afl:analytics", { detail }));
  const host = window as Window & {
    dataLayer?: unknown[];
    gtag?: (command: string, name: string, values?: Params) => void;
  };
  host.dataLayer?.push(detail);
  host.gtag?.("event", event, params);
}
