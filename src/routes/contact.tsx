import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { PolicyDocument } from "@/components/site/policy-document";
import { contactPolicy } from "@/lib/legal";
import { site } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    topic: typeof search.topic === "string" ? search.topic.slice(0, 160) : "",
  }),
  head: () => ({
    meta: [
      { title: "Contact — Automation Flow Lab" },
      {
        name: "description",
        content: `Contact ${site.name} at ${site.email}. Support, service enquiries, privacy, copyright and security.`,
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { topic } = Route.useSearch();
  return (
    <div>
      <PolicyDocument page={contactPolicy} />
      <div className="mx-auto -mt-8 w-full max-w-3xl px-5 pb-20">
        <EnquiryForm
          kind="contact"
          topic={topic}
          heading="Send an enquiry"
          intro={
            topic
              ? `This form is prefilled for “${topic}”. Change that if it is not right. An enquiry does not create a payment obligation.`
              : "Use this form for a service enquiry or a complaint. An enquiry does not create a payment obligation. Do not include passwords, tokens or card details."
          }
        />
      </div>
    </div>
  );
}
