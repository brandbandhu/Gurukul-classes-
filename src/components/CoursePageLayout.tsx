import { Check, Phone, Sparkles } from "lucide-react";
import { PageHero } from "./PageHero";
import { EnquiryForm } from "./EnquiryForm";
import { SectionTitle } from "./SectionTitle";
import { CourseCard } from "./CourseCard";
import { COURSES, SITE, type Course } from "@/data/site";

export function CoursePageLayout({ course }: { course: Course }) {
  const Icon = course.icon;
  const others = COURSES.filter((c) => c.slug !== course.slug).slice(0, 4);
  return (
    <>
      <PageHero
        title={course.title}
        subtitle={course.short}
        crumbs={[{ label: course.category }, { label: course.title }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-1 text-xs font-semibold tracking-widest text-brand-red uppercase">
              <Sparkles className="h-3.5 w-3.5" /> {course.category} Program
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold"><span className="section-title">Program Overview</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">{course.description}</p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {course.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium text-brand-ink/85">{h}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-gradient-brand-soft border border-brand-red/15 p-6 md:p-8">
              <h3 className="text-xl font-bold text-brand-ink">Subjects Covered</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {course.subjects.map((s) => (
                  <span key={s} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-ink shadow-soft">
                    <Icon className="h-4 w-4 text-brand-red" /> {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`tel:${SITE.primaryPhoneRaw}`} className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white shadow-glow">
                <Phone className="h-4 w-4" /> Talk to a Counsellor
              </a>
              <a href="#enquire" className="inline-flex items-center gap-2 rounded-full border-2 border-brand-red px-6 py-3 text-sm font-bold text-brand-red hover:bg-brand-red hover:text-white transition-colors">
                Download Brochure
              </a>
            </div>
          </div>

          <div id="enquire" className="lg:sticky lg:top-28 self-start">
            <EnquiryForm title="Enquire About This Course" subtitle={`Get details on fees, batches & syllabus for ${course.title}.`} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Explore More" title="Other Programs" description="Find the right course for your next academic milestone." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {others.map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
        </div>
      </section>
    </>
  );
}