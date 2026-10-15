import { contentSettings } from "@/lib/content-settings";

export const site = {
  name: "Automation Flow Lab",
  domain: contentSettings.domain,
  email: contentSettings.contactEmail,
  positioning: "We find what's stopping your business from growing online, then build the systems to fix it.",
  supporting: "Find it. Fix it. Grow it.",
  description:
    "Website Growth Check: be found, trusted and chosen. Also website audits, search growth, automation, SharePoint, client portals, Microsoft 365, Excel, Zoho and reporting.",
} as const;

export type ToolStatus = "coming-soon" | "available" | "demo";

export type Tool = {
  slug: string;
  name: string;
  status: ToolStatus;
  summary: string;
  audience: string;
  outcome: string;
  features: string[];
};

/**
 * "available" means the signed-in product works (Certflow).
 * "demo" means you can try it in the browser with your own inputs. It does not write to the customer's live systems.
 */
export const tools: Tool[] = [
  {
    slug: "certflow",
    name: "Certflow",
    status: "available",
    summary: "Training teams that need to generate and send certificates efficiently.",
    audience: "Training teams who still build hundreds of certificates by hand or through a flow that dies halfway.",
    outcome: "Upload the list, check the certificate with the logo, download the PDFs, and retry only the rows that did not send.",
    features: [
      "Excel or CSV in, with column mapping",
      "Live PDF preview, logo on the left or right, three layouts and three colours",
      "One PDF per learner in a ZIP, plus a result sheet",
      "A row that fails or is throttled does not stop the rest",
    ],
  },
  {
    slug: "growth-check",
    name: "Website Growth Check",
    status: "available",
    summary: "Find the most important problems affecting a website's visibility, trust, conversion and growth.",
    audience: "A business owner who wants a clear first read of the website before a paid audit.",
    outcome: "Up to five findings, ordered by commercial importance, and a path to the full Website Revenue & Growth Audit.",
    features: [
      "A check of the public page, with no account",
      "Up to five findings: status, area, and why it may matter",
      "Not a full audit, and not a repair guide",
      "The paid audit, the fix, the growth work, and monitoring are booked separately",
    ],
  },
  {
    slug: "license-compare",
    name: "Microsoft licence comparison",
    status: "available",
    summary: "Compare Microsoft 365 options based on business requirements and budget.",
    audience: "Anyone choosing a Microsoft suite on budget, what it has to cover, and where it is bought.",
    outcome: "A plain answer on which of the two fits better, and why, from the prices Microsoft publishes.",
    features: [
      "Live read of Microsoft’s public commercial price list",
      "Two products, a user count, and an optional per-user budget",
      "Suites with Teams, or the EEA and Switzerland suites without Teams",
      "Free. US dollars, before tax, and not a quote or a partner discount",
    ],
  },
  {
    slug: "zoho-fit",
    name: "Zoho setup check",
    status: "available",
    summary: "Identify which Zoho applications may suit a business and where unnecessary subscriptions may exist.",
    audience: "Anyone about to buy Zoho, or already paying for apps they do not open.",
    outcome: "The smallest set for the work you named, and the few setup steps that mean it is actually done.",
    features: [
      "You tick the work, not a product catalogue",
      "A short list of what to get, what to keep, and what to skip",
      "A note when Zoho One, a second invoicing app, or a side tool is extra",
      "It does not sign into Zoho and it is not a quote",
    ],
  },
];

export const retiredToolSlugs = [
  "automation-watch",
  "excel-health-check",
  "form-to-inbox-check",
  "sharepoint-library-builder",
  "change-request",
] as const;

tools.sort((a, b) => Number(a.status !== "available") - Number(b.status !== "available"));

