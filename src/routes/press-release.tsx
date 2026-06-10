import { createFileRoute } from "@tanstack/react-router";
import { Newspaper } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { PRESS } from "@/data/site";

export const Route = createFileRoute("/press-release")({
  head: () => ({
    meta: [
      { title: "Press Release — Gurukul Science Classes" },
      { name: "description", content: "Press releases, announcements and news from Gurukul Science Classes." },
      { property: "og:title", content: "Press Release — Gurukul Science Classes" },
      { property: "og:url", content: "/press-release" },
    ],
    links: [{ rel: "canonical", href: "/press-release" }],
  }),
  component: Press,
});

function Press() {
  return (
    <>
      <PageHero title="Press & Announcements" subtitle="Recent news, awards and updates from our campuses." crumbs={[{ label: "Press Release" }]} />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="News" title="Latest from Gurukul" />
          <div className="max-w-3xl mx-auto space-y-6">
            {PRESS.map((p) => (
              <article key={p.title} className="group flex flex-col md:flex-row gap-6 rounded-3xl border border-border bg-white p-6 md:p-8 shadow-soft hover:shadow-glow transition-all">
                <div className="md:w-32 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <Newspaper className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-brand-red uppercase">{p.date}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-ink group-hover:text-brand-red transition-colors">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{p.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}