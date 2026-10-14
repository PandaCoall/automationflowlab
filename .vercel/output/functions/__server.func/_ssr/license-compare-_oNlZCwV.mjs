import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as regions, i as needLabels, r as compare } from "./router-CqeGmUdl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/license-compare-_oNlZCwV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function money(amount, currency) {
	return new Intl.NumberFormat("en", {
		style: "currency",
		currency,
		maximumFractionDigits: 0
	}).format(amount);
}
function Groups({ products, value, onChange }) {
	const groups = [
		"Business",
		"Enterprise",
		"Frontline",
		"Server"
	].filter((group) => products.some((p) => p.group === group));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: "mt-1 h-11 w-full rounded-sm border border-line bg-surface px-3 text-sm",
		value,
		onChange: (e) => onChange(e.target.value),
		children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
			label: group,
			children: products.filter((p) => p.group === group).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: p.id,
				children: p.name
			}, p.id))
		}, group))
	});
}
var needs = Object.keys(needLabels);
function LicencePage() {
	const [region, setRegion] = (0, import_react.useState)("with-teams");
	const [products, setProducts] = (0, import_react.useState)([]);
	const [rates, setRates] = (0, import_react.useState)([]);
	const [source, setSource] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [left, setLeft] = (0, import_react.useState)("");
	const [right, setRight] = (0, import_react.useState)("");
	const [seats, setSeats] = (0, import_react.useState)(10);
	const [budget, setBudget] = (0, import_react.useState)("");
	const [picked, setPicked] = (0, import_react.useState)(["email", "desktop"]);
	const [verdict, setVerdict] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancel = false;
		setBusy(true);
		setError("");
		setVerdict(null);
		fetch(`/api/license-catalog?region=${region}`).then(async (res) => {
			const data = await res.json();
			if (!res.ok || !data.products) throw new Error(data.error ?? "Could not load prices");
			if (cancel) return;
			setProducts(data.products);
			setRates((data.rates ?? []).filter((row) => typeof row.rate === "number"));
			setSource(data.source ?? "");
			setLeft(data.products[0]?.id ?? "");
			setRight(data.products[1]?.id ?? data.products[0]?.id ?? "");
		}).catch((err) => {
			if (!cancel) setError(err.message);
		}).finally(() => {
			if (!cancel) setBusy(false);
		});
		return () => {
			cancel = true;
		};
	}, [region]);
	const field = "mt-1 h-11 w-full rounded-sm border border-line bg-surface px-3 text-sm";
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
				children: "Microsoft licence comparison"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: "Free. Each visit reads Microsoft’s published commercial price page and uses those figures. Nothing on this page is written by a model, and Microsoft does not offer a public price API without a partner login."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl rounded-lg border border-line bg-surface p-4 text-sm text-muted",
				children: "Read this at your own discretion. Prices, taxes, currency, and what a suite includes can change, and they can differ from the price Microsoft or a reseller offers you. Automation Flow Lab is not liable for any loss, cost, or decision that follows from using this comparison."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 grid gap-4 rounded-xl border border-line bg-surface p-5",
				onSubmit: (e) => {
					e.preventDefault();
					if (left === right) {
						setError("Pick two different products.");
						setVerdict(null);
						return;
					}
					setError("");
					const amount = budget.trim() ? Number(budget) : null;
					setVerdict(compare({
						products,
						leftId: left,
						rightId: right,
						seats,
						budget: amount != null && Number.isFinite(amount) ? amount : null,
						needs: picked
					}));
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm font-semibold",
						children: ["Where the licences are bought", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: field,
							value: region,
							onChange: (e) => setRegion(e.target.value),
							children: regions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item.id,
								children: item.label
							}, item.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: regions.find((item) => item.id === region)?.detail
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold",
								children: ["First product", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Groups, {
									products,
									value: left,
									onChange: setLeft
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold",
								children: ["Second product", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Groups, {
									products,
									value: right,
									onChange: setRight
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold",
								children: [
									"Quantity",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: field,
										type: "number",
										min: 1,
										value: seats,
										onChange: (e) => setSeats(Number(e.target.value))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-xs font-normal text-muted",
										children: "Business suites are published for 1–300 users. Enterprise suites are for above that."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold",
								children: ["Budget per user / month (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: field,
									inputMode: "decimal",
									value: budget,
									onChange: (e) => setBudget(e.target.value),
									placeholder: "Leave blank if you have no cap"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-sm font-semibold",
						children: "What the licence has to cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid gap-2 sm:grid-cols-2",
						children: needs.map((need) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: picked.includes(need),
								onChange: (e) => setPicked((list) => e.target.checked ? [...list, need] : list.filter((item) => item !== need))
							}), needLabels[need]]
						}, need))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: busy || products.length < 2,
						className: "inline-flex h-11 items-center justify-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-fg",
						children: busy ? "Reading Microsoft’s list" : "Compare"
					})
				]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-danger",
				children: error
			}) : null,
			verdict ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 rounded-xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: verdict.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 list-disc space-y-2 pl-5 text-sm text-muted",
						children: verdict.reasons.map((reason) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: reason }, reason))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: verdict.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-lg border border-line p-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: row.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: row.group
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2",
									children: [
										money(row.monthly, "USD"),
										" ",
										row.unitLabel
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 space-y-1 text-muted",
									children: rates.map((rate) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										rate.country,
										": ",
										money(row.monthly * rate.rate, rate.currency),
										row.unit === "user-month" ? " per user / month" : ""
									] }, rate.currency))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2",
									children: row.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm font-semibold",
									children: "Published with"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-1 list-disc space-y-1 pl-5 text-muted",
									children: row.features.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-muted",
									children: ["Against the boxes you ticked: ", row.covers.join(", ") || "none of those."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: row.missing.length ? `Does not include: ${row.missing.join(", ")}` : "Covers the needs you ticked."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: row.underMin || row.overCap ? "mt-2 font-semibold" : "mt-2 text-muted",
									children: row.seatRule
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: row.unit === "pack" ? "Pack or server price. It is not scored against a per-user budget." : row.overBudget ? "Over the per-user budget you entered." : budget.trim() ? "Inside the per-user budget you entered." : "No per-user budget was set."
								})
							]
						}, row.id))
					}),
					source ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-4 inline-flex text-sm font-semibold text-primary",
						href: source,
						children: "Public list this was read from"
					}) : null
				]
			}) : null
		]
	});
}
//#endregion
export { LicencePage as component };
