import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { ResultCard } from "@/components/ResultCard";
import { StatsCounter } from "@/components/StatsCounter";
import { RESULTS } from "@/data/site";

export function Results() {
  const grouped = ["NEET", "JEE", "MH-CET", "HSC"];
  return (
    <>
      <PageHero
        title="Our Results"
        subtitle="A snapshot of recent toppers across NEET, JEE, MH-CET and HSC Science."
        crumbs={[{ label: "Results" }]}
      />
      <StatsCounter />
      <section className="py-16 md:py-24 mt-12">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Toppers" title="Recent Result Showcase" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULTS.map((result) => <ResultCard key={result.name} result={result} />)}
          </div>
        </div>
      </section>
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="By Exam" title="Performance highlights" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {grouped.map((group, index) => (
              <div key={group} className="rounded-3xl border border-border bg-white p-6 shadow-soft text-center">
                <p className="text-xs font-bold tracking-widest text-brand-red uppercase">{group}</p>
                <p className="mt-3 text-4xl font-extrabold text-gradient-brand">{[97, 92, 95, 89][index]}%</p>
                <p className="mt-1 text-sm text-muted-foreground">students scoring above target percentile</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
