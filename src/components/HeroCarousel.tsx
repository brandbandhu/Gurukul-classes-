import { useEffect, useState } from "react";
import { ArrowRight, Phone, Sparkles, Star } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import heroClassroom from "@/assets/hero-classroom.jpg";
import heroStudents from "@/assets/hero-students.jpg";
import heroStudy from "@/assets/hero-study.jpg";
import aboutTeaching from "@/assets/about-teaching.jpg";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    eyebrow: "Since 1998",
    title: "IIT-JEE | Medical | Foundation Coaching",
    description: "Concept-first teaching, daily practice and real results — the Gurukul way.",
    image: heroClassroom,
    badge: "★ Admissions Open",
  },
  {
    eyebrow: "Top results year after year",
    title: "NEET, MH-CET & IIT-JEE Preparation in Kalyan and Bhiwandi",
    description: "Integrated programs that balance HSC scores with entrance excellence.",
    image: heroStudy,
    badge: "5 Branches",
  },
  {
    eyebrow: "Proven track record",
    title: "10,000+ Successful Students & 6,000+ in Top Colleges",
    description: "A legacy of trust built by thousands of doctors, engineers and scientists.",
    image: heroStudents,
    badge: "10k+ Alumni",
  },
  {
    eyebrow: "2026 Batches",
    title: "Admissions Open for VIII, IX, X, XI & XII Science",
    description: "Reserve your seat in our new academic session — limited capacity per batch.",
    image: aboutTeaching,
    badge: "Limited Seats",
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);
  const slide = SLIDES[i];

  return (
    <section className="relative overflow-hidden bg-brand-ink min-h-[640px] lg:min-h-[720px]">
      {/* Background images */}
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            i === idx ? "opacity-100" : "opacity-0",
          )}
        >
          <img
            src={s.image}
            alt=""
            className="h-full w-full object-cover scale-105"
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-hero mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/80 via-brand-ink/40 to-transparent" />
        </div>
      ))}

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-yellow/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-red/30 blur-3xl" />

      <div className="container relative mx-auto px-4 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center min-h-[640px] lg:min-h-[720px]">
        <div key={i} className="text-white animate-slide-in-left">
          <span className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase">
            <Sparkles className="h-3.5 w-3.5 text-brand-yellow" /> {slide.eyebrow}
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            {slide.title}
          </h1>
          <p className="mt-5 text-lg text-white/85 max-w-xl">{slide.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#enquire"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white shadow-glow"
            >
              Enquire Now <ArrowRight className="h-4 w-4" />
            </a>
            <AppLink
              to="/courses/xi-science"
              className="inline-flex items-center gap-2 rounded-full bg-white/95 px-6 py-3 text-sm font-bold text-brand-ink hover:bg-brand-yellow transition-colors"
            >
              View Courses
            </AppLink>
            <a
              href={`tel:${SITE.primaryPhoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-brand-ink transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>

          {/* Floating badges */}
          <div className="mt-10 flex flex-wrap gap-3">
            {["10,000+ Students", "5 Branches", "25+ Years Trusted"].map((b) => (
              <span key={b} className="inline-flex items-center gap-2 rounded-2xl glass-card px-4 py-2 text-xs font-semibold text-white">
                <Star className="h-3.5 w-3.5 text-brand-yellow" /> {b}
              </span>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:flex justify-end">
          <div key={`img-${i}`} className="relative animate-slide-in-right">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-brand opacity-40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white/40 shadow-glow">
              <img src={slide.image} alt={slide.title} width={520} height={620} className="h-[520px] w-[420px] object-cover" />
            </div>
            <div className="absolute -left-6 top-10 rounded-2xl glass-card px-4 py-3 text-sm font-bold text-brand-ink shadow-card animate-float">
              <div className="text-brand-red text-xs uppercase tracking-wider">Topper</div>
              99.87 %ile MH-CET
            </div>
            <div className="absolute -right-4 bottom-16 rounded-2xl bg-brand-yellow px-4 py-3 text-sm font-bold text-brand-ink shadow-yellow animate-float" style={{ animationDelay: "1.2s" }}>
              {slide.badge}
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === idx ? "w-10 bg-gradient-brand" : "w-4 bg-white/40 hover:bg-white/70",
            )}
          />
        ))}
      </div>
    </section>
  );
}
