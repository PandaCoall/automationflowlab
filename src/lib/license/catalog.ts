export const SOURCE =
  "https://www.microsoft.com/en-us/licensing/news/2026-m365-packaging-pricing-updates";

export type Need = "email" | "desktop" | "teams" | "security" | "devices" | "server";

export type Product = {
  id: string;
  name: string;
  price: number;
  group: "Business" | "Enterprise" | "Frontline" | "Server";
  unit: "user-month" | "pack";
  unitLabel: string;
  covers: Need[];
  seatMin: number | null;
  seatCap: number | null;
  note: string;
  features: string[];
};

export type RegionId = "with-teams" | "no-teams";

export const regions: { id: RegionId; label: string; detail: string }[] = [
  {
    id: "with-teams",
    label: "Most countries, suites with Teams",
    detail: "The public commercial list Microsoft publishes in US dollars for suites that include Teams.",
  },
  {
    id: "no-teams",
    label: "EEA and Switzerland, suites without Teams",
    detail: "The public list for suites sold without Teams. Teams is a separate licence there.",
  },
];

const COVERS: Record<string, { covers: Need[]; seatCap: number | null; note: string; features: string[] }> = {
  "Microsoft 365 Business Basic": {
    covers: ["email", "teams"],
    seatCap: 300,
    note: "Web and mobile apps, mailbox, and Teams. No desktop Office apps.",
    features: [
      "Word, Excel, PowerPoint on the web and mobile only",
      "Exchange Online mailbox",
      "Teams, SharePoint, OneDrive (1 TB)",
      "Forms, Viva Engage",
      "No desktop Office apps",
      "No Intune device management",
      "No Defender for Business / Azure Information Protection",
      "Maximum 300 users",
    ],
  },
  "Microsoft 365 Business Standard": {
    covers: ["email", "desktop", "teams"],
    seatCap: 300,
    note: "Desktop apps, mailbox, and Teams. Not the advanced security stack.",
    features: [
      "Desktop Word, Excel, PowerPoint, Outlook on up to 5 PCs or Macs",
      "Exchange Online mailbox",
      "Teams, SharePoint, OneDrive (1 TB)",
      "Forms, Viva Engage, Bookings",
      "No Intune device management",
      "No Defender for Business / Azure Information Protection",
      "Maximum 300 users",
    ],
  },
  "Microsoft 365 Business Premium": {
    covers: ["email", "desktop", "teams", "security", "devices"],
    seatCap: 300,
    note: "Standard, plus device management and the business security stack.",
    features: [
      "Everything in Business Standard",
      "Intune device management",
      "Defender for Business and Defender for Office 365 Plan 1",
      "Azure Information Protection and data loss prevention",
      "Conditional access",
      "Maximum 300 users",
    ],
  },
  "Microsoft 365 Business Basic (no Teams)": {
    covers: ["email"],
    seatCap: 300,
    note: "Mailbox and web apps. Teams is not in this suite.",
    features: [
      "Word, Excel, PowerPoint on the web and mobile only",
      "Exchange Online mailbox",
      "SharePoint, OneDrive (1 TB)",
      "Teams is not included",
      "Maximum 300 users",
    ],
  },
  "Microsoft 365 Business Standard (no Teams)": {
    covers: ["email", "desktop"],
    seatCap: 300,
    note: "Desktop apps and mailbox. Teams is not in this suite.",
    features: [
      "Desktop Office apps",
      "Exchange Online mailbox",
      "SharePoint, OneDrive (1 TB)",
      "Teams is not included",
      "Maximum 300 users",
    ],
  },
  "Microsoft 365 Business Premium (no Teams)": {
    covers: ["email", "desktop", "security", "devices"],
    seatCap: 300,
    note: "Desktop apps, security, and device management. Teams is not in this suite.",
    features: [
      "Desktop Office apps",
      "Intune, Defender for Business, information protection",
      "Teams is not included",
      "Maximum 300 users",
    ],
  },
  "Office 365 E1": {
    covers: ["email", "teams"],
    seatCap: null,
    note: "Web apps, mailbox, and Teams. No desktop apps and no device management.",
    features: [
      "Office on the web only — no desktop Office apps",
      "Exchange Online Plan 1 mailbox",
      "Teams, SharePoint Plan 1, OneDrive",
      "Viva Engage, Forms",
      "No Intune, no Windows Enterprise, no Power BI",
      "Enterprise suite: aimed at more than 300 users",
    ],
  },
  "Office 365 E3": {
    covers: ["email", "desktop", "teams"],
    seatCap: null,
    note: "Desktop apps, mailbox, and Teams. Not Microsoft 365 device security.",
    features: [
      "Desktop Office apps",
      "Exchange Online Plan 2 (100 GB mailbox)",
      "Teams, SharePoint Plan 2, OneDrive",
      "eDiscovery and compliance basics in Office 365",
      "No Intune, no Windows Enterprise, no Defender for Endpoint",
      "Enterprise suite: aimed at more than 300 users",
    ],
  },
  "Office 365 E5": {
    covers: ["email", "desktop", "teams", "security"],
    seatCap: null,
    note: "E3 plus the advanced Office 365 security and compliance stack.",
    features: [
      "Everything in Office 365 E3",
      "Defender for Office 365 Plan 2",
      "Advanced compliance, eDiscovery Premium, Audit Premium",
      "Power BI Pro",
      "Phone System and Audio Conferencing",
      "No Intune and no Windows Enterprise",
      "Enterprise suite: aimed at more than 300 users",
    ],
  },
  "Microsoft 365 E3": {
    covers: ["email", "desktop", "teams", "devices"],
    seatCap: null,
    note: "Desktop apps, mailbox, Teams, and device management.",
    features: [
      "Office 365 E3 services plus desktop apps",
      "Windows Enterprise",
      "Intune device management and Entra ID P1",
      "Information protection",
      "No Power BI Pro, no Phone System, no Defender for Endpoint P2",
      "Enterprise suite: aimed at more than 300 users",
    ],
  },
  "Microsoft 365 E5": {
    covers: ["email", "desktop", "teams", "security", "devices"],
    seatCap: null,
    note: "E3 plus the advanced security and compliance stack.",
    features: [
      "Everything in Microsoft 365 E3",
      "Defender for Endpoint, Identity, Office, and Cloud Apps",
      "Entra ID P2, advanced compliance",
      "Power BI Pro",
      "Phone System and Audio Conferencing",
      "Enterprise suite: aimed at more than 300 users",
    ],
  },
  "Microsoft 365 F1": {
    covers: ["teams"],
    seatCap: null,
    note: "A frontline suite. It is not a full desktop Office licence.",
    features: [
      "Teams and Office on the web",
      "No Exchange mailbox on F1",
      "Small OneDrive allocation",
      "No desktop Office apps",
      "Built for frontline workers, not office staff",
    ],
  },
  "Microsoft 365 F3": {
    covers: ["email", "teams"],
    seatCap: null,
    note: "A frontline suite with a mailbox and Teams. Desktop apps are limited.",
    features: [
      "Kiosk Exchange mailbox (2 GB)",
      "Teams, SharePoint, Office on the web",
      "Intune P1 in the published F3 stack",
      "No full desktop Office apps",
      "Built for frontline workers",
    ],
  },
};

