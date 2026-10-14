import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as signIn } from "./client-CVqXY6bk.mjs";
import { t as GROK_PROVIDERS } from "./server-CRrus_0k.mjs";
import { a as legal } from "./legal-CJMjhEPX.mjs";
import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as PageIntro, d as useCurrentUserState } from "./router-CqeGmUdl.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { n as createSsrRpc, t as Button } from "./createSsrRpc-Djx4NPvJ.mjs";
import { t as authMiddleware } from "./middleware-DRll_-Ke.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-0r8X1-c-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var recordTermsAcceptance = createServerFn({ method: "POST" }).validator((input) => {
	const data = input;
	const version = data.version === legal.version ? legal.version : "";
	const context = data.context === "sign-in" ? "sign-in" : "";
	if (!version || !context) throw new Error("Invalid terms acceptance");
	return {
		version,
		context
	};
}).handler(createSsrRpc("0a38e1c23fec9feca51951b7d362e63e32d88434c246c06928fc9666115d46f5"));
var attachTermsAcceptance = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const data = input;
	const id = typeof data.id === "string" ? data.id : "";
	if (!/^[0-9a-f-]{36}$/i.test(id)) throw new Error("Invalid acceptance");
	return { id };
}).handler(createSsrRpc("5d0bf66196d8d696f51b798350a6840f5875dcfbf54d4e2786d118972adb7c99"));
var ACCEPTANCE_KEY = "afl-terms-acceptance";
function LoginPage() {
	const { user, isPending } = useCurrentUserState();
	const [accepted, setAccepted] = (0, import_react.useState)(false);
	const [recorded, setRecorded] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!user) return;
		const raw = window.localStorage.getItem(ACCEPTANCE_KEY);
		if (!raw) return;
		const saved = JSON.parse(raw);
		if (!saved.id) return;
		attachTermsAcceptance({ data: { id: saved.id } }).catch(() => void 0);
	}, [user]);
	async function onAccept(checked) {
		setError("");
		setAccepted(checked);
		setRecorded(false);
		if (!checked) return;
		setBusy(true);
		try {
			const saved = await recordTermsAcceptance({ data: {
				version: legal.version,
				context: "sign-in"
			} });
			window.localStorage.setItem(ACCEPTANCE_KEY, JSON.stringify({
				id: saved.id,
				version: saved.version,
				acceptedAt: (/* @__PURE__ */ new Date()).toISOString()
			}));
			setRecorded(true);
		} catch {
			setAccepted(false);
			setError("The terms acceptance could not be recorded. Sign-in stays closed until it is.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			eyebrow: "Staff",
			title: "Sign in to the submission inbox",
			lede: "This is for reading enquiries sent through the site. It is not a client portal, and it does not open the tools — those workflows are not built yet."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-md px-5",
			children: [
				isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-28 rounded-xl border border-line bg-surface",
					"aria-hidden": "true"
				}) : null,
				!isPending && user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-surface p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"You are signed in",
						user.primaryEmail ? ` as ${user.primaryEmail}` : "",
						"."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							children: "Open the inbox"
						})
					})]
				}) : null,
				!isPending && !user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-start gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "mt-1 size-5 accent-primary",
								checked: accepted,
								onChange: (event) => void onAccept(event.target.checked)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"I agree to the",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/terms",
									className: "font-semibold underline decoration-line underline-offset-4",
									children: "Terms of Service"
								}),
								" ",
								"(version ",
								legal.version,
								"). The",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy",
									className: "font-semibold underline decoration-line underline-offset-4",
									children: "Privacy Policy"
								}),
								" ",
								"explains how account information is used. This is not consent to marketing or optional tracking."
							] })]
						}),
						GROK_PROVIDERS.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							disabled: !accepted || !recorded || busy,
							onClick: () => void signIn(provider.providerId, { callbackURL: "/admin" }),
							children: ["Continue with ", provider.label]
						}, provider.providerId)),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-danger",
							role: "alert",
							children: error
						}) : null
					]
				}) : null
			]
		})]
	});
}
//#endregion
export { LoginPage as component };
