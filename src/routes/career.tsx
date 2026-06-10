import { Briefcase, GraduationCap, HeartHandshake, Trophy } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { EnquiryForm } from "@/components/EnquiryForm";

const PERKS = [
  { Icon: Trophy, title: "Performance Bonus", text: "Result-linked bonuses on top of an attractive base." },
  { Icon: GraduationCap, title: "Continuous Learning", text: "Workshops, training and growth into senior faculty roles." },
  { Icon: HeartHandshake, title: "Supportive Culture", text: "A collaborative academic team that values teachers." },
  { Icon: Briefcase, title: "Long-term Career", text: "Stable, full-time roles with clear progression." },
];

export function Career() {
  return (
    <>
      <PageHero
        title="Build a teaching career at Gurukul"
        subtitle="We're always hiring passionate Physics, Chemistry, Mathematics and Biology faculty."
        crumbs={[{ label: "Career" }]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Why Join Us" title="More than a teaching job" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-border bg-white p-6 shadow-soft hover:shadow-glow transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mt-4 font-bold text-brand-ink">{title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle eyebrow="Open Roles" title="We're looking for senior faculty" align="left" />
            <ul className="space-y-3">
              {[
                "Senior Physics Faculty - JEE / NEET",
                "Senior Chemistry Faculty - JEE / NEET",
                "Mathematics Faculty - JEE / MH-CET",
                "Biology Faculty - NEET",
                "Academic Counsellor - Kalyan & Bhiwandi",
              ].map((role) => (
                <li key={role} className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-white text-xs font-bold">*</span>
                  <span className="text-sm font-semibold text-brand-ink">{role}</span>
                </li>
              ))}
            </ul>
          </div>
          <EnquiryForm variant="career" title="Apply Now" subtitle="Share your details and resume - our HR team will reach out." />
        </div>
      </section>
    </>
  );
}
