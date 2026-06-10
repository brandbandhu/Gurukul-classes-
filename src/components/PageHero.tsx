import { ChevronRight } from "lucide-react";
import { AppLink } from "@/components/AppLink";

interface Crumb { label: string; to?: string }

export function PageHero({
  title, subtitle, crumbs = [],
}: { title: string; subtitle?: string; crumbs?: Crumb[] }) {
  return (
    <section className="relative overflow-hidden bg-gradient-dark text-white py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-yellow/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-red/30 blur-3xl" />
      <div className="container relative mx-auto px-4 text-center">
        {crumbs.length > 0 && (
          <nav className="mb-4 flex justify-center items-center gap-1 text-xs text-white/70">
            <AppLink to="/" className="hover:text-brand-yellow">Home</AppLink>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" />
                {c.to ? <AppLink to={c.to} className="hover:text-brand-yellow">{c.label}</AppLink> : <span className="text-brand-yellow">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl mx-auto text-white/80 text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
