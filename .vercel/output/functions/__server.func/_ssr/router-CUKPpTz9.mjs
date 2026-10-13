import { o as __toESM } from "../_runtime.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { L as string, N as number, P as object, R as union, j as literal } from "../_libs/@better-auth/core+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as signOut, t as authClient } from "./client-CVqXY6bk.mjs";
import { i as hasGateSessionMarker, n as auth } from "./server-CRrus_0k.mjs";
import { a as legal, c as safetyPage, i as copyrightPage, l as termsPage, r as cookiePage, s as privacyPage, t as communityPage } from "./legal-CJMjhEPX.mjs";
import { t as contentSettings } from "./content-settings-DQ6GQrb6.mjs";
import { C as require_jsx_runtime, J as redirect, S as useRouter, Z as notFound, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as Navigate, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert, o as Menu, t as X, u as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as utils, t as readSync } from "../_libs/xlsx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-content-D2gH3Sx1.js
var site = {
	name: "Automation Flow Lab",
	domain: contentSettings.domain,
	email: contentSettings.contactEmail,
	positioning: "Business tools that do the repetitive work for you.",
	supporting: "We build practical webapps, AI-powered workflows, and connected business systems, then support them after launch. From Excel problems to Zoho and SharePoint configuration, we make your processes easier to run."
};
var nav = [
	{
		to: "/tools",
		label: "Tools"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/pricing",
		label: "Pricing"
	},
	{
		to: "/custom-builds",
		label: "Custom Builds"
	},
	{
		to: "/support-plans",
		label: "Support Plans"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
/**
* "available" means the signed-in product works (Certflow).
* "demo" means you can try it in the browser with your own inputs. It does not write to the customer's live systems.
*/
var tools = [
	{
		slug: "certflow",
		name: "Certflow",
		status: "available",
		summary: "Turn a learner spreadsheet into one certificate PDF per person, then run the send queue without stopping the whole batch.",
		audience: "Training teams who still build hundreds of certificates by hand or through a flow that dies halfway.",
		outcome: "Upload the list, check the certificate with the logo, download the PDFs, and retry only the rows that did not send.",
		features: [
			"Excel or CSV in, with column mapping",
			"Live PDF preview, logo on the left or right, three layouts and three colours",
			"One PDF per learner in a ZIP, plus a result sheet",
			"A row that fails or is throttled does not stop the rest"
		]
	},
	{
		slug: "automation-watch",
		name: "Automation Watch",
		status: "demo",
		summary: "Sample flows, each with the error the run returned and a plain explanation of why it stopped.",
		audience: "Someone new to flows who can see an error code and still not tell what to look at.",
		outcome: "You can read a failed step in ordinary language. This page does not connect to a live flow.",
		features: [
			"A set of sample flow links, already attached",
			"The error as the platform wrote it",
			"What that error means, and why it usually happens",
			"You cannot paste your own link. A live read of your flows is separate work"
		]
	},
	{
		slug: "growth-check",
		name: "Website Growth Check",
		status: "available",
		summary: "Website check → paid audit → fix → grow → monitor.",
		audience: "A business that wants a clear read of the website, then a path from that check to the paid work.",
		outcome: "Website Growth Check is the site intelligence system. The check is the start. The paid audit, the fix, the growth work, and monitoring are booked separately.",
		features: [
			"Website check — the first read of the public site",
			"Paid audit — a deeper look, quoted separately",
			"Fix — the repairs agreed after the audit",
			"Grow — the changes that support enquiries",
			"Monitor — a later look at the site after the work"
		]
	},
	{
		slug: "license-compare",
		name: "Microsoft licence comparison",
		status: "available",
		summary: "Put two Microsoft 365 suites side by side using the public commercial price list.",
		audience: "Anyone choosing a Microsoft suite on budget, what it has to cover, and where it is bought.",
		outcome: "A plain answer on which of the two fits better, and why, from the prices Microsoft publishes.",
		features: [
			"Live read of Microsoft’s public commercial price list",
			"Two products, a user count, and an optional per-user budget",
			"Suites with Teams, or the EEA and Switzerland suites without Teams",
			"Free. US dollars, before tax, and not a quote or a partner discount"
		]
	},
	{
		slug: "excel-health-check",
		name: "Excel Health Check",
		status: "demo",
		summary: "A written review of a workbook: what is wrong, what is fragile, and what to fix first.",
		audience: "Anyone whose spreadsheet is the system — slow, wrong, or understood by only one person.",
		outcome: "A repair order you can act on — not a dashboard bolted onto a workbook that is already untrustworthy.",
		features: [
			"A review of structure, formulas, and where the numbers come from",
			"Notes on broken links, hidden sheets, and reports that depend on one person’s layout",
			"A split between figures that are wrong and a file that is merely hard to maintain",
			"A short repair plan. Hands-on fixes are booked separately as Excel work, not inside this page"
		]
	},
	{
		slug: "form-to-inbox-check",
		name: "Form-to-Inbox Check",
		status: "demo",
		summary: "Confirm that a website form still lands in the mailbox or system it is supposed to hit.",
		audience: "The person who finds out a contact form died only when a customer says they never heard back.",
		outcome: "You know the form posts, and where the message goes, before the next enquiry disappears.",
		features: [
			"A named form and the destination it should reach",
			"A record of the last successful delivery you checked",
			"A clear failed state when the destination does not receive it",
			"No claim that we connect to a mailbox we have not configured"
		]
	},
	{
		slug: "zoho-fit",
		name: "Zoho setup check",
		status: "available",
		summary: "Tick what you need. See the Zoho apps that cover it, and which extras are wasted effort.",
		audience: "Anyone about to buy Zoho, or already paying for apps they do not open.",
		outcome: "The smallest set for the work you named, and the few setup steps that mean it is actually done.",
		features: [
			"You tick the work, not a product catalogue",
			"A short list of what to get, what to keep, and what to skip",
			"A note when Zoho One, a second invoicing app, or a side tool is extra",
			"It does not sign into Zoho and it is not a quote"
		]
	},
	{
		slug: "sharepoint-library-builder",
		name: "SharePoint library",
		status: "demo",
		summary: "Move a file between Incoming, Current, and Filed, and watch the status follow it.",
		audience: "Teams whose files sit in personal drives and email, and who want to see a library before anyone builds one.",
		outcome: "You can see where a file lives, and which copy is the current one, without opening SharePoint.",
		features: [
			"Drag a file into Incoming, Current, or Filed",
			"The status changes with the move, so the current copy is obvious",
			"Nothing is uploaded and no SharePoint site is created",
			"Building the real library is the SharePoint service"
		]
	},
	{
		slug: "change-request",
		name: "Change Request",
		status: "demo",
		summary: "One place for a technical ask: access, a publish, or a change — and the decision that followed.",
		audience: "The person who gets “I can’t open the library” or “please publish this” by email, then cannot find what was approved.",
		outcome: "The request has a status, a named owner, and a recorded yes, no, or send-back.",
		features: [
			"A form for access, publish, or a system change — not leave or expenses",
			"A queue of items waiting on a technical decision",
			"Who decided, and a short reason",
			"A status the requester can check without another chase"
		]
	}
];
tools.sort((a, b) => Number(a.status !== "available") - Number(b.status !== "available"));
function getTool(slug) {
	return tools.find((tool) => tool.slug === slug);
}
var services = [
	{
		slug: "ai-workflow-automation",
		name: "AI and workflow automation",
		problem: "The same details get copied between email, spreadsheets, and chat, and the next step waits on someone remembering it.",
		deliverables: [
			"A written map of the process as it actually runs",
			"An automated workflow for the repetitive steps",
			"A handover note on what runs on its own and what still needs a person",
			"Optional support after it is in use"
		],
		enquiryTopic: "AI and workflow automation"
	},
	{
		slug: "custom-webapps",
		name: "Custom webapp design, development, and ongoing support",
		problem: "A spreadsheet or a chain of emails is doing a job that needs a proper screen, a clear status, and more than one person using it.",
		deliverables: [
			"A scoped webapp for that job",
			"The design and the build",
			"A handover so your team can run it",
			"Ongoing support after launch, if you want it"
		],
		enquiryTopic: "Custom webapp"
	},
	{
		slug: "excel",
		name: "Excel troubleshooting and reporting repair",
		problem: "A workbook is slow, shows the wrong number, or only one person knows how it works.",
		deliverables: [
			"A diagnosis of what is broken",
			"Repairs to formulas and to the way the report is laid out",
			"Notes so someone else can maintain the file",
			"This is hands-on work on your workbook, not a self-serve checker on this website"
		],
		enquiryTopic: "Excel troubleshooting"
	},
	{
		slug: "analytics",
		name: "Website analytics setup and troubleshooting",
		problem: "You cannot tell whether the site is being measured, or the numbers you see do not match what you expect.",
		deliverables: [
			"A working analytics setup, or a repair of the one you have",
			"A check that the site is actually sending data",
			"A plain-language note on what those numbers mean",
			"Where the site already uses Google Analytics, we set that up or fix it. We do not promise a particular vendor feature we have not confirmed on your account"
		],
		enquiryTopic: "Website analytics"
	},
	{
		slug: "zoho",
		name: "Zoho configuration and integrations",
		problem: "Zoho is in place, but the modules, fields, or hand-offs do not match how the business actually works.",
		deliverables: [
			"Configuration of the Zoho apps you already use",
			"A short written record of how it is set up",
			"Connections between those Zoho apps where Zoho itself supports them",
			"We will not promise a third-party connector until we have confirmed it for your account"
		],
		enquiryTopic: "Zoho configuration"
	},
	{
		slug: "sharepoint",
		name: "SharePoint workspace and document-library design",
		problem: "Files live in personal drives and email threads, so people cannot find the current version.",
		deliverables: [
			"A SharePoint workspace structure for the team that will use it",
			"Document libraries with a sensible set of folders or columns",
			"A short guide for the people who will work in it",
			"Permissions agreed with you — not an organisation-wide rollout you have not asked for"
		],
		enquiryTopic: "SharePoint design"
	}
];
var buildSteps = [
	{
		name: "Discovery",
		text: "We talk through the problem, who does the work today, and what a better week would look like. You do not need a specification to start."
	},
	{
		name: "Scoping",
		text: "We write what will be built, what will not, and what we need from you. You can decide whether to go ahead before any build starts."
	},
	{
		name: "Build",
		text: "We design and build the agreed thing, and show you progress you can react to. The length depends on the work — we do not publish a fixed timeline here."
	},
	{
		name: "Handover",
		text: "You get the working system, notes on how to use it, and what to do if it breaks."
	},
	{
		name: "Optional support",
		text: "If you want us to stay on, we agree a support plan. Support is optional. It is not bundled into the build unless we say so in the scope."
	}
];
var plans = [{
	id: "care",
	name: "Care",
	for: "Maintenance and support for one system.",
	includes: [
		"Fixes and small adjustments to that one system",
		"Answers about how that system works",
		"A named point of contact for it"
	],
	notIncluded: [
		"Other systems",
		"New projects or a feature backlog",
		"Monitoring across several tools"
	]
}, {
	id: "operations",
	name: "Operations",
	for: "Several connected systems, plus monitoring.",
	includes: [
		"Care-level maintenance for each system named in the agreement",
		"Agreed checks so a failed hand-off is noticed",
		"A note to you when one of those checks fails"
	],
	notIncluded: ["A standing backlog of new features", "Systems that are not named in the agreement"]
}];
var planAgreementNote = "These are proposed plan scopes, not a contract. Exact response times, working hours, exclusions, and fees are set in each client agreement. Nothing on this page is a price or a guarantee.";
var problems = [
	{
		stuck: "An automation fails overnight and nobody notices until a client does.",
		change: "The workflow has a last-run status you can see without opening every tool."
	},
	{
		stuck: "A spreadsheet is the only copy of the truth, and it breaks.",
		change: "The workbook is diagnosed, then repaired as Excel work — not dressed up as a dashboard."
	},
	{
		stuck: "A form, a tag, or mail stops working after a host or domain change.",
		change: "You check whether it still posts, fires, or leaves — before the next enquiry vanishes."
	},
	{
		stuck: "Someone retypes a PDF or a photo into a sheet or into Zoho.",
		change: "The fields come out for a person to check, then copy into the system that already exists."
	},
	{
		stuck: "SharePoint or Zoho is there, but the setup fights the way the systems should work.",
		change: "Libraries, fields, and mail are configured so the technical hand-off is obvious."
	}
];
var privacySummary = "We store what you submit — your name, email, and the details of the enquiry — so we can reply and keep a record of the request. We also store a short hash of the network address to limit spam, not the address itself. We do not sell this information. To ask for a copy or for deletion, email " + site.email + ". We keep a submission until the enquiry is finished and any agreed follow-up is done, unless you ask us to remove it sooner or we have to keep it.";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CUKPpTz9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-paper px-6 text-center text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-danger",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	const { data, isPending } = authClient.useSession();
	const user = data?.user;
	return {
		user: user ? {
			id: user.id,
			displayName: user.name ?? null,
			primaryEmail: user.email ?? null,
			profileImageUrl: user.image ?? null,
			isDevFallback: false
		} : null,
		isPending
	};
}
/**
* Convenience view of `useCurrentUserState().user` for display (e.g.
* `user?.displayName ?? "Guest"`). NOTE: `null` means *loading OR signed out* —
* for redirects/guards use `useCurrentUserState()` and check `isPending`.
*/
function useCurrentUser() {
	return useCurrentUserState().user;
}
var subscribeToNothing = () => () => {};
var noGateSessionOnServer = () => false;
/**
* Auth state components — plain wrappers around `useCurrentUserState()`.
*
* With auth on, visitors are signed out until they authenticate — in the sandbox
* live preview too, which does real sign-in. The shared dev user appears only
* when auth is disabled (`VITE_AUTH_ENABLED=false`, the shipped default).
* While the session is still resolving, gates that care about signed-out state
* render nothing so there's no signed-out flash on hard reload.
*/
/** Where `RedirectToSignIn` sends signed-out visitors. Create this route. */
var SIGN_IN_PATH = "/login";
/**
* Client-side redirect to the sign-in route (TanStack `<Navigate>` — NOT a full
* `window.location` reload). A hard navigation re-bootstraps the SPA and re-runs
* session loading, which feels like a second "Loading…" on /login.
*
* Guard routes by waiting out `isPending` first (see `use-current-user`), then
* render this.
*/
function RedirectToSignIn({ to = SIGN_IN_PATH }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to });
}
/**
* Minimal signed-in identity chip + sign-out. Restyle freely (see the
* `design-ui` skill). Sign-out is only shown when auth is enabled (the
* disabled-auth dev user has nothing to sign out of) and the session is not
* gate-materialized — behind the gate the next request signs the viewer
* straight back in, so a sign-out control there is a broken loop.
*/
function UserButton() {
	const user = useCurrentUser();
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	const gateSession = (0, import_react.useSyncExternalStore)(subscribeToNothing, hasGateSessionMarker, noGateSessionOnServer);
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "h-8 w-8 rounded-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 place-items-center rounded-full bg-black/10 text-sm font-medium dark:bg-white/20",
				children: label.charAt(0).toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			!gateSession && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: signingOut,
				onClick: () => {
					setSigningOut(true);
					signOut().catch(() => setSigningOut(false));
				},
				className: "cursor-pointer text-sm underline-offset-4 opacity-70 hover:underline disabled:cursor-wait disabled:no-underline",
				children: signingOut ? "Signing out…" : "Sign out"
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		"aria-hidden": "true",
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "6",
				width: "26",
				height: "3.5",
				rx: "1",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "14.25",
				width: "18",
				height: "3.5",
				rx: "1",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "22.5",
				width: "11",
				height: "3.5",
				rx: "1",
				fill: "currentColor"
			})
		]
	});
}
function isActive(pathname, to) {
	return pathname === to || pathname.startsWith(`${to}/`);
}
function SiteFrame({ children }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const router = useRouter();
	const [open, setOpen] = (0, import_react.useState)(false);
	function goBack() {
		if (typeof window !== "undefined" && window.history.length > 1) {
			router.history.back();
			return;
		}
		router.navigate({ to: pathname.startsWith("/tools/") ? "/tools" : "/" });
	}
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = previous;
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-2",
							children: [pathname !== "/" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: goBack,
								className: "grid size-11 shrink-0 place-items-center rounded-sm border border-line bg-surface text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Back"
								})]
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "flex min-w-0 items-center gap-2 font-display text-lg text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-8 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: site.name
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 lg:flex",
							"aria-label": "Primary",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								"aria-current": isActive(pathname, item.to) ? "page" : void 0,
								className: cn("rounded-sm px-3 py-2 text-sm font-semibold", isActive(pathname, item.to) ? "bg-surface text-ink" : "text-muted hover:text-ink"),
								children: item.label
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "grid size-11 place-items-center rounded-sm border border-line bg-surface lg:hidden",
							"aria-expanded": open,
							"aria-controls": "mobile-nav",
							onClick: () => setOpen((value) => !value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: open ? "Close menu" : "Open menu"
							}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" })]
						})
					]
				})
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute inset-0 bg-ink/40",
					"aria-label": "Close menu",
					onClick: () => setOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					id: "mobile-nav",
					className: "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-line bg-paper shadow-xl",
					"aria-label": "Mobile",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-16 items-center justify-between border-b border-line px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg",
								children: site.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "grid size-11 place-items-center rounded-sm border border-line bg-surface",
								onClick: () => setOpen(false),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Close menu"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex-1 overflow-y-auto px-3 py-3",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								"aria-current": isActive(pathname, item.to) ? "page" : void 0,
								className: cn("flex h-12 items-center rounded-sm px-2 text-base font-semibold", isActive(pathname, item.to) ? "bg-surface text-ink" : "text-ink"),
								children: item.label
							}) }, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-line px-5 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
						})
					]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 md:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xl",
										children: site.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-sm text-sm text-muted",
										children: site.positioning
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "font-semibold underline decoration-line underline-offset-4",
											href: `mailto:${site.email}`,
											children: site.email
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-mono text-xs text-muted",
										children: site.domain
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "Pages"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2 text-sm",
								children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: "text-muted hover:text-ink",
									children: item.label
								}) }, item.to))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "More"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2 text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/admin",
									className: "text-muted hover:text-ink",
									children: "Submission inbox"
								}) })
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mx-auto flex w-full max-w-6xl flex-wrap gap-x-4 gap-y-2 px-5 pb-4 text-sm",
						"aria-label": "Legal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "font-semibold text-muted hover:text-ink",
								children: "Terms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "font-semibold text-muted hover:text-ink",
								children: "Privacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cookies",
								className: "font-semibold text-muted hover:text-ink",
								children: "Cookies"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/community-standards",
								className: "font-semibold text-muted hover:text-ink",
								children: "Community Standards"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/copyright",
								className: "font-semibold text-muted hover:text-ink",
								children: "Copyright"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/legal-safety",
								className: "font-semibold text-muted hover:text-ink",
								children: "Legal & Safety"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								search: { topic: "" },
								className: "font-semibold text-muted hover:text-ink",
								children: "Contact"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto w-full max-w-6xl px-5 pb-2 text-xs text-muted",
						children: [
							legal.company,
							" · Company registration ",
							legal.registration,
							" · ",
							legal.country
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto w-full max-w-6xl px-5 pb-8 text-xs text-muted",
						children: "Information on this site is for general use at your own discretion. Automation Flow Lab is not liable for any loss, cost, or decision made from it. Check the original source before you buy or rely on a figure."
					})
				]
			})
		]
	});
}
function PageIntro({ eyebrow, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto w-full max-w-6xl px-5 pb-10 pt-12 md:pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-display text-4xl text-ink md:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: lede
			})
		]
	});
}
var styles_default = "/assets/styles-DdaPdv_G.css";
var APP_NAME = "Automation Flow Lab";
var Route$27 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Automation Flow Lab builds practical webapps, AI-powered workflows, and connected business systems, then supports them after launch."
			},
			{
				name: "theme-color",
				content: "#c4004f"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Source+Sans+3:ital,wght@0,400;0,600;1,400&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootComponent,
	notFoundComponent: NotFound
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-6xl px-5 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-primary",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: "That page is not here"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: "The address does not match a page on this site."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-6 inline-flex h-11 items-center font-semibold text-primary",
				children: "Back to the homepage"
			})
		]
	});
}
var $$splitComponentImporter$22 = () => import("./routes-Bm3B3Rep.mjs");
var Route$26 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Automation Flow Lab — Business tools that do the repetitive work" }, {
		name: "description",
		content: site.supporting
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./about-BO5-s1a-.mjs");
var Route$25 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About — Automation Flow Lab" }, {
		name: "description",
		content: "Automation Flow Lab builds and supports practical webapps, workflows, and connected business systems."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./admin-B4Sze1C6.mjs");
