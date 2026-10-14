import { o as __toESM } from "../_runtime.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { L as string, N as number, P as object, R as union, j as literal } from "../_libs/@better-auth/core+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as signOut, t as authClient } from "./client-CVqXY6bk.mjs";
import { i as hasGateSessionMarker, n as auth } from "./server-CRrus_0k.mjs";
import { a as legal, c as safetyPage, i as copyrightPage, l as termsPage, r as cookiePage, s as privacyPage, t as communityPage } from "./legal-CJMjhEPX.mjs";
import { c as site, n as getTool, o as retiredToolSlugs } from "./site-content-C_h7gjI1.mjs";
import { C as require_jsx_runtime, J as redirect, S as useRouter, Z as notFound, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as Navigate, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert, o as Menu, t as X, u as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CqeGmUdl.js
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
var itemClass = "rounded-sm px-3 py-2 text-sm font-semibold";
function NavLinks({ pathname, stacked = false }) {
	const item = stacked ? "flex h-12 items-center rounded-sm px-2 text-base font-semibold" : itemClass;
	const idle = stacked ? "text-ink" : "text-muted hover:text-ink";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/tools/growth-check",
			"aria-current": isActive(pathname, "/tools/growth-check") ? "page" : void 0,
			className: cn(item, isActive(pathname, "/tools/growth-check") ? "bg-surface text-ink" : idle),
			children: "Website Growth Check"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/audit",
			"aria-current": isActive(pathname, "/audit") ? "page" : void 0,
			className: cn(item, isActive(pathname, "/audit") ? "bg-surface text-ink" : idle),
			children: "Full Audit"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/services",
			"aria-current": pathname === "/services" ? "page" : void 0,
			className: cn(item, pathname === "/services" ? "bg-surface text-ink" : idle),
			children: "Services"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/about",
			"aria-current": isActive(pathname, "/about") ? "page" : void 0,
			className: cn(item, isActive(pathname, "/about") ? "bg-surface text-ink" : idle),
			children: "About"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/contact",
			search: { topic: "" },
			"aria-current": isActive(pathname, "/contact") ? "page" : void 0,
			className: cn(item, isActive(pathname, "/contact") ? "bg-surface text-ink" : idle),
			children: "Contact"
		})
	] });
}
function CheckWebsite({ pathname, block = false }) {
	const className = cn("inline-flex h-12 items-center justify-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-fg", block && "w-full");
	if (pathname === "/") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "#check",
		className,
		children: "Check my website"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/tools/growth-check",
		className,
		children: "Check my website"
	});
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
							className: "hidden items-center gap-1 xl:flex",
							"aria-label": "Primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, { pathname })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center gap-2 xl:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckWebsite, { pathname }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "grid size-11 place-items-center rounded-sm border border-line bg-surface xl:hidden",
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
				className: "fixed inset-0 z-50 xl:hidden",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col overflow-y-auto px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-2 pb-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckWebsite, {
									pathname,
									block: true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, {
								pathname,
								stacked: true
							})]
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
						className: "mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl",
									children: site.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-sm text-sm text-muted",
									children: site.supporting
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
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "Automation Flow Lab"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-3 space-y-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/tools/growth-check",
										className: "text-muted hover:text-ink",
										children: "Website Growth Check"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/audit",
										className: "text-muted hover:text-ink",
										children: "Full Website Audit"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services",
										className: "text-muted hover:text-ink",
										children: "Services"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										className: "text-muted hover:text-ink",
										children: "About"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										search: { topic: "" },
										className: "text-muted hover:text-ink",
										children: "Contact"
									}) })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "Resources"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-3 space-y-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/tools",
									className: "text-muted hover:text-ink",
									children: "Tools"
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "text-muted hover:text-ink",
									children: "Pricing"
								}) })]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mx-auto flex w-full max-w-6xl flex-wrap gap-x-4 gap-y-2 px-5 pb-4 text-sm",
						"aria-label": "Legal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "font-semibold text-muted hover:text-ink",
								children: "Privacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "font-semibold text-muted hover:text-ink",
								children: "Terms"
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
								to: "/legal",
								className: "font-semibold text-muted hover:text-ink",
								children: "Legal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin",
								className: "font-semibold text-muted hover:text-ink",
								children: "Staff inbox"
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
var styles_default = "/assets/styles-CwYCE7hQ.css";
var APP_NAME = "Automation Flow Lab";
var Route$28 = createRootRoute({
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
				content: "Automation Flow Lab finds what's stopping a website from being found, trusted and turning visitors into customers."
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
var $$splitComponentImporter$23 = () => import("./routes-BQfEY1cU.mjs");
var Route$27 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Website Growth Check — Automation Flow Lab" },
			{
				name: "description",
				content: "Find out what's stopping your website from being found, trusted and turning visitors into customers. Start with a Website Growth Check."
			},
			{
				name: "robots",
				content: "index,follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://automationflowlab.com/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./about-UfwK4VLf.mjs");
var Route$26 = createFileRoute("/about")({
	head: () => ({
		meta: [{ title: "About — Automation Flow Lab" }, {
			name: "description",
			content: "Automation Flow Lab finds what's stopping a business from growing online, then builds the website and systems work to fix it."
		}],
		links: [{
			rel: "canonical",
			href: "https://automationflowlab.com/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./admin-D9F7TVg4.mjs");
var Route$25 = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Submission inbox — Automation Flow Lab" }, {
		name: "description",
		content: "Private inbox for Automation Flow Lab form submissions."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./audit-DVh2Pgkd.mjs");
var Route$24 = createFileRoute("/audit")({
	head: () => ({
		meta: [{ title: "Website Revenue & Growth Audit — Automation Flow Lab" }, {
			name: "description",
			content: "A paid Website Revenue & Growth Audit looks deeper into visibility, trust, conversion, technical health and commercial opportunities. Quoted before work starts."
		}],
		links: [{
			rel: "canonical",
			href: "https://automationflowlab.com/audit"
		}]
	}),
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
var $$splitComponentImporter$18 = () => import("./contact-DSUeJO0Y.mjs");
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
var $$splitComponentImporter$15 = () => import("./custom-builds-DudNbTZw.mjs");
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
var $$splitComponentImporter$12 = () => import("./login-0r8X1-c-.mjs");
var Route$16 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Staff sign-in — Automation Flow Lab" }, {
		name: "description",
		content: "Sign in to the Automation Flow Lab submission inbox. This is not a client portal."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./pricing-MEmIgXX3.mjs");
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
var $$splitComponentImporter$9 = () => import("./services-CMLfqkBj.mjs");
var Route$13 = createFileRoute("/services")({
	head: () => ({
		meta: [{ title: "Services — Automation Flow Lab" }, {
			name: "description",
			content: "Website growth, workflow automation, Microsoft 365, SharePoint, Excel, Zoho, analytics and reporting. Concise services from Automation Flow Lab."
		}],
		links: [{
			rel: "canonical",
			href: "https://automationflowlab.com/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./support-plans-CGXjXToo.mjs");
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
	return html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&/g, "&").replace(/\s+/g, " ").trim();
}
function has(value, pattern) {
	return pattern.test(value);
}
function finding(status, area, summary, meaning, impact) {
	return {
		status,
		area,
		summary,
		meaning,
		impact
	};
}
function scanSite(html, _business = "", secure = true) {
	const text = textOf(html);
	const lower = `${text} ${html}`.toLowerCase();
	const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() ?? "";
	const description = html.match(/name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1]?.trim() ?? html.match(/content=["']([^"']*)["'][^>]*name=["']description["']/i)?.[1]?.trim() ?? "";
	const h1s = [...html.matchAll(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi)];
	const words = text.split(/\s+/).filter(Boolean);
	const viewport = has(html, /name=["']viewport["']/i);
	const noindex = has(html, /name=["']robots["'][^>]*content=["'][^"']*noindex|content=["'][^"']*noindex[^"']*["'][^>]*name=["']robots["']/i);
	const form = has(html, /<form\b/i);
	const contactPath = has(lower, /mailto:|tel:|contact|book|enquir|quote|get in touch|call us|whatsapp/);
	const directContact = has(lower, /mailto:|tel:/) || form;
	const privacy = has(lower, /privacy/);
	const about = has(lower, /\babout\b/);
	const genericTitle = !title || title.length < 8 || /^(home|welcome|untitled|index|just another wordpress site)(\s|[|–—-]|$)/i.test(title);
	const placeholder = has(lower, /lorem ipsum|coming soon|under construction|your text here|your company name|company name here|\[company\]|this is a sample|john doe|theme demo|avada demo/);
	const exampleContact = has(lower, /example\.com|email@domain|you@email|555-01|123-456-7890/);
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	const oldCopy = [...html.matchAll(/©\s*(20\d{2})/g)].map((match) => Number(match[1])).some((value) => value > 1990 && value < year - 2);
	const thin = words.length < 90;
	const commercial = has(lower, /service|product|pricing|solution|clients|customers|book|quote|what we do/);
	const offerClear = Boolean(title) && !genericTitle && h1s.length > 0 && !thin && !placeholder;
	const findings = [
		placeholder || exampleContact ? finding("CRITICAL", "Content Trust", "Website content may contain inconsistencies, placeholder text, or credibility problems that could make customers hesitate.", "Even good traffic may fail to convert if visitors do not fully trust what they are reading.", 100) : !privacy && !about && !directContact ? finding("NEEDS WORK", "Content Trust", "It is not obvious who is behind the website, or where a visitor would confirm that.", "People may hesitate before enquiring when they cannot tell who they would be dealing with.", 88) : oldCopy ? finding("NEEDS WORK", "Content Trust", "Some of the page may still be presenting older information.", "Outdated details can make an otherwise relevant business look neglected.", 70) : finding("WORKING", "Content Trust", "The page shows ordinary signs of a real business a visitor can check.", "Visible identity makes it easier for someone to decide the business is genuine.", 30),
		!contactPath ? finding("CRITICAL", "Conversion", "Visitors may not have a clear path from interest to an enquiry, booking, or purchase.", "Traffic can fail to become a customer when the page does not show the next step.", 96) : !offerClear || !directContact ? finding("NEEDS WORK", "Conversion", "A next step is present, but visitors may not quickly see what they would be choosing or how to take it.", "Interest can fade when the offer and the enquiry path are not obvious together.", 84) : finding("WORKING", "Offer Clarity", "Visitors can understand what the business offers relatively quickly, and can see a way to respond.", "Clear positioning makes it easier for potential customers to decide whether the business is relevant to them.", 28),
		noindex ? finding("CRITICAL", "Visibility", "This page is marked so that search engines may not show it.", "A business can be hard to find when its own pages ask not to be listed.", 98) : genericTitle || !description || h1s.length === 0 ? finding(h1s.length === 0 && genericTitle ? "CRITICAL" : "NEEDS WORK", "SEO Structure", "Important products or services may not be structured strongly enough for search engines to understand their commercial importance.", "The website may struggle to compete for valuable customer searches.", 86) : h1s.length > 1 ? finding("NEEDS WORK", "SEO Structure", "The page has more than one main heading, so the primary offer is less clear to search.", "Search engines may not be sure which service this page should be known for.", 64) : finding("WORKING", "Visibility", "The page has a clear title, description, and main heading.", "Search engines have a basic structure to read. This is not a full search review.", 24),
		!secure ? finding("CRITICAL", "Technical Quality", "The address did not present as a secure website.", "Visitors and search engines may treat an insecure page as a reason not to continue.", 94) : !viewport ? finding("NEEDS WORK", "Technical Quality", "Underlying website issues may be affecting usability on a phone.", "Some website problems may be invisible at a desk while still limiting growth.", 60) : finding("WORKING", "Technical Quality", "The page we read is served securely and sets up a basic mobile view.", "Basic technical quality is not the first thing blocking a visit. Deeper issues need the full audit.", 18),
		placeholder || thin ? finding("CRITICAL", "Growth", "The page does not yet give a buyer enough substance to choose this business over another.", "Thin or unfinished pages limit both trust and the chance of being found for commercial searches.", 90) : !commercial ? finding("NEEDS WORK", "Growth", "Commercial detail a customer would expect — services, proof, or a reason to choose the business — is thin on this page.", "The website may be present without doing much to win the enquiry.", 72) : finding("WORKING", "Growth", "The page gives a visitor enough to judge whether the business is relevant.", "That is a start. It is not a review of competitors, search demand, or missed markets.", 20)
	].sort((a, b) => RANK[a.status] - RANK[b.status] || b.impact - a.impact).slice(0, 5).map(({ status, area, summary, meaning }) => ({
		status,
		area,
		summary,
		meaning
	}));
	return {
		overall: findings.some((item) => item.status === "CRITICAL") ? "CRITICAL" : findings.some((item) => item.status === "NEEDS WORK") ? "NEEDS WORK" : "WORKING",
		findings
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
var $$splitComponentImporter$6 = () => import("./tools-C8Ge0Jqr.mjs");
var Route$8 = createFileRoute("/tools/")({
	head: () => ({
		meta: [{ title: "Tools — Automation Flow Lab" }, {
			name: "description",
			content: "Practical tools from Automation Flow Lab to help businesses make better technology and growth decisions."
		}],
		links: [{
			rel: "canonical",
			href: "https://automationflowlab.com/tools"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("../_slug-oMmN1wJk.mjs");
var Route$7 = createFileRoute("/tools/$slug")({
	beforeLoad: ({ params }) => {
		if (retiredToolSlugs.includes(params.slug)) throw redirect({
			to: "/tools",
			statusCode: 301
		});
	},
	loader: ({ params }) => {
		const tool = getTool(params.slug);
		if (!tool || tool.status !== "available") throw notFound();
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
var $$splitComponentImporter$4 = () => import("./certflow-DZjfVke7.mjs");
var Route$5 = createFileRoute("/tools/certflow")({
	head: () => ({ meta: [{ title: "Certflow — Automation Flow Lab" }, {
		name: "description",
		content: "Upload a learner list, preview the certificate, and run the batch. One PDF per person."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./growth-check-DbFzfr79.mjs");
var Route$4 = createFileRoute("/tools/growth-check")({
	head: () => ({
		meta: [
			{ title: "Website Growth Check — Automation Flow Lab" },
			{
				name: "description",
				content: "Enter a website address and get up to five findings on visibility, trust, conversion and growth. No account. Not a full audit."
			},
			{
				name: "robots",
				content: "index,follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://automationflowlab.com/tools/growth-check"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./license-compare-_oNlZCwV.mjs");
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
var $$splitComponentImporter = () => import("./play._slug-D0bCUekc.mjs");
var Route = createFileRoute("/tools/play/$slug")({
	beforeLoad: () => {
		throw redirect({
			to: "/tools",
			statusCode: 301
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$27.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$28
});
var AboutRoute = Route$26.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$28
});
var AdminRoute = Route$25.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$28
});
var AuditRoute = Route$24.update({
	id: "/audit",
	path: "/audit",
	getParentRoute: () => Route$28
});
var CommunityStandardsRoute = Route$23.update({
	id: "/community-standards",
	path: "/community-standards",
	getParentRoute: () => Route$28
});
var ContactRoute = Route$22.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$28
});
var CookiesRoute = Route$21.update({
	id: "/cookies",
	path: "/cookies",
	getParentRoute: () => Route$28
});
var CopyrightRoute = Route$20.update({
	id: "/copyright",
	path: "/copyright",
	getParentRoute: () => Route$28
});
var CustomBuildsRoute = Route$19.update({
	id: "/custom-builds",
	path: "/custom-builds",
	getParentRoute: () => Route$28
});
var LegalRoute = Route$18.update({
	id: "/legal",
	path: "/legal",
	getParentRoute: () => Route$28
});
var LegalSafetyRoute = Route$17.update({
	id: "/legal-safety",
	path: "/legal-safety",
	getParentRoute: () => Route$28
});
var LoginRoute = Route$16.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$28
});
var PricingRoute = Route$15.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$28
});
var PrivacyRoute = Route$14.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$28
});
var ServicesRoute = Route$13.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$28
});
var SupportPlansRoute = Route$12.update({
	id: "/support-plans",
	path: "/support-plans",
	getParentRoute: () => Route$28
});
var TermsRoute = Route$11.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$28
});
var ApiGrowthCheckRoute = Route$10.update({
	id: "/api/growth-check",
	path: "/api/growth-check",
	getParentRoute: () => Route$28
});
var ApiLicenseCatalogRoute = Route$9.update({
	id: "/api/license-catalog",
	path: "/api/license-catalog",
	getParentRoute: () => Route$28
});
var ToolsIndexRoute = Route$8.update({
	id: "/tools/",
	path: "/tools/",
	getParentRoute: () => Route$28
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute,
	AuditRoute,
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
		getParentRoute: () => Route$28
	}),
	ToolsCertBatchRoute: Route$6.update({
		id: "/tools/cert-batch",
		path: "/tools/cert-batch",
		getParentRoute: () => Route$28
	}),
	ToolsCertflowRoute: Route$5.update({
		id: "/tools/certflow",
		path: "/tools/certflow",
		getParentRoute: () => Route$28
	}),
	ToolsGrowthCheckRoute: Route$4.update({
		id: "/tools/growth-check",
		path: "/tools/growth-check",
		getParentRoute: () => Route$28
	}),
	ToolsLicenseCompareRoute: Route$3.update({
		id: "/tools/license-compare",
		path: "/tools/license-compare",
		getParentRoute: () => Route$28
	}),
	ToolsZohoFitRoute: Route$2.update({
		id: "/tools/zoho-fit",
		path: "/tools/zoho-fit",
		getParentRoute: () => Route$28
	}),
	ToolsIndexRoute,
	ApiAuthSplatRoute: Route$1.update({
		id: "/api/auth/$",
		path: "/api/auth/$",
		getParentRoute: () => Route$28
	}),
	ToolsPlaySlugRoute: Route.update({
		id: "/tools/play/$slug",
		path: "/tools/play/$slug",
		getParentRoute: () => Route$28
	})
};
var routeTree = Route$28._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { regions as a, PageIntro as c, useCurrentUserState as d, needLabels as i, cn as l, Route$7 as n, Route$12 as o, compare as r, Route$22 as s, router_exports as t, RedirectToSignIn as u };
