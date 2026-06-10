import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpenCheck, ChevronRight, GraduationCap, PlayCircle, Quote, Sparkles, Trophy, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { StatsCounter } from "@/components/StatsCounter";
import { SectionTitle } from "@/components/SectionTitle";
import { CourseCard } from "@/components/CourseCard";
import { BranchCard } from "@/components/BranchCard";
import { ResultCard } from "@/components/ResultCard";
import { EnquiryForm } from "@/components/EnquiryForm";
import { BRANCHES, COURSES, METHODOLOGY, RESULTS, SITE, TESTIMONIALS, WHY_CHOOSE } from "@/data/site";
import aboutTeaching from "@/assets/about-teaching.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";
import heroStudents from "@/assets/hero-students.jpg";
import heroStudy from "@/assets/hero-study.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gurukul Science Classes — IIT-JEE, NEET, MH-CET Coaching in Kalyan & Bhiwandi" },
      { name: "description", content: "Premium coaching for IIT-JEE, NEET, MH-CET & Foundation in Kalyan and Bhiwandi. 10,000+ students placed in top colleges. Admissions open for 2026." },
      { property: "og:title", content: "Gurukul Science Classes" },
      { property: "og:description", content: "IIT-JEE, NEET, MH-CET & Foundation coaching — proven results, expert faculty, 5 branches." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 1. Hero */}
      <HeroCarousel />

      {/* 2. Stats */}
      <StatsCounter />

      {/* 3. Quick enquiry strip */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-gradient-brand p-1 shadow-glow">
            <div className="rounded-[1.4rem] bg-white p-6 md:p-8 grid md:grid-cols-[1.4fr_1fr] gap-6 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-bold tracking-widest text-brand-red uppercase">
                  <Sparkles className="h-3 w-3" /> Admissions Open 2026
                </span>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-brand-ink">
                  Reserve your seat — limited capacity per batch.
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Speak with our counsellor to find the right program for your goals.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href="#enquire" className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white shadow-glow">
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </a>
                <a href={`tel:${SITE.primaryPhoneRaw}`} className="inline-flex items-center gap-2 rounded-full border-2 border-brand-ink/10 px-6 py-3 text-sm font-bold text-brand-ink hover:border-brand-red hover:text-brand-red">
                  {SITE.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-brand opacity-20 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <img src={aboutTeaching} alt="Teacher with students" className="rounded-3xl shadow-card object-cover h-80 w-full" loading="lazy" />
              <div className="space-y-4">
                <img src={heroClassroom} alt="Modern classroom" className="rounded-3xl shadow-card object-cover h-36 w-full" loading="lazy" />
                <div className="rounded-3xl bg-gradient-brand p-6 text-white shadow-glow">
                  <Trophy className="h-7 w-7 text-brand-yellow" />
                  <p className="mt-3 text-2xl font-extrabold">25+ Years</p>
                  <p className="text-sm text-white/85">of teaching excellence</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="About Gurukul" title="Where science meets serious mentorship" align="left" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Gurukul Science Classes is one of Kalyan and Bhiwandi's most trusted coaching institutes
              for IIT-JEE, NEET, MH-CET, and Foundation programs. Built on the belief that great
              teaching changes lives, our faculty has guided generations of students into the
              country's top medical, engineering, and science colleges.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We blend concept-first lectures, daily practice, and a culture of accountability —
              the same rigour that has produced 10,000+ alumni and 6,000+ admits into top colleges.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { Icon: Users, label: "Expert Faculty" },
                { Icon: BookOpenCheck, label: "Concept-First" },
                { Icon: Award, label: "Proven Results" },
              ].map(({ Icon, label }) => (
                <div key={label} className="rounded-2xl bg-white p-4 text-center shadow-soft">
                  <Icon className="mx-auto h-6 w-6 text-brand-red" />
                  <p className="mt-2 text-xs font-semibold text-brand-ink/80">{label}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:gap-3 transition-all">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Courses */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Programs" title="Choose Your Path" description="From foundation classes to elite entrance preparation — we've built a program for every stage." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COURSES.map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
        </div>
      </section>

      {/* 6. Why Choose - zigzag */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Why Gurukul" title="Six reasons families trust us" />
          <div className="grid md:grid-cols-2 gap-6">
            {WHY_CHOOSE.map((w, i) => (
              <div key={w.title} className={`rounded-3xl border border-border bg-white p-6 shadow-soft transition-transform hover:-translate-y-1 ${i % 2 ? "md:mt-8" : ""}`}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <span className="text-lg font-extrabold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-ink">{w.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{w.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Results */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Result Showcase" title="Our toppers tell our story" description="A handful of recent results from across NEET, JEE, MH-CET and HSC Science." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULTS.slice(0, 8).map((r) => <ResultCard key={r.name} result={r} />)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/results" className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white shadow-glow">
              View All Results <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Methodology timeline */}
      <section className="py-16 md:py-24 bg-gradient-dark text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand-red/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand-yellow/20 blur-3xl" />
        <div className="container relative mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1 text-xs font-semibold tracking-widest text-white uppercase">
              Methodology
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">The Gurukul Learning Journey</h2>
            <p className="mt-4 text-white/75">Six structured stages that turn ambitious students into top rankers.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {METHODOLOGY.map((m) => (
              <div key={m.step} className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition-colors">
                <div className="text-5xl font-extrabold text-gradient-brand">{m.step}</div>
                <h4 className="mt-3 text-lg font-bold">{m.title}</h4>
                <p className="mt-2 text-sm text-white/70">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Branches */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Our Branches" title="Five centres across Kalyan & Bhiwandi" description="Visit your nearest centre for a counselling session and a free demo lecture." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANCHES.map((b) => <BranchCard key={b.slug} branch={b} />)}
          </div>
        </div>
      </section>

      {/* 10. Gallery */}
      <GalleryPreview />

      {/* 11. Demo video */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle eyebrow="See the campus" title="Step inside a Gurukul classroom" align="left" />
            <p className="text-muted-foreground leading-relaxed">
              Take a quick tour of our flagship Kalyan centre, meet our faculty and see how a
              regular study day unfolds at Gurukul.
            </p>
            <Link to="/videos" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white shadow-glow btn-shine">
              Watch All Videos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-card border-4 border-white">
            <img src={heroStudy} alt="Gurukul campus tour" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-brand-ink/40 flex items-center justify-center">
              <a href="#" aria-label="Play video" className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-brand shadow-glow animate-float">
                <PlayCircle className="h-10 w-10 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Testimonials */}
      <TestimonialsSlider />

      {/* 13. Enquiry CTA */}
      <section id="enquire" className="py-16 md:py-24 bg-gradient-brand-soft">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle eyebrow="Get in Touch" title="Start your Gurukul journey today" align="left" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Tell us a bit about the student — we'll reach out with batch details, fee structure
              and a free counselling slot at your preferred branch.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {BRANCHES.slice(0, 4).map((b) => (
                <div key={b.slug} className="rounded-2xl border border-border bg-white p-4 shadow-soft">
                  <p className="text-xs font-bold tracking-widest text-brand-red uppercase">{b.area}</p>
                  <p className="mt-1 font-bold text-brand-ink">{b.name}</p>
                  <a href={`tel:${b.phoneRaw}`} className="mt-2 text-sm text-muted-foreground hover:text-brand-red">{b.phone}</a>
                </div>
              ))}
            </div>
          </div>
          <EnquiryForm title="Admission Enquiry" subtitle="We typically respond within 30 minutes during working hours." />
        </div>
      </section>

      {/* 14. Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 md:p-14 text-white shadow-glow">
            <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <GraduationCap className="h-10 w-10 text-brand-yellow" />
                <h3 className="mt-4 text-3xl md:text-4xl font-extrabold">Your top-college admission begins here.</h3>
                <p className="mt-2 text-white/90 max-w-xl">Join the next batch of Gurukul toppers — limited seats available for VIII to XII.</p>
              </div>
              <a href="#enquire" className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-4 text-sm font-extrabold text-brand-ink shadow-yellow">
                Apply Now <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function GalleryPreview() {
  const images = [heroClassroom, heroStudents, aboutTeaching, heroStudy, heroClassroom, heroStudents];
  const sizes = ["row-span-2", "", "", "row-span-2", "", ""];
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Campus Life" title="A glimpse into Gurukul" />
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-4">
          {images.map((src, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl group ${sizes[i] || ""}`}>
              <img src={src} alt={`Gallery ${i + 1}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:gap-3 transition-all">
            See full gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="py-16 md:py-24 bg-brand-cream">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Testimonials" title="What students & parents say" />
        <div className="relative max-w-3xl mx-auto">
          <div className="rounded-3xl bg-white p-8 md:p-12 shadow-card border border-border text-center">
            <Quote className="mx-auto h-10 w-10 text-brand-red/20" />
            <p className="mt-4 text-lg md:text-xl text-brand-ink/90 leading-relaxed italic">
              "{TESTIMONIALS[i].text}"
            </p>
            <div className="mt-6">
              <p className="font-bold text-brand-ink">{TESTIMONIALS[i].name}</p>
              <p className="text-sm text-brand-red">{TESTIMONIALS[i].role}</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-gradient-brand" : "w-2 bg-brand-ink/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
