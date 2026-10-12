import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/status-pill-CDomeKQS.js
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/tools/play/$slug",
		params: { slug },
		className,
		children: label
	});
}
function StatusPill({ status }) {
	if (status === "available") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex h-7 items-center rounded-sm bg-primary px-2 font-sans text-sm font-semibold text-primary-fg",
		children: "Available"
	});
	if (status === "demo") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex h-7 items-center rounded-sm border border-primary bg-surface px-2 font-sans text-sm font-semibold text-primary",
		children: "Demo"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex h-7 items-center rounded-sm border border-line bg-surface px-2 font-sans text-sm font-semibold text-ink",
		children: "Coming soon"
	});
}
//#endregion
export { ToolOpen as n, StatusPill as t };
