import { createFileRoute } from "@tanstack/react-router";
import { scanSite } from "@/lib/growth/scan";

const MAX_BYTES = 1_200_000;

function blockedHost(hostname: string) {
  const host = hostname.toLowerCase().replace(/\.$/, "");
  if (host === "localhost" || host.endsWith(".local") || host.endsWith(".internal") || host === "0.0.0.0") return true;
  if (host === "metadata.google.internal" || host === "169.254.169.254") return true;
  const ipv4 = host.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (!ipv4) return false;
  const [a, b] = [Number(ipv4[1]), Number(ipv4[2])];
  if (a === 10 || a === 127 || a === 0) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  return false;
}

export const Route = createFileRoute("/api/growth-check")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: { url?: string; business?: string };
        try {
          body = (await request.json()) as { url?: string; business?: string };
        } catch {
          return Response.json({ error: "Send a website address." }, { status: 400 });
        }
        let current: URL;
        try {
          const raw = (body.url ?? "").trim();
          current = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
        } catch {
          return Response.json({ error: "That is not a usable website address." }, { status: 400 });
        }
        if (current.protocol !== "http:" && current.protocol !== "https:") {
          return Response.json({ error: "Only a public website can be checked." }, { status: 400 });
        }
        try {
          let res: Response | null = null;
          for (let hop = 0; hop < 4; hop += 1) {
            if (blockedHost(current.hostname)) {
              return Response.json({ error: "That address is not a public website." }, { status: 400 });
            }
            res = await fetch(current, {
              redirect: "manual",
              headers: {
                "user-agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
                accept: "text/html,application/xhtml+xml",
                "accept-language": "en-US,en;q=0.9",
              },
              signal: AbortSignal.timeout(8000),
            });
            if (res.status >= 300 && res.status < 400) {
              const next = res.headers.get("location");
              if (!next) break;
              current = new URL(next, current);
              continue;
            }
            break;
          }
          if (!res || !res.ok) {
            const blocked = res?.status === 403 || res?.status === 503;
            if (blocked) {
              return Response.json({
                finalUrl: current.toString(),
                overall: "NEEDS WORK",
                findings: [
                  {
                    status: "NEEDS WORK",
                    area: "Technical Quality",
                    summary: "This check could not read the website.",
                    meaning:
                      "A visitor may still see the site. A paid audit looks at the site directly.",
                  },
                ],
              });
            }
            return Response.json({ error: `The site returned ${res?.status ?? "no response"}.` }, { status: 422 });
          }
          const reader = res.body?.getReader();
          const chunks: Uint8Array[] = [];
          let size = 0;
          if (reader) {
            while (size < MAX_BYTES) {
              const step = await reader.read();
              if (step.done) break;
              size += step.value.byteLength;
              chunks.push(step.value);
            }
            await reader.cancel();
          }
          const html = new TextDecoder().decode(
            chunks.reduce((acc, part) => {
              const next = new Uint8Array(acc.length + part.length);
              next.set(acc);
              next.set(part, acc.length);
              return next;
            }, new Uint8Array()),
          );
          const result = scanSite(html, (body.business ?? "").slice(0, 160), current.protocol === "https:");
          return Response.json({ finalUrl: current.toString(), ...result });
        } catch {
          return Response.json({ error: "The website could not be reached." }, { status: 422 });
        }
      },
    },
  },
});
