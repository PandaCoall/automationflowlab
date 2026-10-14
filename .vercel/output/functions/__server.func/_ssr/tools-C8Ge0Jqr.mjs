import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { l as tools } from "./site-content-C_h7gjI1.mjs";
import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as PageIntro } from "./router-CqeGmUdl.mjs";
import { t as track } from "./analytics-Dt7yDY7a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools-C8Ge0Jqr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ToolOpen({ slug, label, className }) {
	if (slug === "certflow") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/tools/certflow",
		className,
		children: label
	});
	if (slug === "growth-check") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/tools/growth-check",
		className,
		children: label
	});
	if (slug === "zoho-fit") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/tools/zoho-fit",
		className,
		children: label
	});
	if (slug === "license-compare") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/tools/license-compare",
		className,
		children: label
	});
	return null;
}
function ToolsPage() {
	const available = tools.filter((tool) => tool.status === "available");
	(0, import_react.useEffect)(() => {
		track("tools_page_viewed");
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			eyebrow: "Tools",
			title: "Tools",
			lede: "Practical tools from Automation Flow Lab to help businesses make better technology and growth decisions."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto grid w-full max-w-6xl gap-4 px-5 md:grid-cols-2",
			children: available.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-col rounded-xl border border-line bg-surface p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: tool.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 flex-1 text-sm text-muted",
						children: tool.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolOpen, {
						slug: tool.slug,
						label: `Open ${tool.name}`,
						className: "mt-5 inline-flex h-11 items-center font-semibold text-primary"
					})
				]
			}, tool.slug))
		})]
	});
}
//#endregion
export { ToolsPage as component };
