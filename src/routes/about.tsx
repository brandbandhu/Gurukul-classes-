import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BookOpenCheck, Compass, Heart, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { StatsCounter } from "@/components/StatsCounter";
import aboutTeaching from "@/assets/about-teaching.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Gurukul Science Classes" },
      { name: "description", content: "Learn about Gurukul Science Classes — our story, our faculty, our mission to mentor every student into a top medical, engineering or science college." },
      { property: "og:title", content: "About Gurukul Science Classes" },
      { property: "og:description", content: "25+ years of mentoring students into top colleges across India." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { Icon: Target, title: "Result Driven", text: "Every plan is reverse-engineered from the outcome students aspire to." },
  { Icon: Heart, title: "Student First", text: "Care for individual progress over batch averages." },
  { Icon: ShieldCheck, title: "Integrity", text: "Honest counselling, transparent fees, no false promises." },
  { Icon: Compass, title: "Guidance", text: "Mentors who stay involved beyond the classroom." },
];

function About() {
  return (
    <>
      <PageHero
        title="About Gurukul"
        subtitle="Where 25+ years of academic excellence meet a future-ready learning experience."
        crumbs={[{ label: "About Us" }]}
      />

      <section className="relative z-10 bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-brand opacity-20 blur-2xl" />
            <img src={aboutTeaching} alt="Senior faculty teaching" className="relative rounded-3xl shadow-card object-cover w-full h-[480px]" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-white p-5 shadow-card border border-border">
              <Award className="h-7 w-7 text-brand-red" />
              <p className="mt-2 text-2xl font-extrabold text-brand-ink">10,000+</p>
              <p className="text-xs text-muted-foreground">Successful Students</p>
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Our Story" title="Built on trust. Powered by results." align="left" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Gurukul Science Classes was founded with one belief — every committed student deserves
              a teacher who genuinely cares about their growth. Two decades later, that idea has grown
              into one of Kalyan and Bhiwandi's most respected coaching institutes for JEE, NEET, MH-CET
              and Science foundation programs.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From a single classroom to five branches and 10,000+ alumni placed across India's top
              colleges, our journey is the journey of the students and families who chose us.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-brand-cream p-5">
                <Users className="h-6 w-6 text-brand-red" />
                <h4 className="mt-3 font-bold text-brand-ink">Mission</h4>
                <p className="mt-1 text-sm text-muted-foreground">Mentor every student into the institution and career of their choice.</p>
              </div>
              <div className="rounded-2xl bg-brand-light p-5">
                <BookOpenCheck className="h-6 w-6 text-brand-red" />
                <h4 className="mt-3 font-bold text-brand-ink">Vision</h4>
                <p className="mt-1 text-sm text-muted-foreground">Be India's most trusted neighborhood institute for science excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className="py-16 md:py-24 bg-brand-cream mt-12">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Our Values" title="The principles that shape every classroom" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ Icon, title, text }) => (
              <div key={title} className="group rounded-3xl bg-white p-6 shadow-soft hover:shadow-glow transition-all hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-bold text-brand-ink">{title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Faculty" title="Mentors who've seen it all" description="A team of senior IIT-JEE, NEET and MH-CET faculty with decades of result-oriented teaching experience." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Physics Dept.", "Chemistry Dept.", "Mathematics Dept.", "Biology Dept."].map((d, i) => (
              <div key={d} className="rounded-3xl border border-border bg-white p-6 shadow-soft text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-brand p-1 shadow-glow">
                  <div className="h-full w-full rounded-full overflow-hidden bg-brand-cream flex items-center justify-center">
                    <Sparkles className="h-10 w-10 text-brand-red" />
                  </div>
                </div>
                <h4 className="mt-4 font-bold text-brand-ink">{d}</h4>
                <p className="mt-1 text-xs text-brand-red font-semibold tracking-wider uppercase">{15 + i * 3}+ Years Experience</p>
                <p className="mt-3 text-sm text-muted-foreground">A senior team trained at India's top universities, focused on conceptual clarity and exam strategy.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-dark text-white">
        <div className="container relative z-10 mx-auto px-4 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Visit a centre. Meet our team. Decide for yourself.</h2>
            <p className="mt-4 text-white/80">Schedule a campus visit or a free counselling session at your nearest branch.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/contact" className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white shadow-glow">
              Book Counselling
            </Link>
            <Link to="/courses/xi-science" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-ink hover:bg-brand-yellow transition-colors">
              View Programs
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img src={heroClassroom} alt="" className="h-full w-full object-cover opacity-20" loading="lazy" />
        </div>
      </section>
    </>
  );
}
