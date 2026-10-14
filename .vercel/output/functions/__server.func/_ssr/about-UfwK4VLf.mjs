import { t as contentSettings } from "./content-settings-DQ6GQrb6.mjs";
import { c as site, s as serviceGroups } from "./site-content-C_h7gjI1.mjs";
import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as PageIntro } from "./router-CqeGmUdl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-UfwK4VLf.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const person = [contentSettings.ownerName, contentSettings.ownerRole].filter(Boolean).join(", ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			eyebrow: "About",
			title: "Find it. Fix it. Grow it.",
			lede: site.positioning
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl space-y-10 px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "What we do"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: "The first step for most businesses is a Website Growth Check, then a paid audit where the findings justify it. Implementation can be the website itself, or the systems around the work: workflows, Microsoft 365, SharePoint, Excel, Zoho, analytics, portals and monitoring."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: "Automation remains part of the work. It is not the whole of the company."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "How a website engagement runs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "mt-4 space-y-3 text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-ink",
									children: "Audit. "
								}), "Find what is holding the business back."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-ink",
									children: "Fix. "
								}), "Correct the problems affecting trust, visibility and conversion."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-ink",
									children: "Grow. "
								}), "Improve search visibility, customer journeys and market reach."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-ink",
									children: "Monitor. "
								}), "Track performance, issues and new opportunities."] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tools/growth-check",
							className: "mt-4 inline-flex h-11 items-center font-semibold text-primary",
							children: "Start with the Website Growth Check"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "The work, by outcome"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-4",
							children: serviceGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: group.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: group.items.map((item) => item.name).join(" · ")
							})] }, group.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "mt-4 inline-flex h-11 items-center font-semibold text-primary",
							children: "See services"
						})
					]
				}),
				person || contentSettings.biography || contentSettings.credentials || contentSettings.location ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Who you are writing to"
						}),
						person ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-ink",
							children: person
						}) : null,
						contentSettings.biography ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: contentSettings.biography
						}) : null,
						contentSettings.credentials ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: contentSettings.credentials
						}) : null,
						contentSettings.location ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: contentSettings.location
						}) : null
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-muted",
						children: [
							"Email",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-semibold text-ink underline decoration-line underline-offset-4",
								href: `mailto:${site.email}`,
								children: site.email
							}),
							" ",
							"or use the contact form."
						]
					})]
				})
			]
		})]
	});
}
//#endregion
export { AboutPage as component };
