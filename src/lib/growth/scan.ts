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
    .replace(/&/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function has(value: string, pattern: RegExp) {
  return pattern.test(value);
}

function finding(status: Status, area: string, summary: string, meaning: string, impact: number) {
  return { status, area, summary, meaning, impact };
}

export function scanSite(html: string, _business = "", secure = true): { overall: Status; findings: Finding[] } {
  const text = textOf(html);
  const lower = `${text} ${html}`.toLowerCase();
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() ?? "";
  const description =
    html.match(/name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1]?.trim() ??
    html.match(/content=["']([^"']*)["'][^>]*name=["']description["']/i)?.[1]?.trim() ??
    "";
  const h1s = [...html.matchAll(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi)];
  const words = text.split(/\s+/).filter(Boolean);
  const viewport = has(html, /name=["']viewport["']/i);
  const noindex = has(html, /name=["']robots["'][^>]*content=["'][^"']*noindex|content=["'][^"']*noindex[^"']*["'][^>]*name=["']robots["']/i);
  const form = has(html, /<form\b/i);
  const contactPath = has(lower, /mailto:|tel:|contact|book|enquir|quote|get in touch|call us|whatsapp/);
  const directContact = has(lower, /mailto:|tel:/) || form;
  const privacy = has(lower, /privacy/);
  const about = has(lower, /\babout\b/);
  const genericTitle = !title || title.length < 8 || /^(home|welcome|untitled|index|just another wordpress site)(\s|[|–—-]|$)/i.test(title);
  const placeholder = has(
    lower,
    /lorem ipsum|coming soon|under construction|your text here|your company name|company name here|\[company\]|this is a sample|john doe|theme demo|avada demo/,
  );
  const exampleContact = has(lower, /example\.com|email@domain|you@email|555-01|123-456-7890/);
  const year = new Date().getFullYear();
  const copyYears = [...html.matchAll(/©\s*(20\d{2})/g)].map((match) => Number(match[1]));
  const oldCopy = copyYears.some((value) => value > 1990 && value < year - 2);
  const thin = words.length < 90;
  const commercial = has(lower, /service|product|pricing|solution|clients|customers|book|quote|what we do/);
  const offerClear = Boolean(title) && !genericTitle && h1s.length > 0 && !thin && !placeholder;

  const trust = placeholder || exampleContact
    ? finding(
        "CRITICAL",
        "Content Trust",
        "Website content may contain inconsistencies, placeholder text, or credibility problems that could make customers hesitate.",
        "Even good traffic may fail to convert if visitors do not fully trust what they are reading.",
        100,
      )
    : !privacy && !about && !directContact
      ? finding(
          "NEEDS WORK",
          "Content Trust",
          "It is not obvious who is behind the website, or where a visitor would confirm that.",
          "People may hesitate before enquiring when they cannot tell who they would be dealing with.",
          88,
        )
      : oldCopy
        ? finding(
            "NEEDS WORK",
            "Content Trust",
            "Some of the page may still be presenting older information.",
            "Outdated details can make an otherwise relevant business look neglected.",
            70,
          )
        : finding(
            "WORKING",
            "Content Trust",
            "The page shows ordinary signs of a real business a visitor can check.",
            "Visible identity makes it easier for someone to decide the business is genuine.",
            30,
          );

  const conversion = !contactPath
    ? finding(
        "CRITICAL",
        "Conversion",
        "Visitors may not have a clear path from interest to an enquiry, booking, or purchase.",
        "Traffic can fail to become a customer when the page does not show the next step.",
        96,
      )
    : !offerClear || !directContact
      ? finding(
          "NEEDS WORK",
          "Conversion",
          "A next step is present, but visitors may not quickly see what they would be choosing or how to take it.",
          "Interest can fade when the offer and the enquiry path are not obvious together.",
          84,
        )
      : finding(
          "WORKING",
          "Offer Clarity",
          "Visitors can understand what the business offers relatively quickly, and can see a way to respond.",
          "Clear positioning makes it easier for potential customers to decide whether the business is relevant to them.",
          28,
        );

  const visibility = noindex
    ? finding(
        "CRITICAL",
        "Visibility",
        "This page is marked so that search engines may not show it.",
        "A business can be hard to find when its own pages ask not to be listed.",
        98,
      )
    : genericTitle || !description || h1s.length === 0
      ? finding(
          h1s.length === 0 && genericTitle ? "CRITICAL" : "NEEDS WORK",
          "SEO Structure",
          "Important products or services may not be structured strongly enough for search engines to understand their commercial importance.",
          "The website may struggle to compete for valuable customer searches.",
          86,
        )
      : h1s.length > 1
        ? finding(
            "NEEDS WORK",
            "SEO Structure",
            "The page has more than one main heading, so the primary offer is less clear to search.",
            "Search engines may not be sure which service this page should be known for.",
            64,
          )
        : finding(
            "WORKING",
            "Visibility",
            "The page has a clear title, description, and main heading.",
            "Search engines have a basic structure to read. This is not a full search review.",
            24,
          );

  const technical = !secure
    ? finding(
        "CRITICAL",
        "Technical Quality",
        "The address did not present as a secure website.",
        "Visitors and search engines may treat an insecure page as a reason not to continue.",
        94,
      )
    : !viewport
      ? finding(
          "NEEDS WORK",
          "Technical Quality",
          "Underlying website issues may be affecting usability on a phone.",
          "Some website problems may be invisible at a desk while still limiting growth.",
          60,
        )
      : finding(
          "WORKING",
          "Technical Quality",
          "The page we read is served securely and sets up a basic mobile view.",
          "Basic technical quality is not the first thing blocking a visit. Deeper issues need the full audit.",
          18,
        );

  const growth = placeholder || thin
    ? finding(
        "CRITICAL",
        "Growth",
        "The page does not yet give a buyer enough substance to choose this business over another.",
        "Thin or unfinished pages limit both trust and the chance of being found for commercial searches.",
        90,
      )
    : !commercial
      ? finding(
          "NEEDS WORK",
          "Growth",
          "Commercial detail a customer would expect — services, proof, or a reason to choose the business — is thin on this page.",
          "The website may be present without doing much to win the enquiry.",
          72,
        )
      : finding(
          "WORKING",
          "Growth",
          "The page gives a visitor enough to judge whether the business is relevant.",
          "That is a start. It is not a review of competitors, search demand, or missed markets.",
          20,
        );

  const ranked = [trust, conversion, visibility, technical, growth].sort(
    (a, b) => RANK[a.status] - RANK[b.status] || b.impact - a.impact,
  );
  const findings = ranked.slice(0, 5).map(({ status, area, summary, meaning }) => ({ status, area, summary, meaning }));
  const overall: Status = findings.some((item) => item.status === "CRITICAL")
    ? "CRITICAL"
    : findings.some((item) => item.status === "NEEDS WORK")
      ? "NEEDS WORK"
      : "WORKING";
  return { overall, findings };
}
