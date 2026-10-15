import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { PageIntro } from "@/components/site/frame";
import { track } from "@/lib/analytics";
import { serviceGroups } from "@/lib/site-content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Website Audit, Automation and Business Systems — Automation Flow Lab" },
      {
        name: "description",
        content:
          "Core service: Website Growth Check. Also a website audit, search growth, workflow automation, integration, SharePoint design, client operation portals, Microsoft 365, Excel, Zoho and reporting.",
      },
    ],
    links: [{ rel: "canonical", href: "https://automationflowlab.com/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  useEffect(() => {
    track("service_page_viewed");
  }, []);

  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="Services"
        title="Help organised around the result"
        lede="The main service is the Website Growth Check. Around it: a full website audit, search growth, conversion and monitoring, then workflow automation, integration and configuration, SharePoint design and integration, client operation portals, Microsoft 365, Excel, Zoho, analytics and reporting."
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5">
        {serviceGroups.map((group) => (
          <section key={group.id} aria-labelledby={`${group.id}-heading`}>
            <h2 id={`${group.id}-heading`} className="font-display text-3xl">
              {group.name}
            </h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {group.items.map((item) => (
                <li id={item.slug} key={item.slug} className="scroll-mt-24 grid gap-2 py-4 sm:grid-cols-12 sm:items-center">
                  <div className="sm:col-span-8">
                    <h3 className="font-sans text-base font-semibold">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted">{item.summary}</p>
                  </div>
                  <div className="flex gap-4 sm:col-span-4 sm:justify-end">
                    {item.href ? (
                      <Link to={item.href} className="inline-flex h-11 items-center text-sm font-semibold text-primary">
                        Read the audit
                      </Link>
                    ) : null}
                    <Link
                      to="/contact"
                      search={{ topic: item.enquiryTopic }}
                      onClick={() => track("contact_cta_clicked", { source: "services" })}
                      className="inline-flex h-11 items-center text-sm font-semibold text-primary"
                    >
                      Enquire
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <p className="max-w-2xl text-sm text-muted">
          Starting prices for defined pieces of work are on the{" "}
          <Link to="/pricing" className="font-semibold text-primary">
            pricing
          </Link>{" "}
          page. A final fee is confirmed in writing. We do not guarantee a ranking, a traffic number, or a revenue figure.
        </p>
      </div>
    </div>
  );
}
