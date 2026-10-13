import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as PageIntro, x as tools } from "./router-vd1vzWli.mjs";
import { n as ToolOpen, t as StatusPill } from "./status-pill-CDomeKQS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools-BbebVaA1.js
var import_jsx_runtime = require_jsx_runtime();
function ToolsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			eyebrow: "Tools",
			title: "IT tools you can try.",
			lede: "Certflow, the Microsoft licence comparison, Website Growth Check, and the Zoho setup check are live. The rest are demos. A demo does not sign into Microsoft, Zoho, or your mailbox."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto grid w-full max-w-6xl gap-4 px-5 md:grid-cols-2",
			children: tools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-col rounded-xl border border-line bg-surface p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: tool.status }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-2xl",
						children: tool.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm font-semibold",
						children: "Who it is for"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: tool.audience
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 flex-1 text-sm text-muted",
						children: tool.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolOpen, {
						slug: tool.slug,
						label: tool.status === "available" ? `Open ${tool.name}` : "Try the demo",
						className: "mt-5 inline-flex h-11 items-center font-semibold text-primary"
					})
				]
			}, tool.slug))
		})]
	});
}
//#endregion
export { ToolsPage as component };
