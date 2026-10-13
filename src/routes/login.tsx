import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageIntro } from "@/components/site/frame";
import { Button } from "@/components/ui/button";
import { GROK_PROVIDERS, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { legal } from "@/lib/legal";
import { attachTermsAcceptance, recordTermsAcceptance } from "@/lib/terms.functions";

const ACCEPTANCE_KEY = "afl-terms-acceptance";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Staff sign-in — Automation Flow Lab" },
      { name: "description", content: "Sign in to the Automation Flow Lab submission inbox. This is not a client portal." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { user, isPending } = useCurrentUserState();
  const [accepted, setAccepted] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!user) return;
    const raw = window.localStorage.getItem(ACCEPTANCE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw) as { id?: string };
    if (!saved.id) return;
    void attachTermsAcceptance({ data: { id: saved.id } }).catch(() => undefined);
  }, [user]);

  async function onAccept(checked: boolean) {
    setError("");
    setAccepted(checked);
    setRecorded(false);
    if (!checked) return;
    setBusy(true);
    try {
      const saved = await recordTermsAcceptance({ data: { version: legal.version, context: "sign-in" } });
      window.localStorage.setItem(
        ACCEPTANCE_KEY,
        JSON.stringify({ id: saved.id, version: saved.version, acceptedAt: new Date().toISOString() }),
      );
      setRecorded(true);
    } catch {
      setAccepted(false);
      setError("The terms acceptance could not be recorded. Sign-in stays closed until it is.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="Staff"
        title="Sign in to the submission inbox"
        lede="This is for reading enquiries sent through the site. It is not a client portal, and it does not open the tools — those workflows are not built yet."
      />
      <div className="mx-auto w-full max-w-md px-5">
        {isPending ? <div className="h-28 rounded-xl border border-line bg-surface" aria-hidden="true" /> : null}
        {!isPending && user ? (
          <div className="rounded-xl border border-line bg-surface p-6">
            <p>You are signed in{user.primaryEmail ? ` as ${user.primaryEmail}` : ""}.</p>
            <Button asChild className="mt-4">
              <Link to="/admin">Open the inbox</Link>
            </Button>
          </div>
        ) : null}
        {!isPending && !user ? (
          <div className="flex flex-col gap-4">
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                className="mt-1 size-5 accent-primary"
                checked={accepted}
                onChange={(event) => void onAccept(event.target.checked)}
              />
              <span>
                I agree to the{" "}
                <Link to="/terms" className="font-semibold underline decoration-line underline-offset-4">
                  Terms of Service
                </Link>{" "}
                (version {legal.version}). The{" "}
                <Link to="/privacy" className="font-semibold underline decoration-line underline-offset-4">
                  Privacy Policy
                </Link>{" "}
                explains how account information is used. This is not consent to marketing or optional tracking.
              </span>
            </label>
            {GROK_PROVIDERS.map((provider) => (
              <Button
                key={provider.providerId}
                variant="secondary"
                disabled={!accepted || !recorded || busy}
                onClick={() => void signIn(provider.providerId, { callbackURL: "/admin" })}
              >
                Continue with {provider.label}
              </Button>
            ))}
            {error ? (
              <p className="text-sm text-danger" role="alert">
                {error}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