const GROUP_OF: Record<string, Product["group"]> = {
  "Microsoft 365 Business Basic": "Business",
  "Microsoft 365 Business Standard": "Business",
  "Microsoft 365 Business Premium": "Business",
  "Microsoft 365 Business Basic (no Teams)": "Business",
  "Microsoft 365 Business Standard (no Teams)": "Business",
  "Microsoft 365 Business Premium (no Teams)": "Business",
  "Office 365 E1": "Enterprise",
  "Office 365 E3": "Enterprise",
  "Office 365 E5": "Enterprise",
  "Microsoft 365 E3": "Enterprise",
  "Microsoft 365 E5": "Enterprise",
  "Microsoft 365 F1": "Frontline",
  "Microsoft 365 F3": "Frontline",
};

function rowsIn(chunk: string): Product[] {
  const products: Product[] = [];
  for (const tr of chunk.match(/<tr[\s\S]*?<\/tr>/g) ?? []) {
    const text = tr
      .replace(/<[^>]+>/g, " ")
      .replace(/\u200b/g, "")
      .replace(/\s+/g, " ")
      .trim();
    const prices = [...text.matchAll(/\$(\d+\.\d{2})/g)].map((m) => Number(m[1]));
    if (!prices.length) continue;
    const name = text
      .replace(/\d+%/g, "")
      .replace(/--/g, "")
      .replace(/\$\d+\.\d{2}/g, "")
      .replace(/\s+/g, " ")
      .trim();
    const known = COVERS[name];
    if (!known) continue;
    products.push({
      id: name,
      name,
      price: prices[prices.length - 1],
      group: GROUP_OF[name],
      unit: "user-month",
      unitLabel: "per user / month",
      seatMin: GROUP_OF[name] === "Enterprise" ? 301 : null,
      ...known,
    });
  }
  return products;
}