export function getTool(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export type ServiceItem = {
  slug: string;
  name: string;
  summary: string;
  enquiryTopic: string;
  href?: "/audit";
};

export type ServiceGroup = {
  id: string;
  name: string;
  items: ServiceItem[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "website",
    name: "Website and growth",
    items: [
      {
        slug: "website-audit",
        name: "Website Revenue & Growth Audit",
        summary: "A deeper look at what is holding the website back, and where the stronger opportunities are.",
        enquiryTopic: "Website Revenue & Growth Audit",
        href: "/audit",
      },
      {
        slug: "website-improvement",
        name: "Website improvement",
        summary: "Clearer pages, fewer points of confusion, and a site that is easier to use.",
        enquiryTopic: "Website improvement",
      },
      {
        slug: "search-growth",
        name: "SEO and search growth",
        summary: "Improve visibility and the ability to compete for searches that can bring customers.",
        enquiryTopic: "SEO and search growth",
      },
      {
        slug: "conversion",
        name: "Conversion improvement",
        summary: "Make it easier for a visitor who is already interested to enquire, book, or buy.",
        enquiryTopic: "Conversion improvement",
      },
      {
        slug: "international-search",
        name: "International search expansion",
        summary: "Prepare the website to be understood in more than one market.",
        enquiryTopic: "International search expansion",
      },
      {
        slug: "website-monitoring",
        name: "Website monitoring",
        summary: "Watch for issues and new opportunities after the work is live.",
        enquiryTopic: "Website monitoring",
      },
    ],
  },
  {
    id: "automation",
    name: "Automation and operations",
    items: [
      {
        slug: "ai-workflow-automation",
        name: "Workflow automation",
        summary: "Replace repetitive manual work with a workflow the team can rely on.",
        enquiryTopic: "Workflow automation",
      },
      {
        slug: "automation-troubleshooting",
        name: "Automation troubleshooting",
        summary: "Find why a workflow stopped and put the hand-off back in order.",
        enquiryTopic: "Automation troubleshooting",
      },
      {
        slug: "systems-integration",
        name: "Systems integration",
        summary: "Connect the systems that should already be passing work to each other.",
        enquiryTopic: "Systems integration",
      },
      {
        slug: "integration-config",
        name: "Integration and Config",
        summary: "Configure the tools a business already uses and connect them so work is not left half-finished.",
        enquiryTopic: "Integration and Config",
      },
      {
        slug: "request-approval",
        name: "Request and approval systems",
        summary: "Give requests a status, an owner, and a recorded decision.",
        enquiryTopic: "Request and approval systems",
      },
      {
        slug: "custom-webapps",
        name: "Custom systems",
        summary: "When a spreadsheet or an email chain needs a proper screen and a clear status.",
        enquiryTopic: "Custom webapp",
      },
    ],
  },
  {
    id: "systems",
    name: "Business systems",
    items: [
      {
        slug: "microsoft-365",
        name: "Microsoft 365",
        summary: "Help a business use the Microsoft 365 tools it already pays for, together.",
        enquiryTopic: "Microsoft 365",
      },
      {
        slug: "sharepoint",
        name: "SharePoint Design and Integration",
        summary: "Design a SharePoint environment and connect it to the way the team already works.",
        enquiryTopic: "SharePoint Design and Integration",
      },
      {
        slug: "client-portal",
        name: "Client Operation Portals",
        summary: "Bring client information, processes and workflows into organised portals.",
        enquiryTopic: "Client Operation Portals",
      },
      {
        slug: "excel",
        name: "Excel automation",
        summary: "Repair a fragile workbook and reduce the manual work around it.",
        enquiryTopic: "Excel troubleshooting",
      },
      {
        slug: "zoho",
        name: "Zoho setup and optimisation",
        summary: "Choose, configure, and simplify the Zoho apps the business actually needs.",
        enquiryTopic: "Zoho configuration",
      },
    ],
  },
  {
    id: "insight",
    name: "Data and insight",
    items: [
      {
        slug: "analytics",
        name: "Analytics",
        summary: "Set up or repair measurement so the website’s numbers can be trusted.",
        enquiryTopic: "Website analytics",
      },
      {
        slug: "reporting",
        name: "Reporting",
        summary: "Turn the numbers you already have into a report someone can act on.",
        enquiryTopic: "Reporting",
      },
      {
        slug: "dashboards",
        name: "Business dashboards",
        summary: "Put the few figures that matter where the people who decide can see them.",
        enquiryTopic: "Business dashboards",
      },
      {
        slug: "performance-monitoring",
        name: "Performance monitoring",
        summary: "Notice when a workflow, a form, or a report stops doing its job.",
        enquiryTopic: "Performance monitoring",
      },
    ],
  },
];

export const services: ServiceItem[] = serviceGroups.flatMap((group) => group.items);

export const buildSteps = [
  {
    name: "Discovery",
    text: "We talk through the problem, who does the work today, and what a better week would look like. You do not need a specification to start.",
  },
  {
    name: "Scoping",
    text: "We write what will be built, what will not, and what we need from you. You can decide whether to go ahead before any build starts.",
  },
  {
    name: "Build",
    text: "We design and build the agreed thing, and show you progress you can react to. The length depends on the work — we do not publish a fixed timeline here.",
  },
  {
    name: "Handover",
    text: "You get the working system, notes on how to use it, and what to do if it breaks.",
  },
  {
    name: "Optional support",
    text: "If you want us to stay on, we agree a support plan. Support is optional. It is not bundled into the build unless we say so in the scope.",
  },
] as const;

export type PlanId = "care" | "operations";

export type Plan = {
  id: PlanId;
  name: string;
  for: string;
  includes: string[];
  notIncluded: string[];
};

export const plans: Plan[] = [
  {
    id: "care",
    name: "Care",
    for: "Maintenance and support for one system.",
    includes: [
      "Fixes and small adjustments to that one system",
      "Answers about how that system works",
      "A named point of contact for it",
    ],
    notIncluded: [
      "Other systems",
      "New projects or a feature backlog",
      "Monitoring across several tools",
    ],
  },
  {
    id: "operations",
    name: "Operations",
    for: "Several connected systems, plus monitoring.",
    includes: [
      "Care-level maintenance for each system named in the agreement",
      "Agreed checks so a failed hand-off is noticed",
      "A note to you when one of those checks fails",
    ],
    notIncluded: [
      "A standing backlog of new features",
      "Systems that are not named in the agreement",
    ],
  },
];

export const planAgreementNote =
  "These are proposed plan scopes, not a contract. Exact response times, working hours, exclusions, and fees are set in each client agreement. Nothing on this page is a price or a guarantee.";

export const problems = [
  {
    stuck: "An automation fails overnight and nobody notices until a client does.",
    change: "The workflow has a last-run status you can see without opening every tool.",
  },
  {
    stuck: "A spreadsheet is the only copy of the truth, and it breaks.",
    change: "The workbook is diagnosed, then repaired as Excel work — not dressed up as a dashboard.",
  },
  {
    stuck: "A form, a tag, or mail stops working after a host or domain change.",
    change: "You check whether it still posts, fires, or leaves — before the next enquiry vanishes.",
  },
  {
    stuck: "Someone retypes a PDF or a photo into a sheet or into Zoho.",
    change: "The fields come out for a person to check, then copy into the system that already exists.",
  },
  {
    stuck: "SharePoint or Zoho is there, but the setup fights the way the systems should work.",
    change: "Libraries, fields, and mail are configured so the technical hand-off is obvious.",
  },
] as const;

export const privacySummary =
  "We store what you submit — your name, email, and the details of the enquiry — so we can reply and keep a record of the request. We also store a short hash of the network address to limit spam, not the address itself. We do not sell this information. To ask for a copy or for deletion, email " +
  site.email +
  ". We keep a submission until the enquiry is finished and any agreed follow-up is done, unless you ask us to remove it sooner or we have to keep it.";
