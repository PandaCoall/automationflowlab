export type Status = "WORKING" | "NEEDS WORK" | "CRITICAL";

export type Finding = {
  status: Status;
  area: string;
  summary: string;
  meaning: string;
};

const RANK: Record<Status, number> = { CRITICAL: 0, "NEEDS WORK": 1, WORKING: 2 };

function textOf(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function has(html: string, pattern: RegExp) {
  return pattern.test(html);
}

export function scanSite(html: string, business: string, secure = true): { overall: Status; findings: Finding[] } {
  const text = textOf(html);
  const lower = `${text} ${html}`.toLowerCase();
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim() ?? "";
  const description = html.match(/name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1]?.trim()
    ?? html.match(/content=["']([^"']*)["'][^>]*name=["']description["']/i)?.[1]?.trim()
    ?? "";
  const h1s = [...html.matchAll(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi)];
  const words = text.split(/\s+/).filter(Boolean);
  const images = [...html.matchAll(/<img\b[^>]*>/gi)];
  const missingAlt = images.filter((tag) => !/\balt=["'][^"']+["']/i.test(tag[0])).length;
  const viewport = has(html, /name=["']viewport["']/i);
  const form = has(html, /<form\b/i);
  const contactPath = has(lower, /mailto:|tel:|contact|book|enquir|quote|get in touch|call us|whatsapp/);
  const privacy = has(lower, /privacy/);
  const about = has(lower, /\babout\b/);
  const terms = has(lower, /terms/);
  const genericTitle = /^(home|welcome|untitled|index)(\s|$)/i.test(title) || title.length < 8;
  const businessWords = business
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 3);
  const offerMentionsBusiness = businessWords.length === 0 || businessWords.some((word) => lower.includes(word));
  const thin = words.length < 120;
  const placeholder = has(lower, /lorem ipsum|coming soon|under construction|your text here/);

  const findings: Finding[] = [
    contactPath && (form || has(lower, /mailto:|tel:/))
      ? {
          status: "WORKING",
          area: "Conversion Journey",
          summary: "Visitors have a visible way to make contact from this page.",
          meaning: "A clear path from interest to enquiry is already in place on the page we read.",
        }
      : contactPath
        ? {
            status: "NEEDS WORK",
            area: "Conversion Journey",
            summary: "A contact cue is present, but the step from interest to enquiry is not obvious.",
            meaning: "Visitors who are ready may leave if the next step is easy to miss.",
          }
        : {
            status: "CRITICAL",
            area: "Conversion Journey",
            summary: "Visitors may not have a clear path from interest to enquiry.",
            meaning: "Traffic can fail to become a lead when the page does not ask for the next step.",
          },
    privacy && (about || terms) && !placeholder
      ? {
          status: "WORKING",
          area: "Content Trust",
          summary: "The page shows ordinary trust markers a visitor can check.",
          meaning: "Visible identity and policy links reduce hesitation before an enquiry.",
        }
      : placeholder || thin
        ? {
            status: "CRITICAL",
            area: "Content Trust",
            summary: "Thin or placeholder content may cause visitors to hesitate before contacting the business.",
            meaning: "Even good traffic can fail to convert when visitors do not trust what they are reading.",
          }
        : {
            status: "NEEDS WORK",
            area: "Content Trust",
            summary: "Trust markers such as an about page or a privacy notice are not obvious on this page.",
            meaning: "Visitors may pause if they cannot tell who is behind the site.",
          },
    h1s.length === 1 && title && !genericTitle && offerMentionsBusiness && !thin
      ? {
          status: "WORKING",
          area: "Offer Clarity",
          summary: "Visitors can see what this page is offering.",
          meaning: "Clear positioning reduces confusion and helps visitors move toward enquiry.",
        }
      : !title || genericTitle || h1s.length === 0 || thin
        ? {
            status: "CRITICAL",
            area: "Offer Clarity",
            summary: "A first-time visitor may not quickly see what the business provides.",
            meaning: "Unclear positioning loses people before they reach a price or an enquiry.",
          }
        : {
            status: "NEEDS WORK",
            area: "Offer Clarity",
            summary: "The offer is present, but it is not as clear as it could be for a first-time visitor.",
            meaning: "Visitors may understand the name of the business without understanding the service.",
          },
    description && h1s.length === 1 && title
      ? {
          status: "WORKING",
          area: "SEO Structure",
          summary: "The page has a title, a description, and a single main heading.",
          meaning: "Search engines have a basic structure to read on this page.",
        }
      : !description && h1s.length !== 1
        ? {
            status: "CRITICAL",
            area: "SEO Structure",
            summary: "Important services are not clearly structured for search on this page.",
            meaning: "Search engines may struggle to tell which page should be shown for valuable searches.",
          }
        : {
            status: "NEEDS WORK",
            area: "SEO Structure",
            summary: "The page structure is incomplete for search.",
            meaning: "Search engines may not clearly understand the most important service on this page.",
          },
    secure && viewport && missingAlt < Math.max(3, images.length / 2)
      ? {
          status: "WORKING",
          area: "Technical Quality",
          summary: "The page we read is served securely and has a basic mobile viewport.",
          meaning: "Basic technical quality is not the first thing blocking a visit.",
        }
      : !secure
        ? {
            status: "CRITICAL",
            area: "Technical Quality",
            summary: "The page did not present as a secure address.",
            meaning: "Visitors and search engines may treat an insecure page as a reason not to continue.",
          }
        : {
            status: "NEEDS WORK",
            area: "Technical Quality",
            summary: "Technical issues on this page may be affecting usability or search visibility.",
            meaning: "A page that is hard to use on a phone, or thin on basic signals, can lose both visits and enquiries.",
          },
  ];

  findings.sort((a, b) => RANK[a.status] - RANK[b.status]);
  const top = findings.slice(0, 5);
  const overall: Status = top.some((item) => item.status === "CRITICAL")
    ? "CRITICAL"
    : top.some((item) => item.status === "NEEDS WORK")
      ? "NEEDS WORK"
      : "WORKING";
  return { overall, findings: top };
}