function section(html: string, heading: string, marker: string) {
  const at = html.indexOf(heading);
  if (at < 0) return "";
  const block = html.slice(at, at + 16000);
  const start = block.indexOf(marker);
  if (start < 0) return "";
  const rest = block.slice(start + marker.length);
  const end = rest.search(/Suites without Teams|Standalone Components|Frontline suites|Business suites|Enterprise suites/);
  return rest.slice(0, end > 0 ? end : 5000);
}

export function parseCatalog(html: string, region: RegionId): Product[] {
  const marker = region === "with-teams" ? "Suites with Teams" : "Suites without Teams";
  const chunks =
    region === "with-teams"
      ? [section(html, "Enterprise suites", marker), section(html, "Business suites", marker), section(html, "Frontline suites", marker)]
      : [section(html, "Business suites", marker)];
  const products: Product[] = [];
  for (const chunk of chunks) {
    for (const product of rowsIn(chunk)) {
      if (!products.some((item) => item.id === product.id)) products.push(product);
    }
  }
  return products;
}

export const needLabels: Record<Need, string> = {
  email: "Mailbox and web apps",
  desktop: "Desktop Word, Excel, and PowerPoint",
  teams: "Teams included in the suite",
  security: "Advanced security",
  devices: "Device management",
  server: "A Windows Server or SQL Server licence",
};

export function parseServerLicences(windowsHtml: string, sqlHtml: string): Product[] {
  const found: Product[] = [];
  const windows = windowsHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const sql = sqlHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const standard = windows.match(/Windows Server 2025 Standard edition Suggested MSRP:\s*\$([0-9,]+)/);
  const datacenter = windows.match(/Windows Server 2025 Datacenter edition Suggested MSRP:\s*\$([0-9,]+)/);
  const sqlEnterprise = sql.match(/Enterprise\s*\$([0-9,]+)/);
  const sqlStandard = sql.match(/Standard - server\s*\$([0-9,]+)/);
  const add = (name: string, raw: string | undefined, note: string) => {
    if (!raw) return;
    found.push({
      id: name,
      name,
      price: Number(raw.replace(/,/g, "")),
      group: "Server",
      unit: "pack",
      unitLabel: "published pack or server price",
      covers: ["server"],
      seatMin: null,
      seatCap: null,
      note,
      features: [
        "Published suggested retail or pack price from Microsoft’s server pages",
        "Core-based or server licence, not a Microsoft 365 user suite",
        "Windows Server still needs CALs",
      ],
    });
  };
  add("Windows Server 2025 Standard", standard?.[1], "Suggested retail price published for Windows Server 2025 Standard. Core-based, and it still needs Windows Server CALs.");
  add("Windows Server 2025 Datacenter", datacenter?.[1], "Suggested retail price published for Windows Server 2025 Datacenter. Core-based, and it still needs Windows Server CALs.");
  add("SQL Server Enterprise, 2-core pack", sqlEnterprise?.[1], "Published 2-core pack price for SQL Server Enterprise.");
  add("SQL Server Standard, server", sqlStandard?.[1], "Published server licence price for SQL Server Standard.");
  return found;
}

