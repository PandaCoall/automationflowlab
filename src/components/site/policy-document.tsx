import { Link } from "@tanstack/react-router";
import { legal, type PolicyPage } from "@/lib/legal";

const linkPattern = /(https?:\/\/[^\s]+|Automationflowlab\.info@proton\.me)/g;

function RichText({ text }: { text: string }) {
  const parts = text.split(linkPattern);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("http://") || part.startsWith("https://")) {
          const href = part.replace(/[).,;]+$/, "");
          const trailing = part.slice(href.length);
          return (
            <span key={index}>
              <a className="font-semibold text-ink underline decoration-line underline-offset-4" href={href}>
                {href}
              </a>
              {trailing}
            </span>
          );
        }
        if (part === legal.email) {
          return (
            <a
              key={index}
              className="font-semibold text-ink underline decoration-line underline-offset-4"
              href={`mailto:${legal.email}`}
            >
              {legal.email}
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export function PolicyDocument({ page }: { page: PolicyPage }) {
  return (
    <article className="pb-20">
      <header className="mx-auto w-full max-w-3xl px-5 pb-8 pt-12 md:pt-16">
        <Link to="/legal" className="text-sm font-semibold text-primary">
          Legal and Policies
        </Link>
        <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">{page.title}</h1>
        <p className="mt-4 text-sm text-muted">Version {legal.version}</p>
        <p className="text-sm text-muted">Effective {legal.effectiveDate}</p>
        <p className="mt-4 text-lg text-muted">{page.description}</p>
      </header>
      <nav className="mx-auto w-full max-w-3xl px-5" aria-label="On this page">
        <h2 className="font-semibold">On this page</h2>
        <ol className="mt-3 space-y-2 text-sm">
          {page.sections.map((item) => (
            <li key={item.id}>
              <a className="font-semibold text-primary" href={`#${item.id}`}>
                {item.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="mx-auto mt-10 w-full max-w-3xl space-y-10 px-5">
        {page.sections.map((item) => (
          <section key={item.id} id={item.id} className="scroll-mt-24">
            <h2 className="font-display text-2xl">{item.heading}</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <p className="mx-auto mt-12 w-full max-w-3xl px-5">
        <Link to="/legal" className="font-semibold text-primary">
          Back to Legal and Policies
        </Link>
      </p>
    </article>
  );
}
