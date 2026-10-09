import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { UserButton } from "@/lib/auth/gates";
import { nav, site } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { Mark } from "@/components/site/mark";

function isActive(pathname: string, to: string) {
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function goBack() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
      return;
    }
    router.navigate({ to: pathname.startsWith("/tools/") ? "/tools" : "/" });
  }

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-paper">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-5">
          <div className="flex min-w-0 items-center gap-2">
            {pathname !== "/" ? (
              <button
                type="button"
                onClick={goBack}
                className="grid size-11 shrink-0 place-items-center rounded-sm border border-line bg-surface text-ink"
              >
                <ArrowLeft aria-hidden="true" />
                <span className="sr-only">Back</span>
              </button>
            ) : null}
            <Link to="/" className="flex min-w-0 items-center gap-2 font-display text-lg text-ink">
            <Mark className="size-8 text-primary" />
            <span className="truncate">{site.name}</span>
          </Link>
          </div>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                aria-current={isActive(pathname, item.to) ? "page" : undefined}
                className={cn(
                  "rounded-sm px-3 py-2 text-sm font-semibold",
                  isActive(pathname, item.to) ? "bg-surface text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <UserButton />
          </div>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-sm border border-line bg-surface lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button type="button" className="absolute inset-0 bg-ink/40" aria-label="Close menu" onClick={() => setOpen(false)} />
          <nav
            id="mobile-nav"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-line bg-paper shadow-xl"
            aria-label="Mobile"
          >
            <div className="flex h-16 items-center justify-between border-b border-line px-5">
              <span className="font-display text-lg">{site.name}</span>
              <button
                type="button"
                className="grid size-11 place-items-center rounded-sm border border-line bg-surface"
                onClick={() => setOpen(false)}
              >
                <X aria-hidden="true" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto px-3 py-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    aria-current={isActive(pathname, item.to) ? "page" : undefined}
                    className={cn(
                      "flex h-12 items-center rounded-sm px-2 text-base font-semibold",
                      isActive(pathname, item.to) ? "bg-surface text-ink" : "text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-line px-5 py-3">
              <UserButton />
            </div>
          </nav>
        </div>
      ) : null}
      <main id="content" className="flex-1">
        {children}
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-xl">{site.name}</p>
            <p className="mt-2 max-w-sm text-sm text-muted">{site.positioning}</p>
            <p className="mt-4 text-sm">
              <a className="font-semibold underline decoration-line underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="mt-1 font-mono text-xs text-muted">{site.domain}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Pages</p>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-muted hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">More</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted hover:text-ink">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-muted hover:text-ink">
                  Submission inbox
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto w-full max-w-6xl px-5 pb-8 text-xs text-muted">
          Information on this site is for general use at your own discretion. Automation Flow Lab is not liable for any loss, cost, or decision made from it. Check the original source before you buy or rely on a figure.
        </p>
      </footer>
    </div>
  );
}

export function PageIntro({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return (
    <header className="mx-auto w-full max-w-6xl px-5 pb-10 pt-12 md:pt-16">
      <p className="text-sm font-semibold text-primary">{eyebrow}</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl text-ink md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{lede}</p>
    </header>
  );
}
