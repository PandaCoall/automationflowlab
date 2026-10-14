//#region node_modules/.nitro/vite/services/ssr/assets/analytics-Dt7yDY7a.js
function track(event, params = {}) {
	if (typeof window === "undefined") return;
	const detail = {
		event,
		...params
	};
	window.dispatchEvent(new CustomEvent("afl:analytics", { detail }));
	const host = window;
	host.dataLayer?.push(detail);
	host.gtag?.("event", event, params);
}
//#endregion
export { track as t };
