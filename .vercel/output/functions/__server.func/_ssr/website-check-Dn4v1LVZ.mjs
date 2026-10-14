import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as track } from "./analytics-Dt7yDY7a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/website-check-Dn4v1LVZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tone = {
	CRITICAL: "bg-primary text-primary-fg",
	"NEEDS WORK": "border border-primary text-primary",
	WORKING: "border border-line text-ink"
};
var overallCopy = {
	CRITICAL: "We identified issues that may be stopping this website from being found, trusted, or chosen.",
	"NEEDS WORK": "We identified several areas that may be limiting this website’s ability to attract, convince, or convert potential customers.",
	WORKING: "This initial check did not find a critical issue on the page we read. A full audit can still find opportunities this short check does not cover."
};
function StatusMark({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex rounded-sm px-2 py-1 text-xs font-semibold ${tone[status]}`,
		children: status
	});
}
function FindingCard({ status, area, summary, meaning }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-line bg-surface p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusMark, { status }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-sans text-base font-semibold",
					children: area
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm",
				children: summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm font-semibold",
				children: "What this may mean"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: meaning
			})
		]
	});
}
function WebsiteCheck({ source, id = "website-check" }) {
	const fieldId = (0, import_react.useId)();
	const [url, setUrl] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [result, setResult] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "rounded-xl border border-line bg-surface p-4 sm:p-5",
				onSubmit: async (event) => {
					event.preventDefault();
					setError("");
					setResult(null);
					const raw = url.trim();
					let parsed;
					try {
						parsed = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
					} catch {
						setError("Enter a website address, such as yourbusiness.com.");
						return;
					}
					if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
						setError("Enter a public website address.");
						return;
					}
					setBusy(true);
					track("growth_check_started", { source });
					try {
						const response = await fetch("/api/growth-check", {
							method: "POST",
							headers: { "content-type": "application/json" },
							body: JSON.stringify({ url: parsed.toString() })
						});
						const data = await response.json();
						if (!response.ok || !data.findings || !data.overall) setError(data.error ?? "The check could not be completed.");
						else {
							setResult({
								overall: data.overall,
								findings: data.findings.slice(0, 5)
							});
							track("growth_check_completed", {
								source,
								status: data.overall
							});
						}
					} catch {
						setError("The check could not be completed.");
					} finally {
						setBusy(false);
					}
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: fieldId,
						className: "text-sm font-semibold",
						children: "Website address"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: fieldId,
							name: "url",
							type: "url",
							inputMode: "url",
							autoComplete: "url",
							required: true,
							value: url,
							onChange: (event) => setUrl(event.target.value),
							placeholder: "https://yourwebsite.com",
							"aria-invalid": error ? true : void 0,
							"aria-describedby": error ? `${fieldId}-error` : `${fieldId}-note`,
							className: "h-12 w-full rounded-sm border border-line bg-paper px-3 text-base"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: busy,
							className: "inline-flex h-12 shrink-0 items-center justify-center rounded-sm bg-primary px-5 text-base font-semibold text-primary-fg sm:min-w-48",
							children: busy ? "Checking" : "Check my website"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						id: `${fieldId}-note`,
						className: "mt-3 text-sm text-muted",
						children: [
							"The address is used to read the public page and is not saved as an account.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "font-semibold underline decoration-line underline-offset-4",
								children: "Privacy Policy"
							}),
							"."
						]
					})
				]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: `${fieldId}-error`,
				role: "alert",
				className: "mt-3 text-sm text-danger",
				children: error
			}) : null,
			result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-primary",
						children: "Your website status"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-4xl",
						children: result.overall
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: overallCopy[result.overall]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4",
						children: result.findings.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindingCard, { ...item }, `${item.area}-${item.status}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-xl border border-line bg-paper p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: "This is only your initial check."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-muted",
								children: "We found the issues most deserving your attention first. A full Website Revenue & Growth Audit looks deeper into search visibility, conversion, technical health, content, trust, competitors, and growth opportunities."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/audit",
									onClick: () => track("full_audit_cta_clicked", { source }),
									className: "inline-flex h-12 items-center justify-center rounded-sm bg-primary px-5 text-base font-semibold text-primary-fg",
									children: "Get my full website audit"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									search: { topic: "Website Revenue & Growth Audit" },
									onClick: () => track("contact_cta_clicked", { source }),
									className: "inline-flex h-12 items-center justify-center rounded-sm border border-line bg-surface px-5 text-base font-semibold",
									children: "Talk to Automation Flow Lab"
								})]
							})
						]
					})
				]
			}) : null
		]
	});
}
//#endregion
export { WebsiteCheck as n, FindingCard as t };
