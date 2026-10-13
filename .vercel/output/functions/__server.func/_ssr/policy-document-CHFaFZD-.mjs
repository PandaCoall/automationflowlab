import { a as legal } from "./legal-CJMjhEPX.mjs";
import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/policy-document-CHFaFZD-.js
var import_jsx_runtime = require_jsx_runtime();
var linkPattern = /(https?:\/\/[^\s]+|Automationflowlab\.info@proton\.me)/g;
function isSubheading(text) {
	const trimmed = text.trim();
	if (trimmed.length > 72 || trimmed.length < 3) return false;
	if (/[.!?:]$/.test(trimmed)) return false;
	if (trimmed.startsWith("_") || trimmed.startsWith("http") || trimmed.includes("@")) return false;
	return /^[A-Z]/.test(trimmed);
}
function RichText({ text }) {
	const parts = text.split(linkPattern);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: parts.map((part, index) => {
		if (part.startsWith("http://") || part.startsWith("https://")) {
			const href = part.replace(/[).,;]+$/, "");
			const trailing = part.slice(href.length);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "font-semibold text-ink underline decoration-line underline-offset-4",
				href,
				children: href
			}), trailing] }, index);
		}
		if (part === legal.email) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "font-semibold text-ink underline decoration-line underline-offset-4",
			href: `mailto:${legal.email}`,
			children: legal.email
		}, index);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, index);
	}) });
}
function PolicyDocument({ page }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto w-full max-w-3xl px-5 pb-8 pt-12 md:pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/legal",
						className: "text-sm font-semibold text-primary",
						children: "Legal and Policies"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl text-ink md:text-5xl",
						children: page.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted",
						children: ["Version ", legal.version]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: ["Effective ", legal.effectiveDate]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-muted",
						children: page.description
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto w-full max-w-3xl px-5",
				"aria-label": "On this page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-semibold",
					children: "On this page"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 space-y-2 text-sm",
					children: page.sections.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "font-semibold text-primary",
						href: `#${item.id}`,
						children: item.heading
					}) }, item.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-10 w-full max-w-3xl space-y-10 px-5",
				children: page.sections.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: item.id,
					className: "scroll-mt-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: item.heading
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-4 leading-relaxed text-muted",
						children: item.paragraphs.map((paragraph) => isSubheading(paragraph) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "pt-2 font-display text-xl text-ink",
							children: paragraph
						}, paragraph) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, { text: paragraph }) }, paragraph))
					})]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-12 w-full max-w-3xl px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/legal",
					className: "font-semibold text-primary",
					children: "Back to Legal and Policies"
				})
			})
		]
	});
}
//#endregion
export { PolicyDocument as t };
