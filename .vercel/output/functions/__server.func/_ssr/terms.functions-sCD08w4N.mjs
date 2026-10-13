import { a as legal } from "./legal-CJMjhEPX.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-DRll_-Ke.mjs";
import { t as createServerRpc } from "./createServerRpc-CcvdN_gc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms.functions-sCD08w4N.js
var recordTermsAcceptance_createServerFn_handler = createServerRpc({
	id: "0a38e1c23fec9feca51951b7d362e63e32d88434c246c06928fc9666115d46f5",
	name: "recordTermsAcceptance",
	filename: "src/lib/terms.functions.ts"
}, (opts) => recordTermsAcceptance.__executeServer(opts));
var recordTermsAcceptance = createServerFn({ method: "POST" }).validator((input) => {
	const data = input;
	const version = data.version === legal.version ? legal.version : "";
	const context = data.context === "sign-in" ? "sign-in" : "";
	if (!version || !context) throw new Error("Invalid terms acceptance");
	return {
		version,
		context
	};
}).handler(recordTermsAcceptance_createServerFn_handler, async ({ data }) => {
	const { getSql } = await import("./db-DxI0VQyL.mjs").then((n) => n.t).then((n) => n.t);
	const sql = await getSql();
	await sql`create table if not exists terms_acceptances (
      id text primary key,
      version text not null,
      accepted_at timestamptz not null default now(),
      context text not null,
      user_id text
    )`;
	const id = crypto.randomUUID();
	await sql`insert into terms_acceptances (id, version, context) values (${id}, ${data.version}, ${data.context})`;
	return {
		id,
		version: data.version
	};
});
var attachTermsAcceptance_createServerFn_handler = createServerRpc({
	id: "5d0bf66196d8d696f51b798350a6840f5875dcfbf54d4e2786d118972adb7c99",
	name: "attachTermsAcceptance",
	filename: "src/lib/terms.functions.ts"
}, (opts) => attachTermsAcceptance.__executeServer(opts));
var attachTermsAcceptance = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const data = input;
	const id = typeof data.id === "string" ? data.id : "";
	if (!/^[0-9a-f-]{36}$/i.test(id)) throw new Error("Invalid acceptance");
	return { id };
}).handler(attachTermsAcceptance_createServerFn_handler, async ({ data, context }) => {
	const { getSql } = await import("./db-DxI0VQyL.mjs").then((n) => n.t).then((n) => n.t);
	await (await getSql())`update terms_acceptances set user_id = ${context.userId} where id = ${data.id} and user_id is null`;
	return { ok: true };
});
//#endregion
export { attachTermsAcceptance_createServerFn_handler, recordTermsAcceptance_createServerFn_handler };
