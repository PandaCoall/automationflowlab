import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { s as serviceGroups } from "./site-content-C_h7gjI1.mjs";
import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as PageIntro } from "./router-CqeGmUdl.mjs";
import { t as track } from "./analytics-Dt7yDY7a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CMLfqkBj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	(0, import_react.useEffect)(() => {
		track("service_page_viewed");
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			eyebrow: "Services",
			title: "Help organised around the result",
			lede: "Find the friction, fix it, and give the business a better chance to grow. The detail of a job is agreed in a scope, not published as a manual."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-12 px-5",
			children: [serviceGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": `${group.id}-heading`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: `${group.id}-heading`,
					className: "font-display text-3xl",
					children: group.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-line border-y border-line",
					children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						id: item.slug,
						className: "scroll-mt-24 grid gap-2 py-4 sm:grid-cols-12 sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans text-base font-semibold",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: item.summary
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 sm:col-span-4 sm:justify-end",
							children: [item.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.href,
								className: "inline-flex h-11 items-center text-sm font-semibold text-primary",
								children: "Read the audit"
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								search: { topic: item.enquiryTopic },
								onClick: () => track("contact_cta_clicked", { source: "services" }),
								className: "inline-flex h-11 items-center text-sm font-semibold text-primary",
								children: "Enquire"
							})]
						})]
					}, item.slug))
				})]
			}, group.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "max-w-2xl text-sm text-muted",
				children: [
					"Starting prices for defined pieces of work are on the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pricing",
						className: "font-semibold text-primary",
						children: "pricing"
					}),
					" ",
					"page. A final fee is confirmed in writing. We do not guarantee a ranking, a traffic number, or a revenue figure."
				]
			})]
		})]
	});
}
//#endregion
export { ServicesPage as component };
