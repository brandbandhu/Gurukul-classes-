import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { BranchCard } from "@/components/BranchCard";
import { EnquiryForm } from "@/components/EnquiryForm";
import { BRANCHES, SITE } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Gurukul Science Classes" },
      { name: "description", content: "Get in touch with Gurukul Science Classes — 5 branches across Kalyan and Bhiwandi. Phone, email and direct branch contacts." },
      { property: "og:title", content: "Contact Gurukul Science Classes" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Reach out to your nearest branch or send us a message — we typically respond within 30 minutes."
        crumbs={[{ label: "Contact Us" }]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[
            { Icon: Phone, title: "Call Us", lines: [SITE.primaryPhone, "Mon–Sat, 9 AM – 8 PM"], href: `tel:${SITE.primaryPhoneRaw}` },
            { Icon: Mail, title: "Email Us", lines: [SITE.email, "We reply within a few hours"], href: `mailto:${SITE.email}` },
            { Icon: MapPin, title: "Head Office", lines: ["Sahajanand Chowk, Kalyan (W)", "Visit us — counsellor available"] },
          ].map(({ Icon, title, lines, href }) => (
            <a key={title} href={href} className="group rounded-3xl border border-border bg-white p-6 shadow-soft hover:shadow-glow transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-lg font-bold text-brand-ink">{title}</h4>
              {lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
            </a>
          ))}
        </div>
      </section>

      <section className="py-12 bg-brand-cream">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Branches" title="Find your nearest centre" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANCHES.map((b) => <BranchCard key={b.slug} branch={b} />)}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle eyebrow="Send a Message" title="We'd love to hear from you" align="left" />
            <p className="text-muted-foreground leading-relaxed">
              Whether you're exploring courses, want to book a free demo, or simply have a question
              about admissions — drop us a message and our team will get back to you the same day.
            </p>
            <div className="mt-6 rounded-2xl bg-brand-light p-4 text-sm text-brand-ink/80">
              <strong className="text-brand-red">Tip:</strong> Mention the student's current class and the
              programme of interest — we can prepare a tailored response.
            </div>
          </div>
          <EnquiryForm variant="contact" title="Contact Form" />
        </div>
      </section>
    </>
  );
}