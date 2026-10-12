import { r as signIn } from "./client-CVqXY6bk.mjs";
import { t as GROK_PROVIDERS } from "./server-DNFwe2uP.mjs";
import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as useCurrentUserState, u as PageIntro } from "./router-rIwxJfXx.mjs";
import { t as Button } from "./button-BO3taf6C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CcBPK7tz.js
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const { user, isPending } = useCurrentUserState();
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
				!isPending && !user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-3",
					children: GROK_PROVIDERS.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						onClick: () => signIn(provider.providerId, { callbackURL: "/admin" }),
						children: ["Continue with ", provider.label]
					}, provider.providerId))
				}) : null
			]
		})]
	});
}
//#endregion
export { LoginPage as component };
