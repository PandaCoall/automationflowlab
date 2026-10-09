import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route, r as demos } from "./router-DZgZGZuL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/play._slug-CQxAtHdg.js
var import_jsx_runtime = require_jsx_runtime();
function PlayPage() {
	const { tool } = Route.useLoaderData();
	const Demo = demos[tool.slug];
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
				children: tool.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: tool.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Demo, {})
			})
		]
	});
}
//#endregion
export { PlayPage as component };
