import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { legal } from "@/lib/legal";

export const recordTermsAcceptance = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    const data = input as { version?: unknown; context?: unknown };
    const version = data.version === legal.version ? legal.version : "";
    const context = data.context === "sign-in" ? "sign-in" : "";
    if (!version || !context) throw new Error("Invalid terms acceptance");
    return { version, context };
  })
  .handler(async ({ data }) => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const id = crypto.randomUUID();
    await sql`insert into terms_acceptances (id, version, context) values (${id}, ${data.version}, ${data.context})`;
    return { id, version: data.version };
  });

export const attachTermsAcceptance = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: unknown) => {
    const data = input as { id?: unknown };
    const id = typeof data.id === "string" ? data.id : "";
    if (!/^[0-9a-f-]{36}$/i.test(id)) throw new Error("Invalid acceptance");
    return { id };
  })
  .handler(async ({ data, context }) => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    await sql`update terms_acceptances set user_id = ${context.userId} where id = ${data.id} and user_id is null`;
    return { ok: true as const };
  });