var Route$24 = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Submission inbox — Automation Flow Lab" }, {
		name: "description",
		content: "Private inbox for Automation Flow Lab form submissions."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./community-standards-D1adaF25.mjs");
var Route$23 = createFileRoute("/community-standards")({
	head: () => ({ meta: [{ title: "Community Standards — Automation Flow Lab" }, {
		name: "description",
		content: communityPage.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./contact-BzCma1Z8.mjs");
var Route$22 = createFileRoute("/contact")({
	validateSearch: (search) => ({ topic: typeof search.topic === "string" ? search.topic.slice(0, 160) : "" }),
	head: () => ({ meta: [{ title: "Contact — Automation Flow Lab" }, {
		name: "description",
		content: `Contact ${site.name} at ${site.email}. Support, service enquiries, privacy, copyright and security.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./cookies-6KLoa8Ax.mjs");
var Route$21 = createFileRoute("/cookies")({
	head: () => ({ meta: [{ title: "Cookie Policy — Automation Flow Lab" }, {
		name: "description",
		content: cookiePage.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./copyright-D4pazIMh.mjs");
var Route$20 = createFileRoute("/copyright")({
	head: () => ({ meta: [{ title: "Copyright Policy — Automation Flow Lab" }, {
		name: "description",
		content: copyrightPage.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./custom-builds-CUBJ7gtZ.mjs");
var Route$19 = createFileRoute("/custom-builds")({
	head: () => ({ meta: [{ title: "Custom Builds — Automation Flow Lab" }, {
		name: "description",
		content: "Discovery, scoping, build, handover, and optional support for a custom business tool. Budget is optional on the enquiry."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./legal-BOiZBJxB.mjs");
var Route$18 = createFileRoute("/legal")({
	head: () => ({ meta: [{ title: "Legal and Policies — Automation Flow Lab" }, {
		name: "description",
		content: "Terms, privacy, cookies, community standards, copyright and legal information for AutomationFlowLab professional services and self-service tools."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./legal-safety-B3eVU9Fv.mjs");
var Route$17 = createFileRoute("/legal-safety")({
	head: () => ({ meta: [{ title: "Legal and Safety — Automation Flow Lab" }, {
		name: "description",
		content: safetyPage.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./login-CeA2yPJv.mjs");
var Route$16 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Staff sign-in — Automation Flow Lab" }, {
		name: "description",
		content: "Sign in to the Automation Flow Lab submission inbox. This is not a client portal."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./pricing-CuYurklR.mjs");
var Route$15 = createFileRoute("/pricing")({
	head: () => ({ meta: [{ title: "Pricing — Automation Flow Lab" }, {
		name: "description",
		content: "Starting prices in South African rand for Excel, analytics, automation, Zoho, SharePoint, custom webapps, and monthly support. The final fee is confirmed in writing."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./privacy-BvZEIQSo.mjs");
var Route$14 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy Policy — Automation Flow Lab" }, {
		name: "description",
		content: privacyPage.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./services-Z26i9ooz.mjs");
var Route$13 = createFileRoute("/services")({
	head: () => ({ meta: [{ title: "Services — Automation Flow Lab" }, {
		name: "description",
		content: "AI and workflow automation, custom webapps, Excel repair, website analytics, Zoho configuration, and SharePoint design."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./support-plans-BiK5v-4M.mjs");
var planIds = ["care", "operations"];
var Route$12 = createFileRoute("/support-plans")({
	validateSearch: (search) => ({ plan: planIds.includes(search.plan) ? search.plan : "" }),
	head: () => ({ meta: [{ title: "Support Plans — Automation Flow Lab" }, {
		name: "description",
		content: "Care and Operations are the support plans. Starting prices are on the Pricing page. Hours, exclusions, and the final fee are confirmed in writing."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./terms-BOre67Wj.mjs");
var Route$11 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms of Service — Automation Flow Lab" }, {
		name: "description",
		content: termsPage.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var RANK = {
	CRITICAL: 0,
	"NEEDS WORK": 1,
	WORKING: 2
};
function textOf(html) {
	return html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}
function has(html, pattern) {
	return pattern.test(html);
}
function scanSite(html, business, secure = true) {
	const text = textOf(html);
	const lower = `${text} ${html}`.toLowerCase();
	const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim() ?? "";
	const description = html.match(/name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1]?.trim() ?? html.match(/content=["']([^"']*)["'][^>]*name=["']description["']/i)?.[1]?.trim() ?? "";
	const h1s = [...html.matchAll(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi)];
	const words = text.split(/\s+/).filter(Boolean);
	const images = [...html.matchAll(/<img\b[^>]*>/gi)];
	const missingAlt = images.filter((tag) => !/\balt=["'][^"']+["']/i.test(tag[0])).length;
	const viewport = has(html, /name=["']viewport["']/i);
	const form = has(html, /<form\b/i);
	const contactPath = has(lower, /mailto:|tel:|contact|book|enquir|quote|get in touch|call us|whatsapp/);
	const privacy = has(lower, /privacy/);
	const about = has(lower, /\babout\b/);
	const terms = has(lower, /terms/);
	const genericTitle = /^(home|welcome|untitled|index)(\s|$)/i.test(title) || title.length < 8;
	const businessWords = business.toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length > 3);
	const offerMentionsBusiness = businessWords.length === 0 || businessWords.some((word) => lower.includes(word));
	const thin = words.length < 120;
	const placeholder = has(lower, /lorem ipsum|coming soon|under construction|your text here/);
	const findings = [
		contactPath && (form || has(lower, /mailto:|tel:/)) ? {
			status: "WORKING",
			area: "Conversion Journey",
			summary: "Visitors have a visible way to make contact from this page.",
			meaning: "A clear path from interest to enquiry is already in place on the page we read."
		} : contactPath ? {
			status: "NEEDS WORK",
			area: "Conversion Journey",
			summary: "A contact cue is present, but the step from interest to enquiry is not obvious.",
			meaning: "Visitors who are ready may leave if the next step is easy to miss."
		} : {
			status: "CRITICAL",
			area: "Conversion Journey",
			summary: "Visitors may not have a clear path from interest to enquiry.",
			meaning: "Traffic can fail to become a lead when the page does not ask for the next step."
		},
		privacy && (about || terms) && !placeholder ? {
			status: "WORKING",
			area: "Content Trust",
			summary: "The page shows ordinary trust markers a visitor can check.",
			meaning: "Visible identity and policy links reduce hesitation before an enquiry."
		} : placeholder || thin ? {
			status: "CRITICAL",
			area: "Content Trust",
			summary: "Thin or placeholder content may cause visitors to hesitate before contacting the business.",
			meaning: "Even good traffic can fail to convert when visitors do not trust what they are reading."
		} : {
			status: "NEEDS WORK",
			area: "Content Trust",
			summary: "Trust markers such as an about page or a privacy notice are not obvious on this page.",
			meaning: "Visitors may pause if they cannot tell who is behind the site."
		},
		h1s.length === 1 && title && !genericTitle && offerMentionsBusiness && !thin ? {
			status: "WORKING",
			area: "Offer Clarity",
			summary: "Visitors can see what this page is offering.",
			meaning: "Clear positioning reduces confusion and helps visitors move toward enquiry."
		} : !title || genericTitle || h1s.length === 0 || thin ? {
			status: "CRITICAL",
			area: "Offer Clarity",
			summary: "A first-time visitor may not quickly see what the business provides.",
			meaning: "Unclear positioning loses people before they reach a price or an enquiry."
		} : {
			status: "NEEDS WORK",
			area: "Offer Clarity",
			summary: "The offer is present, but it is not as clear as it could be for a first-time visitor.",
			meaning: "Visitors may understand the name of the business without understanding the service."
		},
		description && h1s.length === 1 && title ? {
			status: "WORKING",
			area: "SEO Structure",
			summary: "The page has a title, a description, and a single main heading.",
			meaning: "Search engines have a basic structure to read on this page."
		} : !description && h1s.length !== 1 ? {
			status: "CRITICAL",
			area: "SEO Structure",
			summary: "Important services are not clearly structured for search on this page.",
			meaning: "Search engines may struggle to tell which page should be shown for valuable searches."
		} : {
			status: "NEEDS WORK",
			area: "SEO Structure",
			summary: "The page structure is incomplete for search.",
			meaning: "Search engines may not clearly understand the most important service on this page."
		},
		secure && viewport && missingAlt < Math.max(3, images.length / 2) ? {
			status: "WORKING",
			area: "Technical Quality",
			summary: "The page we read is served securely and has a basic mobile viewport.",
			meaning: "Basic technical quality is not the first thing blocking a visit."
		} : !secure ? {
			status: "CRITICAL",
			area: "Technical Quality",
			summary: "The page did not present as a secure address.",
			meaning: "Visitors and search engines may treat an insecure page as a reason not to continue."
		} : {
			status: "NEEDS WORK",
			area: "Technical Quality",
			summary: "Technical issues on this page may be affecting usability or search visibility.",
			meaning: "A page that is hard to use on a phone, or thin on basic signals, can lose both visits and enquiries."
		}
	];
	findings.sort((a, b) => RANK[a.status] - RANK[b.status]);
	const top = findings.slice(0, 5);
	return {
		overall: top.some((item) => item.status === "CRITICAL") ? "CRITICAL" : top.some((item) => item.status === "NEEDS WORK") ? "NEEDS WORK" : "WORKING",
		findings: top
	};
}
var MAX_BYTES = 12e5;
function blockedHost(hostname) {
	const host = hostname.toLowerCase().replace(/\.$/, "");
	if (host === "localhost" || host.endsWith(".local") || host.endsWith(".internal") || host === "0.0.0.0") return true;
	if (host === "metadata.google.internal" || host === "169.254.169.254") return true;
	const ipv4 = host.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
	if (!ipv4) return false;
	const [a, b] = [Number(ipv4[1]), Number(ipv4[2])];
	if (a === 10 || a === 127 || a === 0) return true;
	if (a === 169 && b === 254) return true;
	if (a === 172 && b >= 16 && b <= 31) return true;
	if (a === 192 && b === 168) return true;
	return false;
}
var Route$10 = createFileRoute("/api/growth-check")({ server: { handlers: { POST: async ({ request }) => {
	let body;
	try {
		body = await request.json();
	} catch {
		return Response.json({ error: "Send a website address." }, { status: 400 });
	}
	let current;
	try {
		const raw = (body.url ?? "").trim();
		current = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
	} catch {
		return Response.json({ error: "That is not a usable website address." }, { status: 400 });
	}
	if (current.protocol !== "http:" && current.protocol !== "https:") return Response.json({ error: "Only a public website can be checked." }, { status: 400 });
	try {
		let res = null;
		for (let hop = 0; hop < 4; hop += 1) {
			if (blockedHost(current.hostname)) return Response.json({ error: "That address is not a public website." }, { status: 400 });
			res = await fetch(current, {
				redirect: "manual",
				headers: {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
					accept: "text/html,application/xhtml+xml",
					"accept-language": "en-US,en;q=0.9"
				},
				signal: AbortSignal.timeout(8e3)
			});
			if (res.status >= 300 && res.status < 400) {
				const next = res.headers.get("location");
				if (!next) break;
				current = new URL(next, current);
				continue;
			}
			break;
		}
		if (!res || !res.ok) {
			if (res?.status === 403 || res?.status === 503) return Response.json({
				finalUrl: current.toString(),
				overall: "NEEDS WORK",
				findings: [{
					status: "NEEDS WORK",
					area: "Technical Quality",
					summary: "This check could not read the website.",
					meaning: "A visitor may still see the site. A paid audit looks at the site directly."
				}]
			});
			return Response.json({ error: `The site returned ${res?.status ?? "no response"}.` }, { status: 422 });
		}
		const reader = res.body?.getReader();
		const chunks = [];
		let size = 0;
		if (reader) {
			while (size < MAX_BYTES) {
				const step = await reader.read();
				if (step.done) break;
				size += step.value.byteLength;
				chunks.push(step.value);
			}
			await reader.cancel();
		}
		const result = scanSite(new TextDecoder().decode(chunks.reduce((acc, part) => {
			const next = new Uint8Array(acc.length + part.length);
			next.set(acc);
			next.set(part, acc.length);
			return next;
		}, /* @__PURE__ */ new Uint8Array())), (body.business ?? "").slice(0, 160), current.protocol === "https:");
		return Response.json({
			finalUrl: current.toString(),
			...result
		});
	} catch {
		return Response.json({ error: "The website could not be reached." }, { status: 422 });
	}
} } } });
var SOURCE = "https://www.microsoft.com/en-us/licensing/news/2026-m365-packaging-pricing-updates";
var regions = [{
	id: "with-teams",
	label: "Most countries, suites with Teams",
	detail: "The public commercial list Microsoft publishes in US dollars for suites that include Teams."
}, {
	id: "no-teams",
	label: "EEA and Switzerland, suites without Teams",
	detail: "The public list for suites sold without Teams. Teams is a separate licence there."
}];
var COVERS = {
	"Microsoft 365 Business Basic": {
		covers: ["email", "teams"],
		seatCap: 300,
		note: "Web and mobile apps, mailbox, and Teams. No desktop Office apps.",
		features: [
			"Word, Excel, PowerPoint on the web and mobile only",
			"Exchange Online mailbox",
			"Teams, SharePoint, OneDrive (1 TB)",
			"Forms, Viva Engage",
			"No desktop Office apps",
			"No Intune device management",
			"No Defender for Business / Azure Information Protection",
			"Maximum 300 users"
		]
	},
	"Microsoft 365 Business Standard": {
		covers: [
			"email",
			"desktop",
			"teams"
		],
		seatCap: 300,
		note: "Desktop apps, mailbox, and Teams. Not the advanced security stack.",
		features: [
			"Desktop Word, Excel, PowerPoint, Outlook on up to 5 PCs or Macs",
			"Exchange Online mailbox",
			"Teams, SharePoint, OneDrive (1 TB)",
			"Forms, Viva Engage, Bookings",
			"No Intune device management",
			"No Defender for Business / Azure Information Protection",
			"Maximum 300 users"
		]
	},
	"Microsoft 365 Business Premium": {
		covers: [
			"email",
			"desktop",
			"teams",
			"security",
			"devices"
		],
		seatCap: 300,
		note: "Standard, plus device management and the business security stack.",
		features: [
			"Everything in Business Standard",
			"Intune device management",
			"Defender for Business and Defender for Office 365 Plan 1",
			"Azure Information Protection and data loss prevention",
			"Conditional access",
			"Maximum 300 users"
		]
	},
	"Microsoft 365 Business Basic (no Teams)": {
		covers: ["email"],
		seatCap: 300,
		note: "Mailbox and web apps. Teams is not in this suite.",
		features: [
			"Word, Excel, PowerPoint on the web and mobile only",
			"Exchange Online mailbox",
			"SharePoint, OneDrive (1 TB)",
			"Teams is not included",
			"Maximum 300 users"
		]
	},
	"Microsoft 365 Business Standard (no Teams)": {
		covers: ["email", "desktop"],
		seatCap: 300,
		note: "Desktop apps and mailbox. Teams is not in this suite.",
		features: [
			"Desktop Office apps",
			"Exchange Online mailbox",
			"SharePoint, OneDrive (1 TB)",
			"Teams is not included",
			"Maximum 300 users"
		]
	},
	"Microsoft 365 Business Premium (no Teams)": {
		covers: [
			"email",
			"desktop",
			"security",
			"devices"
		],
		seatCap: 300,
		note: "Desktop apps, security, and device management. Teams is not in this suite.",
		features: [
			"Desktop Office apps",
			"Intune, Defender for Business, information protection",
			"Teams is not included",
			"Maximum 300 users"
		]
	},
	"Office 365 E1": {
		covers: ["email", "teams"],
		seatCap: null,
		note: "Web apps, mailbox, and Teams. No desktop apps and no device management.",
		features: [
			"Office on the web only — no desktop Office apps",
			"Exchange Online Plan 1 mailbox",
			"Teams, SharePoint Plan 1, OneDrive",
			"Viva Engage, Forms",
			"No Intune, no Windows Enterprise, no Power BI",
			"Enterprise suite: aimed at more than 300 users"
		]
	},
	"Office 365 E3": {
		covers: [
			"email",
			"desktop",
			"teams"
		],
		seatCap: null,
		note: "Desktop apps, mailbox, and Teams. Not Microsoft 365 device security.",
		features: [
			"Desktop Office apps",
			"Exchange Online Plan 2 (100 GB mailbox)",
			"Teams, SharePoint Plan 2, OneDrive",
			"eDiscovery and compliance basics in Office 365",
			"No Intune, no Windows Enterprise, no Defender for Endpoint",
			"Enterprise suite: aimed at more than 300 users"
		]
	},
	"Office 365 E5": {
		covers: [
			"email",
			"desktop",
			"teams",
			"security"
		],
		seatCap: null,
		note: "E3 plus the advanced Office 365 security and compliance stack.",
		features: [
			"Everything in Office 365 E3",
			"Defender for Office 365 Plan 2",
			"Advanced compliance, eDiscovery Premium, Audit Premium",
			"Power BI Pro",
			"Phone System and Audio Conferencing",
			"No Intune and no Windows Enterprise",
			"Enterprise suite: aimed at more than 300 users"
		]
	},
	"Microsoft 365 E3": {
		covers: [
			"email",
			"desktop",
			"teams",
			"devices"
		],
		seatCap: null,
		note: "Desktop apps, mailbox, Teams, and device management.",
		features: [
			"Office 365 E3 services plus desktop apps",
			"Windows Enterprise",
			"Intune device management and Entra ID P1",
			"Information protection",
			"No Power BI Pro, no Phone System, no Defender for Endpoint P2",
			"Enterprise suite: aimed at more than 300 users"
		]
	},
	"Microsoft 365 E5": {
		covers: [
			"email",
			"desktop",
			"teams",
			"security",
			"devices"
		],
		seatCap: null,
		note: "E3 plus the advanced security and compliance stack.",
		features: [
			"Everything in Microsoft 365 E3",
			"Defender for Endpoint, Identity, Office, and Cloud Apps",
			"Entra ID P2, advanced compliance",
			"Power BI Pro",
			"Phone System and Audio Conferencing",
			"Enterprise suite: aimed at more than 300 users"
		]
	},
	"Microsoft 365 F1": {
		covers: ["teams"],
		seatCap: null,
		note: "A frontline suite. It is not a full desktop Office licence.",
		features: [
			"Teams and Office on the web",
			"No Exchange mailbox on F1",
			"Small OneDrive allocation",
			"No desktop Office apps",
			"Built for frontline workers, not office staff"
		]
	},
	"Microsoft 365 F3": {
		covers: ["email", "teams"],
		seatCap: null,
		note: "A frontline suite with a mailbox and Teams. Desktop apps are limited.",
		features: [
			"Kiosk Exchange mailbox (2 GB)",
			"Teams, SharePoint, Office on the web",
			"Intune P1 in the published F3 stack",
			"No full desktop Office apps",
			"Built for frontline workers"
		]
	}
};
var GROUP_OF = {
	"Microsoft 365 Business Basic": "Business",
	"Microsoft 365 Business Standard": "Business",
	"Microsoft 365 Business Premium": "Business",
	"Microsoft 365 Business Basic (no Teams)": "Business",
	"Microsoft 365 Business Standard (no Teams)": "Business",
	"Microsoft 365 Business Premium (no Teams)": "Business",
	"Office 365 E1": "Enterprise",
	"Office 365 E3": "Enterprise",
	"Office 365 E5": "Enterprise",
	"Microsoft 365 E3": "Enterprise",
	"Microsoft 365 E5": "Enterprise",
	"Microsoft 365 F1": "Frontline",
	"Microsoft 365 F3": "Frontline"
};
function rowsIn(chunk) {
	const products = [];
	for (const tr of chunk.match(/<tr[\s\S]*?<\/tr>/g) ?? []) {
		const text = tr.replace(/<[^>]+>/g, " ").replace(/\u200b/g, "").replace(/\s+/g, " ").trim();
		const prices = [...text.matchAll(/\$(\d+\.\d{2})/g)].map((m) => Number(m[1]));
		if (!prices.length) continue;
		const name = text.replace(/\d+%/g, "").replace(/--/g, "").replace(/\$\d+\.\d{2}/g, "").replace(/\s+/g, " ").trim();
		const known = COVERS[name];
		if (!known) continue;
		products.push({
			id: name,
			name,
			price: prices[prices.length - 1],
			group: GROUP_OF[name],
			unit: "user-month",
			unitLabel: "per user / month",
			seatMin: GROUP_OF[name] === "Enterprise" ? 301 : null,
			...known
		});
	}
	return products;
}
function section(html, heading, marker) {
	const at = html.indexOf(heading);
	if (at < 0) return "";
	const block = html.slice(at, at + 16e3);
	const start = block.indexOf(marker);
	if (start < 0) return "";
	const rest = block.slice(start + marker.length);
	const end = rest.search(/Suites without Teams|Standalone Components|Frontline suites|Business suites|Enterprise suites/);
	return rest.slice(0, end > 0 ? end : 5e3);
}
function parseCatalog(html, region) {
	const marker = region === "with-teams" ? "Suites with Teams" : "Suites without Teams";
	const chunks = region === "with-teams" ? [
		section(html, "Enterprise suites", marker),
		section(html, "Business suites", marker),
		section(html, "Frontline suites", marker)
	] : [section(html, "Business suites", marker)];
	const products = [];
	for (const chunk of chunks) for (const product of rowsIn(chunk)) if (!products.some((item) => item.id === product.id)) products.push(product);
	return products;
}
var needLabels = {
	email: "Mailbox and web apps",
	desktop: "Desktop Word, Excel, and PowerPoint",
	teams: "Teams included in the suite",
	security: "Advanced security",
	devices: "Device management",
	server: "A Windows Server or SQL Server licence"
};
function parseServerLicences(windowsHtml, sqlHtml) {
	const found = [];
	const windows = windowsHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
	const sql = sqlHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
	const standard = windows.match(/Windows Server 2025 Standard edition Suggested MSRP:\s*\$([0-9,]+)/);
	const datacenter = windows.match(/Windows Server 2025 Datacenter edition Suggested MSRP:\s*\$([0-9,]+)/);
	const sqlEnterprise = sql.match(/Enterprise\s*\$([0-9,]+)/);
	const sqlStandard = sql.match(/Standard - server\s*\$([0-9,]+)/);
	const add = (name, raw, note) => {
		if (!raw) return;
		found.push({
			id: name,
			name,
			price: Number(raw.replace(/,/g, "")),
			group: "Server",
			unit: "pack",
			unitLabel: "published pack or server price",
			covers: ["server"],
			seatMin: null,
			seatCap: null,
			note,
			features: [
				"Published suggested retail or pack price from Microsoft’s server pages",
				"Core-based or server licence, not a Microsoft 365 user suite",
				"Windows Server still needs CALs"
			]
		});
	};
	add("Windows Server 2025 Standard", standard?.[1], "Suggested retail price published for Windows Server 2025 Standard. Core-based, and it still needs Windows Server CALs.");
	add("Windows Server 2025 Datacenter", datacenter?.[1], "Suggested retail price published for Windows Server 2025 Datacenter. Core-based, and it still needs Windows Server CALs.");
	add("SQL Server Enterprise, 2-core pack", sqlEnterprise?.[1], "Published 2-core pack price for SQL Server Enterprise.");
	add("SQL Server Standard, server", sqlStandard?.[1], "Published server licence price for SQL Server Standard.");
	return found;
}
function compare(input) {
	const pair = [input.leftId, input.rightId].map((id) => input.products.find((p) => p.id === id)).filter(Boolean);
	const seats = Math.max(1, Math.round(input.seats));
	const rows = pair.map((p) => {
		const covered = p.covers.map((need) => needLabels[need]);
		const missing = input.needs.filter((need) => !p.covers.includes(need)).map((need) => needLabels[need]);
		const monthly = p.price;
		const total = Math.round(monthly * seats * 100) / 100;
		const overBudget = p.unit === "user-month" && input.budget != null && monthly > input.budget;
		const underMin = p.seatMin != null && seats < p.seatMin;
		const overCap = p.seatCap != null && seats > p.seatCap;
		const seatRule = underMin ? `Enterprise suites are for organisations past the Business limit of 300 users. ${seats} is below that.` : overCap ? `This suite stops at ${p.seatCap} users. ${seats} is over that.` : p.group === "Enterprise" ? "Quantity is above 300, which is the range these enterprise suites are for." : p.seatCap ? `Published for 1–${p.seatCap} users.` : p.group === "Server" ? "Sold as a pack or server licence, not per user." : "No 300-user business cap on this suite.";
		return {
			id: p.id,
			name: p.name,
			group: p.group,
			note: p.note,
			features: p.features,
			covers: covered,
			monthly,
			total,
			unit: p.unit,
			unitLabel: p.unitLabel,
			overBudget,
			underMin,
			overCap,
			seatRule,
			missing
		};
	});
	const scored = rows.map((row) => {
		let score = 0;
		if (!row.missing.length) score += 50;
		score -= row.missing.length * 15;
		if (row.overBudget) score -= 20;
		if (row.underMin) score -= 30;
		if (row.overCap) score -= 40;
		score -= row.monthly;
		return {
			...row,
			score
		};
	});
	scored.sort((a, b) => b.score - a.score);
	const best = scored[0];
	const other = scored[1];
	const reasons = [best.note];
	if (best.missing.length) reasons.push(`It still does not cover: ${best.missing.join(", ")}.`);
	else if (input.needs.length) reasons.push("It covers every need you ticked.");
	if (best.overBudget) reasons.push(`It is above the ${input.budget} per user budget you entered.`);
	if (best.overCap) reasons.push(best.seatRule);
	if (best.underMin) reasons.push(best.seatRule);
	if (other) {
		const gap = Math.round((other.monthly - best.monthly) * 100) / 100;
		if (gap > 0) reasons.push(`${other.name} costs ${gap} more per user and ${other.missing.length ? "still misses " + other.missing.join(", ") : "does not buy a need you ticked"}.`);
		if (gap < 0) reasons.push(`${other.name} is cheaper, but it misses ${other.missing.join(", ") || "the fit on seats or budget"}.`);
		if (gap === 0) reasons.push(`${other.name} is the same published price, with a weaker fit for what you ticked.`);
	}
	const mixed = pair.length === 2 && pair[0].unit !== pair[1].unit;
	return {
		winnerId: best.id,
		headline: mixed ? `${best.name} fits more of what you ticked. These are not both a per-user monthly price.` : `${best.name} is the better fit of the two.`,
		reasons,
		rows: rows.map(({ id, group, note, features, covers, monthly, total, unit, unitLabel, overBudget, underMin, overCap, seatRule, missing }) => ({
			id,
			group,
			note,
			features,
			covers,
			monthly,
			total,
			unit,
			unitLabel,
			overBudget,
			underMin,
			overCap,
			seatRule,
			missing
		}))
	};
}
var cache = null;
var WINDOWS = "https://www.microsoft.com/en-us/windows-server/pricing";
var SQL = "https://www.microsoft.com/en-us/sql-server/sql-server-2022-pricing";
var FX = "https://api.frankfurter.app/latest?from=USD&to=ZAR,GBP,EUR,INR,AUD,CAD";
async function page(url) {
	const res = await fetch(url, {
		headers: {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
			accept: "text/html"
		},
		signal: AbortSignal.timeout(12e3)
	});
	if (!res.ok) throw new Error(`Microsoft returned ${res.status}`);
	return res.text();
}
var Route$9 = createFileRoute("/api/license-catalog")({ server: { handlers: { GET: async ({ request }) => {
	const region = new URL(request.url).searchParams.get("region") === "no-teams" ? "no-teams" : "with-teams";
	try {
		const html = cache && Date.now() - cache.at < 216e5 ? cache.html : await page(SOURCE);
		cache = {
			at: cache?.at && Date.now() - cache.at < 216e5 ? cache.at : Date.now(),
			html
		};
		const [windows, sql, fxRes] = await Promise.all([
			page(WINDOWS),
			page(SQL),
			fetch(FX, { signal: AbortSignal.timeout(8e3) })
		]);
		const suites = parseCatalog(html, region);
		const servers = region === "with-teams" ? parseServerLicences(windows, sql) : [];
		const products = [...suites, ...servers];
		const fx = fxRes.ok ? await fxRes.json() : {};
		const rates = [
			{
				country: "South Africa",
				currency: "ZAR",
				rate: fx.rates?.ZAR
			},
			{
				country: "United Kingdom",
				currency: "GBP",
				rate: fx.rates?.GBP
			},
			{
				country: "Euro area",
				currency: "EUR",
				rate: fx.rates?.EUR
			},
			{
				country: "India",
				currency: "INR",
				rate: fx.rates?.INR
			},
			{
				country: "Australia",
				currency: "AUD",
				rate: fx.rates?.AUD
			},
			{
				country: "Canada",
				currency: "CAD",
				rate: fx.rates?.CAD
			}
		].filter((row) => typeof row.rate === "number");
		if (!products.length) return Response.json({ error: "The public price page did not include a readable list." }, { status: 422 });
		return Response.json({
			source: SOURCE,
			region,
			currency: "USD",
			billing: "per user / month, annual commitment, published commercial list",
			fetchedAt: (/* @__PURE__ */ new Date()).toISOString(),
			products,
			rates
		});
	} catch {
		return Response.json({ error: "The Microsoft licensing page could not be read just now." }, { status: 422 });
	}
} } } });
var $$splitComponentImporter$6 = () => import("./tools-CKqAvC02.mjs");
var Route$8 = createFileRoute("/tools/")({
	head: () => ({ meta: [{ title: "Tools — Automation Flow Lab" }, {
		name: "description",
		content: "IT tools you can try in the browser. Certflow is the live product. The others are demos: your inputs stay in this browser and are not written to your live systems."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("../_slug-Brc7ti6o.mjs");
var Route$7 = createFileRoute("/tools/$slug")({
	loader: ({ params }) => {
		const tool = getTool(params.slug);
		if (!tool) throw notFound();
		return { tool };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.tool.name} — Automation Flow Lab` : "Tool — Automation Flow Lab" }, {
		name: "description",
		content: loaderData?.tool.summary ?? "A tool from Automation Flow Lab."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var Route$6 = createFileRoute("/tools/cert-batch")({ beforeLoad: () => {
	throw redirect({ to: "/tools/certflow" });
} });
var $$splitComponentImporter$4 = () => import("./certflow-D-9hzMmG.mjs");
var Route$5 = createFileRoute("/tools/certflow")({
	head: () => ({ meta: [{ title: "Certflow — Automation Flow Lab" }, {
		name: "description",
		content: "Upload a learner list, preview the certificate, and run the batch. One PDF per person."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./growth-check-D9UHEZAf.mjs");
var Route$4 = createFileRoute("/tools/growth-check")({
	head: () => ({ meta: [{ title: "Website Growth Check — Automation Flow Lab" }, {
		name: "description",
		content: "Website Growth Check. Website check, then a paid audit, then fix, grow, and monitor."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./license-compare-lGm7KlzZ.mjs");
var Route$3 = createFileRoute("/tools/license-compare")({
	head: () => ({ meta: [{ title: "Microsoft licence comparison — Automation Flow Lab" }, {
		name: "description",
		content: "Compare two Microsoft 365 suites using the public commercial price list."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./zoho-fit-DlG_Ebo3.mjs");
var Route$2 = createFileRoute("/tools/zoho-fit")({
	head: () => ({ meta: [{ title: "Zoho setup check — Automation Flow Lab" }, {
		name: "description",
		content: "Tick what you need. See which Zoho apps to get, which to keep, and which extras waste time."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var Route$1 = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: ({ request }) => auth.handler(request),
	POST: ({ request }) => auth.handler(request)
} } });
var field = "mt-1 w-full rounded-sm border border-line bg-surface px-3 py-2 text-sm text-ink";
var btn = "inline-flex h-11 items-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-fg";
var ghost = "inline-flex h-11 items-center rounded-sm border border-line bg-surface px-4 text-sm font-semibold text-ink";
function DemoNote({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 max-w-2xl text-sm text-muted",
		children
	});
}
function Panel({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl border border-line bg-surface p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children
		})]
	});
}
var sampleFlows = [
	{
		name: "Nightly Zoho contact update",
		link: "https://flow.example/zoho/nightly-contacts",
		raw: "401 Unauthorized. The OAuth token has expired.",
		means: "The flow is signed out of Zoho. Every step after the sign-in was refused.",
		why: "Connections expire. A password change or a removed app login does the same thing."
	},
	{
		name: "Row-by-row invoice create",
		link: "https://flow.example/books/invoice-loop",
		raw: "429 Too Many Requests. Retry-After: 120.",
		means: "The flow is fine. Zoho told it to slow down. It sent more calls than that minute allows.",
		why: "A loop that creates one invoice per row, with no pause, hits the limit."
	},
	{
		name: "Form to new CRM lead",
		link: "https://flow.example/crm/form-to-lead",
		raw: "Expression evaluation failed. Property 'Email' doesn't exist on the incoming item.",
		means: "This step asked for an email, and this submission did not have one. The flow cannot invent the field.",
		why: "The form left email optional, or an earlier step renamed the field."
	},
	{
		name: "Update the deal owner",
		link: "https://flow.example/crm/deal-owner",
		raw: "404 Resource not found. Deal id 44102 does not exist.",
		means: "The flow tried to change a deal that is no longer there.",
		why: "The deal was deleted after the flow started and before this step ran."
	},
	{
		name: "Copy the weekly sheet",
		link: "https://flow.example/excel/weekly-copy",
		raw: "The operation timed out after 120 seconds.",
		means: "The other side did not answer in time, so the flow stopped waiting. It did not finish the copy.",
		why: "The file is large, or the service was slow. The flow treats silence as a failure."
	},
	{
		name: "Notify only when status is Won",
		link: "https://flow.example/crm/won-alert",
		raw: "Action skipped. Condition result: false.",
		means: "This is not a crash. The check said no, so the steps under it did not run.",
		why: "The status on the record is not exactly Won. A different spelling, or a blank status, takes the no path every time."
	},
	{
		name: "Create the customer in Books",
		link: "https://flow.example/books/new-customer",
		raw: "409 Conflict. A record with this email already exists.",
		means: "The flow tried to create a customer who is already in Books.",
		why: "The flow always creates. It does not look up the email and update the existing customer."
	}
];
function AutomationWatchDemo() {
	const [open, setOpen] = (0, import_react.useState)(0);
	const flow = sampleFlows[open];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNote, { children: "These are sample flows with sample links. Open one to read the error and why it happened. You cannot add your own link here." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[240px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2",
				children: sampleFlows.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(index),
					className: `w-full rounded-lg border px-3 py-2 text-left text-sm ${index === open ? "border-primary bg-surface font-semibold" : "border-line bg-surface"}`,
					children: item.name
				}) }, item.name))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: flow.name,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Sample link"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 break-all font-mono text-sm",
						children: flow.link
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm font-semibold",
						children: "What the platform said"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-danger",
						children: flow.raw
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm font-semibold",
						children: "What that means"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: flow.means
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm font-semibold",
						children: "Why it happens"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: flow.why
					})
				]
			})]
		})]
	});
}
function ExcelHealthDemo() {
	const [reports, setReports] = (0, import_react.useState)([]);
	const [fileName, setFileName] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNote, { children: "Upload a workbook. The check runs in this browser. The file is not uploaded to a server." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			title: "Workbook",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "text-sm",
					type: "file",
					accept: ".xlsx,.xls,.csv",
					onChange: async (e) => {
						const file = e.target.files?.[0];
						if (!file) return;
						setFileName(file.name);
						const book = readSync(await file.arrayBuffer(), { type: "array" });
						setReports(book.SheetNames.map((name) => {
							const sheet = book.Sheets[name];
							const ref = sheet["!ref"];
							const range = ref ? utils.decode_range(ref) : null;
							const rows = range ? range.e.r - range.s.r : 0;
							let formulas = 0;
							let external = 0;
							const errors = [];
							for (const key of Object.keys(sheet)) {
								if (key.startsWith("!")) continue;
								const cell = sheet[key];
								if (cell.f) {
									formulas += 1;
									if (/[[\]]/.test(cell.f) || /https?:/i.test(cell.f)) external += 1;
									if (/#REF!|#NAME\?|#VALUE!|#DIV\/0!|#N\/A/.test(String(cell.v ?? ""))) errors.push(`${key} ${cell.v}`);
								}
								if (typeof cell.v === "string" && /#REF!|#NAME\?|#VALUE!|#DIV\/0!/.test(cell.v)) errors.push(`${key} ${cell.v}`);
							}
							return {
								name,
								rows,
								formulas,
								errors: errors.slice(0, 8),
								external
							};
						}));
					}
				}),
				fileName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm font-semibold",
					children: fileName
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: reports.map((sheet) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-line p-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: sheet.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted",
								children: [
									sheet.rows,
									" rows · ",
									sheet.formulas,
									" formulas · ",
									sheet.external,
									" formulas that look external"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: sheet.errors.length ? `Fix first: ${sheet.errors.join("; ")}` : "No obvious error values on this sheet."
							})
						]
					}, sheet.name))
				})
			]
		})]
	});
}
function FormInboxDemo() {
	const [rows, setRows] = (0, import_react.useState)([{
		form: "Contact",
		dest: "info@example.com",
		state: "Unknown"
	}]);
	const [form, setForm] = (0, import_react.useState)("");
	const [dest, setDest] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNote, { children: "Name each form and where it should land. Mark the last check. This does not send a real test message." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			title: "Forms",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-2 sm:grid-cols-3",
				onSubmit: (e) => {
					e.preventDefault();
					if (!form.trim() || !dest.trim()) return;
					setRows((list) => [{
						form: form.trim(),
						dest: dest.trim(),
						state: "Unknown"
					}, ...list]);
					setForm("");
					setDest("");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: form,
						onChange: (e) => setForm(e.target.value),
						placeholder: "Form name",
						"aria-label": "Form name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: dest,
						onChange: (e) => setDest(e.target.value),
						placeholder: "Destination",
						"aria-label": "Destination"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: btn,
						type: "submit",
						children: "Add"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-line",
				children: rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: row.form
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							row.dest,
							" · ",
							row.state
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: ghost,
							onClick: () => setRows((list) => list.map((r, j) => j === i ? {
								...r,
								state: "Received"
							} : r)),
							children: "Received"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: ghost,
							onClick: () => setRows((list) => list.map((r, j) => j === i ? {
								...r,
								state: "Failed"
							} : r)),
							children: "Failed"
						})]
					})]
				}, row.form + i))
			})]
		})]
	});
}
var folders = [
	"Incoming",
	"Current",
	"Filed"
];
function SharePointBuilderDemo() {
	const [files, setFiles] = (0, import_react.useState)([
		{
			id: "quote",
			name: "Quote.pdf",
			client: "North depot",
			folder: "Incoming"
		},
		{
			id: "scope",
			name: "Signed scope.docx",
			client: "North depot",
			folder: "Current"
		},
		{
			id: "old",
			name: "2024 invoice.pdf",
			client: "Harbour clinic",
			folder: "Filed"
		}
	]);
	const [over, setOver] = (0, import_react.useState)(null);
	function move(id, folder) {
		setFiles((list) => list.map((file) => file.id === id ? {
			...file,
			folder
		} : file));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNote, { children: "Drag a file into a column. The status follows the move. This does not create a SharePoint site or upload anything." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 md:grid-cols-3",
			children: folders.map((folder) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: `min-h-48 rounded-xl border bg-surface p-4 ${over === folder ? "border-primary" : "border-line"}`,
				onDragOver: (e) => {
					e.preventDefault();
					setOver(folder);
				},
				onDragLeave: () => setOver((current) => current === folder ? null : current),
				onDrop: (e) => {
					e.preventDefault();
					const id = e.dataTransfer.getData("text/plain");
					if (id) move(id, folder);
					setOver(null);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: folder
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: files.filter((file) => file.folder === folder).map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						draggable: true,
						onDragStart: (e) => e.dataTransfer.setData("text/plain", file.id),
						className: "cursor-grab rounded-lg border border-line bg-paper p-3 text-sm active:cursor-grabbing",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: file.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: file.client
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs font-semibold",
								children: ["Status: ", folder]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-1 block text-xs text-muted",
						children: ["Move", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: field,
							value: file.folder,
							onChange: (e) => move(file.id, e.target.value),
							children: folders.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: option }, option))
						})]
					})] }, file.id))
				})]
			}, folder))
		})]
	});
}
function ChangeRequestDemo() {
	const [items, setItems] = (0, import_react.useState)([{
		title: "Publish the careers page",
		kind: "Publish",
		owner: "Unassigned",
		status: "Waiting",
		reason: ""
	}]);
	const [title, setTitle] = (0, import_react.useState)("");
	const [kind, setKind] = (0, import_react.useState)("Access");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNote, { children: "A queue for access, publish, and system changes. Decisions stay in this browser." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Queue",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-2 sm:grid-cols-3",
					onSubmit: (e) => {
						e.preventDefault();
						if (!title.trim()) return;
						setItems((list) => [{
							title: title.trim(),
							kind,
							owner: "Unassigned",
							status: "Waiting",
							reason: ""
						}, ...list]);
						setTitle("");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: field,
							value: title,
							onChange: (e) => setTitle(e.target.value),
							placeholder: "What needs to change",
							"aria-label": "Request"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: field,
							value: kind,
							onChange: (e) => setKind(e.target.value),
							"aria-label": "Kind",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Access" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Publish" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "System change" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: btn,
							type: "submit",
							children: "Add request"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-4",
					children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-line p-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted",
								children: [
									item.kind,
									" · ",
									item.status,
									" · ",
									item.owner
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex flex-wrap gap-2",
								children: [
									"Yes",
									"No",
									"Send back"
								].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: ghost,
									onClick: () => setItems((list) => list.map((row, j) => j === i ? {
										...row,
										status,
										owner: "You"
									} : row)),
									children: status
								}, status))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: field,
								placeholder: "Short reason",
								value: item.reason,
								onChange: (e) => setItems((list) => list.map((row, j) => j === i ? {
									...row,
									reason: e.target.value
								} : row))
							})
						]
					}, item.title + i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/tools",
					className: "font-semibold text-primary",
					children: "Back to tools"
				})
			})
		]
	});
}
var demos = {
	"automation-watch": AutomationWatchDemo,
	"excel-health-check": ExcelHealthDemo,
	"form-to-inbox-check": FormInboxDemo,
	"sharepoint-library-builder": SharePointBuilderDemo,
	"change-request": ChangeRequestDemo
};
var $$splitComponentImporter = () => import("./play._slug-b30f915m.mjs");
var Route = createFileRoute("/tools/play/$slug")({
	loader: ({ params }) => {
		const tool = getTool(params.slug);
		if (!tool || !(params.slug in demos)) throw notFound();
		return { tool };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.tool.name} demo — Automation Flow Lab` : "Tool demo" }, {
		name: "description",
		content: loaderData?.tool.summary ?? "Try a tool demo."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$26.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$27
});
var AboutRoute = Route$25.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$27
});
var AdminRoute = Route$24.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$27
});
var CommunityStandardsRoute = Route$23.update({
	id: "/community-standards",
	path: "/community-standards",
	getParentRoute: () => Route$27
});
var ContactRoute = Route$22.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$27
});
var CookiesRoute = Route$21.update({
	id: "/cookies",
	path: "/cookies",
	getParentRoute: () => Route$27
});
var CopyrightRoute = Route$20.update({
	id: "/copyright",
	path: "/copyright",
	getParentRoute: () => Route$27
});
var CustomBuildsRoute = Route$19.update({
	id: "/custom-builds",
	path: "/custom-builds",
	getParentRoute: () => Route$27
});
var LegalRoute = Route$18.update({
	id: "/legal",
	path: "/legal",
	getParentRoute: () => Route$27
});
var LegalSafetyRoute = Route$17.update({
	id: "/legal-safety",
	path: "/legal-safety",
	getParentRoute: () => Route$27
});
var LoginRoute = Route$16.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$27
});
var PricingRoute = Route$15.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$27
});
var PrivacyRoute = Route$14.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$27
});
var ServicesRoute = Route$13.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$27
});
var SupportPlansRoute = Route$12.update({
	id: "/support-plans",
	path: "/support-plans",
	getParentRoute: () => Route$27
});
var TermsRoute = Route$11.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$27
});
var ApiGrowthCheckRoute = Route$10.update({
	id: "/api/growth-check",
	path: "/api/growth-check",
	getParentRoute: () => Route$27
});
var ApiLicenseCatalogRoute = Route$9.update({
	id: "/api/license-catalog",
	path: "/api/license-catalog",
	getParentRoute: () => Route$27
});
var ToolsIndexRoute = Route$8.update({
	id: "/tools/",
	path: "/tools/",
	getParentRoute: () => Route$27
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute,
	CommunityStandardsRoute,
	ContactRoute,
	CookiesRoute,
	CopyrightRoute,
	CustomBuildsRoute,
	LegalRoute,
	LegalSafetyRoute,
	LoginRoute,
	PricingRoute,
	PrivacyRoute,
	ServicesRoute,
	SupportPlansRoute,
	TermsRoute,
	ApiGrowthCheckRoute,
	ApiLicenseCatalogRoute,
	ToolsSlugRoute: Route$7.update({
		id: "/tools/$slug",
		path: "/tools/$slug",
		getParentRoute: () => Route$27
	}),
	ToolsCertBatchRoute: Route$6.update({
		id: "/tools/cert-batch",
		path: "/tools/cert-batch",
		getParentRoute: () => Route$27
	}),
	ToolsCertflowRoute: Route$5.update({
		id: "/tools/certflow",
		path: "/tools/certflow",
		getParentRoute: () => Route$27
	}),
	ToolsGrowthCheckRoute: Route$4.update({
		id: "/tools/growth-check",
		path: "/tools/growth-check",
		getParentRoute: () => Route$27
	}),
	ToolsLicenseCompareRoute: Route$3.update({
		id: "/tools/license-compare",
		path: "/tools/license-compare",
		getParentRoute: () => Route$27
	}),
	ToolsZohoFitRoute: Route$2.update({
		id: "/tools/zoho-fit",
		path: "/tools/zoho-fit",
		getParentRoute: () => Route$27
	}),
	ToolsIndexRoute,
	ApiAuthSplatRoute: Route$1.update({
		id: "/api/auth/$",
		path: "/api/auth/$",
		getParentRoute: () => Route$27
	}),
	ToolsPlaySlugRoute: Route.update({
		id: "/tools/play/$slug",
		path: "/tools/play/$slug",
		getParentRoute: () => Route$27
	})
};
var routeTree = Route$27._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { privacySummary as _, compare as a, site as b, Route$12 as c, cn as d, RedirectToSignIn as f, plans as g, planAgreementNote as h, Route$7 as i, Route$22 as l, buildSteps as m, Route as n, needLabels as o, useCurrentUserState as p, demos as r, regions as s, router_exports as t, PageIntro as u, problems as v, tools as x, services as y };
