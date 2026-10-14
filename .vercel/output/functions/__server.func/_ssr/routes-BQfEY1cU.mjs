import { c as site } from "./site-content-C_h7gjI1.mjs";
import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as track } from "./analytics-Dt7yDY7a.mjs";
import { n as WebsiteCheck, t as FindingCard } from "./website-check-Dn4v1LVZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BQfEY1cU.js
var import_jsx_runtime = require_jsx_runtime();
var looks = [
	{
		name: "Visibility",
		text: "Can potential customers actually find you?"
	},
	{
		name: "Trust",
		text: "Does your website give people confidence to choose you?"
	},
	{
		name: "Conversion",
		text: "Does the website turn visitors into enquiries, bookings or customers?"
	},
	{
		name: "Technical quality",
		text: "Are hidden website problems holding performance back?"
	},
	{
		name: "Growth",
		text: "Are there opportunities your business is currently missing?"
	}
];
var examples = [
	{
		status: "CRITICAL",
		area: "Content Trust",
		summary: "Website content may contain inconsistencies, outdated information or credibility problems that could make customers hesitate.",
		meaning: "Even good traffic may fail to convert if visitors do not fully trust what they are reading."
	},
	{
		status: "NEEDS WORK",
		area: "SEO Structure",
		summary: "Important products or services may not be structured strongly enough for search engines to understand their commercial importance.",
		meaning: "The website may struggle to compete for valuable customer searches."
	},
	{
		status: "NEEDS WORK",
		area: "Technical Quality",
		summary: "Underlying website issues may be affecting usability, indexing or search performance.",
		meaning: "Some website problems may be invisible to customers while still limiting growth."
	},
	{
		status: "WORKING",
		area: "Offer Clarity",
		summary: "Visitors can understand what the business offers relatively quickly.",
		meaning: "Clear positioning makes it easier for potential customers to decide whether the business is relevant to them."
	}
];
var auditLooks = [
	"Customer drop-off points",
	"Search visibility problems",
	"Content and trust weaknesses",
	"Technical issues",
	"Conversion opportunities",
	"Competitor gaps",
	"Market opportunities",
	"Growth priorities"
];
var process = [
	{
		name: "Audit",
		text: "Find what's holding the business back."
	},
	{
		name: "Fix",
		text: "Correct the problems affecting trust, visibility and conversion."
	},
	{
		name: "Grow",
		text: "Improve search visibility, customer journeys and market reach."
	},
	{
		name: "Monitor",
		text: "Track performance, issues and new opportunities."
	}
];
var otherHelp = [
	{
		name: "Automation integration & troubleshooting",
		text: "Connect systems, repair broken workflows and remove repetitive work.",
		to: "/services",
		hash: "systems-integration"
	},
	{
		name: "SharePoint design & integration",
		text: "Build cleaner SharePoint environments around how teams actually work.",
		to: "/services",
		hash: "sharepoint"
	},
	{
		name: "Client operations portal",
		text: "Bring client information, processes and workflows into one organised workspace.",
		to: "/services",
		hash: "client-portal"
	},
	{
		name: "Workflow & process automation",
		text: "Replace repetitive manual work with reliable business workflows.",
		to: "/services",
		hash: "ai-workflow-automation"
	},
	{
		name: "Excel rescue & automation",
		text: "Repair fragile spreadsheets and reduce manual spreadsheet work.",
		to: "/services",
		hash: "excel"
	},
	{
		name: "Request & approval systems",
		text: "Create structured request, approval and notification processes.",
		to: "/services",
		hash: "request-approval"
	},
	{
		name: "Analytics & reporting",
		text: "Turn business and website data into useful decisions.",
		to: "/services",
		hash: "analytics"
	},
	{
		name: "Website improvement & search growth",
		text: "Improve visibility, usability, conversion and long-term search performance.",
		to: "/services",
		hash: "search-growth"
	},
	{
		name: "Microsoft 365 solutions",
		text: "Improve how businesses use Microsoft 365 tools together.",
		to: "/services",
		hash: "microsoft-365"
	},
	{
		name: "Zoho setup & optimisation",
		text: "Help businesses choose, configure and simplify their Zoho environment.",
		to: "/services",
		hash: "zoho"
	}
];
var organization = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: "Automation Flow Lab",
	url: "https://automationflowlab.com/",
	email: "Automationflowlab.info@proton.me",
	areaServed: "South Africa",
	description: "We find what's stopping a website from being found, trusted and turning visitors into customers, then help fix it."
};
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(organization) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto w-full max-w-6xl px-5 pb-16 pt-12 md:pb-24 md:pt-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-primary",
					children: "Website Growth Check"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-4xl font-display text-4xl leading-tight text-ink md:text-6xl",
					children: "Is your website actually helping your business grow?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg text-muted",
					children: "Find out what's stopping your website from being found, trusted and turning visitors into customers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 max-w-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WebsiteCheck, {
						source: "homepage",
						id: "check"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: "No account required. Get your initial website check in moments."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			"aria-labelledby": "missing-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-6xl px-5 py-16 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "missing-heading",
						className: "font-display text-3xl md:text-4xl",
						children: "See what your website is missing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "Your Website Growth Check looks for the issues most likely to affect your visibility, credibility, customer experience and growth."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
						children: looks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl border border-line bg-surface p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans text-base font-semibold",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: item.text
							})]
						}, item.name))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			"aria-labelledby": "example-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-6xl px-5 py-16 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-primary",
						children: "Example"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "example-heading",
						className: "mt-3 max-w-3xl font-display text-3xl md:text-4xl",
						children: "Your results. Without the technical noise."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "An example of how a finding is written. It is not a result from a real website."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 lg:grid-cols-2",
						children: examples.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindingCard, { ...item }, item.area))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			"aria-labelledby": "limit-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-6xl px-5 py-16 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "limit-heading",
						className: "max-w-3xl font-display text-3xl md:text-4xl",
						children: "We find what deserves your attention first."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-lg text-muted",
						children: "The Website Growth Check identifies up to five of the most commercially important issues we find. It is deliberately not a full technical audit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "This helps businesses quickly understand where they may be losing visibility, trust, enquiries or revenue."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			"aria-labelledby": "audit-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:py-20 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "audit-heading",
							className: "font-display text-3xl md:text-4xl",
							children: "Found something worth fixing?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm font-semibold text-primary",
							children: "Website Revenue & Growth Audit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: "The Website Growth Check is only the starting point. Our full Website Revenue & Growth Audit looks deeper into the website, competitors and commercial opportunities to determine what's holding growth back and where the strongest opportunities exist."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/audit",
							onClick: () => track("full_audit_cta_clicked", { source: "homepage" }),
							className: "mt-6 inline-flex h-12 items-center justify-center rounded-sm bg-primary px-5 text-base font-semibold text-primary-fg",
							children: "Get my full website audit"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3 sm:grid-cols-2 lg:col-span-6",
					children: auditLooks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xl border border-line bg-surface px-4 py-3 text-sm font-semibold",
						children: item
					}, item))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			"aria-labelledby": "process-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-6xl px-5 py-16 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "process-heading",
					className: "max-w-3xl font-display text-3xl md:text-4xl",
					children: "We don't just find problems. We help fix them."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-4 md:grid-cols-4",
					children: process.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-line bg-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-sm text-primary",
								children: String(index + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl",
								children: step.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: step.text
							})
						]
					}, step.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			"aria-labelledby": "other-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-6xl px-5 py-16 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "other-heading",
					className: "font-display text-3xl",
					children: "Other ways we help"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-3 sm:grid-cols-2",
					children: otherHelp.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						hash: item.hash,
						className: "block rounded-xl border border-line bg-surface p-4 hover:border-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-sans text-base font-semibold",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: item.text
						})]
					}) }, item.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			"aria-labelledby": "close-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-6xl px-5 py-16 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "close-heading",
						className: "max-w-3xl font-display text-3xl md:text-5xl",
						children: "Your website should do more than exist."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg",
						children: "It should help people:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-1 font-display text-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Find you." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Trust you." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Choose you." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-muted",
						children: "Start by finding out what's getting in the way."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 max-w-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WebsiteCheck, {
							source: "homepage",
							id: "check-again"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-sm text-muted",
						children: site.supporting
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
