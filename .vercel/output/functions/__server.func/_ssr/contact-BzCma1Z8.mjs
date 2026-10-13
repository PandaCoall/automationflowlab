import { n as contactPolicy } from "./legal-CJMjhEPX.mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Route$22 } from "./router-CUKPpTz9.mjs";
import { t as EnquiryForm } from "./enquiry-form-CrDIk9iv.mjs";
import { t as PolicyDocument } from "./policy-document-CHFaFZD-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BzCma1Z8.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { topic } = Route$22.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolicyDocument, { page: contactPolicy }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto -mt-8 w-full max-w-3xl px-5 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
			kind: "contact",
			topic,
			heading: "Send an enquiry",
			intro: topic ? `This form is prefilled for “${topic}”. Change that if it is not right. An enquiry does not create a payment obligation.` : "Use this form for a service enquiry or a complaint. An enquiry does not create a payment obligation. Do not include passwords, tokens or card details."
		})
	})] });
}
//#endregion
export { ContactPage as component };
