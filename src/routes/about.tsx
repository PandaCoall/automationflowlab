import { Link, createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/frame";
import { contentSettings } from "@/lib/content-settings";
import { serviceGroups, site } from "@/lib/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Automation Flow Lab" },
      {
        name: "description",
        content: site.description,
      },
    ],
    links: [{ rel: "canonical", href: "https://automationflowlab.com/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const person = [contentSettings.ownerName, contentSettings.ownerRole].filter(Boolean).join(", ");
  return (
    <div className="pb-20">
      <PageIntro eyebrow="About" title="Find it. Fix it. Grow it." lede={site.positioning} />
      <div className="mx-auto w-full max-w-6xl space-y-10 px-5">
        <section className="max-w-3xl">
          <h2 className="font-display text-2xl">What we do</h2>
          <p className="mt-3 text-muted">
            The first step for most businesses is a Website Growth Check, then a paid audit where the findings justify it. Implementation can be the website itself, or the systems around the work: workflows, Microsoft 365, SharePoint, Excel, Zoho, analytics, portals and monitoring.
          </p>
          <p className="mt-3 text-muted">Automation remains part of the work. It is not the whole of the company.</p>
        </section>
        <section className="max-w-3xl">
          <h2 className="font-display text-2xl">How a website engagement runs</h2>
          <ol className="mt-4 space-y-3 text-muted">
            <li>
              <span className="font-semibold text-ink">Audit. </span>
              Find what is holding the business back.
            </li>
            <li>
              <span className="font-semibold text-ink">Fix. </span>
              Correct the problems affecting trust, visibility and conversion.
            </li>
            <li>
              <span className="font-semibold text-ink">Grow. </span>
              Improve search visibility, customer journeys and market reach.
            </li>
            <li>
              <span className="font-semibold text-ink">Monitor. </span>
              Track performance, issues and new opportunities.
            </li>
          </ol>
          <Link to="/tools/growth-check" className="mt-4 inline-flex h-11 items-center font-semibold text-primary">
            Start with the Website Growth Check
          </Link>
        </section>
        <section className="max-w-3xl">
          <h2 className="font-display text-2xl">The work, by outcome</h2>
          <ul className="mt-4 space-y-4">
            {serviceGroups.map((group) => (
              <li key={group.id}>
                <p className="font-semibold">{group.name}</p>
                <p className="text-sm text-muted">{group.items.map((item) => item.name).join(" · ")}</p>
              </li>
            ))}
          </ul>
          <Link to="/services" className="mt-4 inline-flex h-11 items-center font-semibold text-primary">
            See services
          </Link>
        </section>
        {person || contentSettings.biography || contentSettings.credentials || contentSettings.location ? (
          <section className="max-w-3xl">
            <h2 className="font-display text-2xl">Who you are writing to</h2>
            {person ? <p className="mt-3 text-ink">{person}</p> : null}
            {contentSettings.biography ? <p className="mt-3 text-muted">{contentSettings.biography}</p> : null}
            {contentSettings.credentials ? <p className="mt-3 text-muted">{contentSettings.credentials}</p> : null}
            {contentSettings.location ? <p className="mt-3 text-muted">{contentSettings.location}</p> : null}
          </section>
        ) : null}
        <section className="max-w-3xl">
          <h2 className="font-display text-2xl">Contact</h2>
          <p className="mt-3 text-muted">
            Email{" "}
            <a className="font-semibold text-ink underline decoration-line underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            or use the contact form.
          </p>
        </section>
      </div>
    </div>
  );
}
