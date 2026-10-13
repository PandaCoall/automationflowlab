import { C as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as Route$7 } from "./_ssr/router-CX_y2gCX.mjs";
import { t as EnquiryForm } from "./_ssr/enquiry-form-DUZREFOg.mjs";
import { n as ToolOpen, t as StatusPill } from "./_ssr/status-pill-CDomeKQS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-SW3SJFGy.js
var import_jsx_runtime = require_jsx_runtime();
function ToolPage() {
	const { tool } = Route$7.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-12 md:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "md:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/tools",
					className: "text-sm font-semibold text-primary",
					children: "All tools"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: tool.status })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl md:text-5xl",
					children: tool.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-muted",
					children: tool.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 font-display text-2xl",
					children: "Who it is for"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: tool.audience
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 font-display text-2xl",
					children: "What it is meant to do"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: tool.outcome
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 font-display text-2xl",
					children: "What it will include"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 list-disc space-y-2 pl-5 text-muted",
					children: tool.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: feature }, feature))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 rounded-lg border border-line bg-surface p-4 text-sm text-muted",
					children: tool.status === "available" ? "The signed-in workflow for this tool is live." : tool.status === "demo" ? "You can try this in the browser with your own inputs. It does not write to your live systems." : "This page is not a demo. The signed-in workflow is not built yet."
				}),
				tool.status === "demo" || tool.status === "available" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolOpen, {
					slug: tool.slug,
					label: tool.status === "available" ? `Open ${tool.name}` : "Try the demo",
					className: "mt-4 inline-flex h-11 items-center font-semibold text-primary"
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:col-span-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
				kind: "tool",
				topic: tool.name,
				heading: tool.status === "available" ? "Ask about this tool" : "Request a demo",
				intro: tool.status === "available" ? "Tell us what you want to use it for." : "Tell us what you would want this to do. We will reply when there is something real to show — we will not send you a fake walkthrough."
			})
		})]
	});
}
//#endregion
export { ToolPage as component };
