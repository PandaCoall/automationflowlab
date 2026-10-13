import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/growth-check-D9UHEZAf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tone = {
	CRITICAL: "bg-primary text-primary-fg",
	"NEEDS WORK": "border border-primary text-primary",
	WORKING: "border border-line text-ink"
};
var steps = [
	"Website check",
	"Paid audit",
	"Fix",
	"Grow",
	"Monitor"
];
function GrowthPage() {
	const [url, setUrl] = (0, import_react.useState)("");
	const [business, setBusiness] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [result, setResult] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-6xl px-5 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/tools",
				className: "text-sm font-semibold text-primary",
				children: "All tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: "Website Growth Check"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: "Website Growth Check is the site intelligence system."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 flex flex-col gap-2 text-sm font-semibold sm:flex-row sm:flex-wrap sm:items-center",
				children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-sm border border-line bg-surface px-3 py-2",
						children: step
					}), index < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-primary sm:inline",
						"aria-hidden": "true",
						children: "→"
					}) : null]
				}, step))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-sm text-muted",
				children: "Start with the website check. The paid audit, the fix, the growth work, and monitoring are booked separately."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 grid gap-3 rounded-xl border border-line bg-surface p-5",
				onSubmit: async (e) => {
					e.preventDefault();
					setBusy(true);
					setError("");
					setResult(null);
					try {
						const res = await fetch("/api/growth-check", {
							method: "POST",
							headers: { "content-type": "application/json" },
							body: JSON.stringify({
								url,
								business
							})
						});
						const data = await res.json();
						if (!res.ok || !data.findings || !data.overall) setError(data.error ?? "The check failed.");
						else setResult({
							overall: data.overall,
							findings: data.findings,
							finalUrl: data.finalUrl ?? url
						});
					} catch {
						setError("The check failed.");
					} finally {
						setBusy(false);
					}
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm font-semibold",
						children: ["Website URL", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							value: url,
							onChange: (e) => setUrl(e.target.value),
							placeholder: "https://example.com",
							className: "mt-1 h-11 w-full rounded-sm border border-line bg-paper px-3 text-sm"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm font-semibold",
						children: ["What does the business do? (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: business,
							onChange: (e) => setBusiness(e.target.value),
							placeholder: "For example: website support for small firms",
							className: "mt-1 h-11 w-full rounded-sm border border-line bg-paper px-3 text-sm"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							"The website address, and the optional description if you add one, are sent so this check can read the public page. They are not saved as an account or an enquiry.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "font-semibold underline decoration-line underline-offset-4",
								children: "Privacy Policy"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: busy,
						className: "inline-flex h-11 items-center justify-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-fg",
						children: busy ? "Checking" : "Check website"
					})
				]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-danger",
				children: error
			}) : null,
			result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Your Website Growth Check"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm font-semibold",
						children: ["Overall website status: ", result.overall]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 max-w-2xl text-muted",
						children: ["We identified opportunities that may be limiting this website’s commercial potential. Page read: ", result.finalUrl]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 overflow-x-auto rounded-xl border border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[640px] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-semibold",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-semibold",
										children: "Area"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-semibold",
										children: "What it means"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: result.findings.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-line align-top",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-flex rounded-sm px-2 py-1 text-xs font-semibold ${tone[item.status]}`,
											children: item.status
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-semibold",
										children: item.area
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-4 py-3 text-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.summary }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1",
											children: item.meaning
										})]
									})
								]
							}, item.area)) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-xl border border-line bg-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "This was the website check."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-2xl text-sm text-muted",
								children: "Next is a paid audit, then the fix, the growth work, and monitoring. Those steps are booked separately. This check does not include them."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								search: { topic: "Website growth audit" },
								className: "mt-4 inline-flex h-11 items-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-fg",
								children: "Book the paid audit"
							})
						]
					})
				]
			}) : null
		]
	});
}
//#endregion
export { GrowthPage as component };
