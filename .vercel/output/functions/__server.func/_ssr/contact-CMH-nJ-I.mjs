import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as site, l as Route$16, u as PageIntro } from "./router-DZgZGZuL.mjs";
import { t as EnquiryForm } from "./enquiry-form-BzyQ7pCY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CMH-nJ-I.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { topic } = Route$16.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			eyebrow: "Contact",
			title: "Tell us what is stuck",
			lede: "Use the form, or email us directly. There is no phone number or street address published for this business."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-10 px-5 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-2 inline-flex text-lg font-semibold underline decoration-line underline-offset-4",
						href: `mailto:${site.email}`,
						children: site.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted",
						children: "The form checks the fields before it sends, rejects obvious spam, and stores the enquiry so it can be read in the business inbox. If email delivery is configured on the server, we are notified as well. If it is not, the inbox is still the record."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
					kind: "contact",
					topic,
					heading: "Enquiry",
					intro: topic ? `This form is prefilled for “${topic}”. Change that if it is not right.` : void 0
				})
			})]
		})]
	});
}
//#endregion
export { ContactPage as component };