export type Verdict = {
  winnerId: string;
  headline: string;
  reasons: string[];
  rows: {
    id: string;
    group: Product["group"];
    note: string;
    features: string[];
    covers: string[];
    monthly: number;
    total: number;
    unit: Product["unit"];
    unitLabel: string;
    overBudget: boolean;
    underMin: boolean;
    overCap: boolean;
    seatRule: string;
    missing: string[];
  }[];
};

export function compare(input: {
  products: Product[];
  leftId: string;
  rightId: string;
  seats: number;
  budget: number | null;
  needs: Need[];
}): Verdict {
  const pair = [input.leftId, input.rightId].map((id) => input.products.find((p) => p.id === id)).filter(Boolean) as Product[];
  const seats = Math.max(1, Math.round(input.seats));
  const rows = pair.map((p) => {
    const covered = p.covers.map((need) => needLabels[need]);
    const missing = input.needs.filter((need) => !p.covers.includes(need)).map((need) => needLabels[need]);
    const monthly = p.price;
    const total = Math.round(monthly * seats * 100) / 100;
    const overBudget = p.unit === "user-month" && input.budget != null && monthly > input.budget;
    const underMin = p.seatMin != null && seats < p.seatMin;
    const overCap = p.seatCap != null && seats > p.seatCap;
    const seatRule = underMin
      ? `Enterprise suites are for organisations past the Business limit of 300 users. ${seats} is below that.`
      : overCap
        ? `This suite stops at ${p.seatCap} users. ${seats} is over that.`
        : p.group === "Enterprise"
          ? "Quantity is above 300, which is the range these enterprise suites are for."
          : p.seatCap
            ? `Published for 1–${p.seatCap} users.`
            : p.group === "Server"
              ? "Sold as a pack or server licence, not per user."
              : "No 300-user business cap on this suite.";
    return {
      id: p.id,
      name: p.name,
      group: p.group,
      note: p.note,
      features: p.features,
      covers: covered,
      monthly,
      total,
      unit: p.unit,
      unitLabel: p.unitLabel,
      overBudget,
      underMin,
      overCap,
      seatRule,
      missing,
    };
  });
  const scored = rows.map((row) => {
    let score = 0;
    if (!row.missing.length) score += 50;
    score -= row.missing.length * 15;
    if (row.overBudget) score -= 20;
    if (row.underMin) score -= 30;
    if (row.overCap) score -= 40;
    score -= row.monthly;
    return { ...row, score };
  });
  scored.sort((a, b) => b.score - a.score);
  const best = scored[0];
  const other = scored[1];
  const reasons = [best.note];
  if (best.missing.length) reasons.push(`It still does not cover: ${best.missing.join(", ")}.`);
  else if (input.needs.length) reasons.push("It covers every need you ticked.");
  if (best.overBudget) reasons.push(`It is above the ${input.budget} per user budget you entered.`);
  if (best.overCap) reasons.push(best.seatRule);
  if (best.underMin) reasons.push(best.seatRule);
  if (other) {
    const gap = Math.round((other.monthly - best.monthly) * 100) / 100;
    if (gap > 0) reasons.push(`${other.name} costs ${gap} more per user and ${other.missing.length ? "still misses " + other.missing.join(", ") : "does not buy a need you ticked"}.`);
    if (gap < 0) reasons.push(`${other.name} is cheaper, but it misses ${other.missing.join(", ") || "the fit on seats or budget"}.`);
    if (gap === 0) reasons.push(`${other.name} is the same published price, with a weaker fit for what you ticked.`);
  }
  const mixed = pair.length === 2 && pair[0].unit !== pair[1].unit;
  return {
    winnerId: best.id,
    headline: mixed
      ? `${best.name} fits more of what you ticked. These are not both a per-user monthly price.`
      : `${best.name} is the better fit of the two.`,
    reasons,
    rows: rows.map(({ id, group, note, features, covers, monthly, total, unit, unitLabel, overBudget, underMin, overCap, seatRule, missing }) => ({
      id,
      group,
      note,
      features,
      covers,
      monthly,
      total,
      unit,
      unitLabel,
      overBudget,
      underMin,
      overCap,
      seatRule,
      missing,
    })),
  };
}
