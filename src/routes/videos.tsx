import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { VIDEOS } from "@/data/site";
import heroClassroom from "@/assets/hero-classroom.jpg";
import heroStudents from "@/assets/hero-students.jpg";
import heroStudy from "@/assets/hero-study.jpg";
import aboutTeaching from "@/assets/about-teaching.jpg";

const COVERS = [heroClassroom, heroStudents, heroStudy, aboutTeaching];

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos — Gurukul Science Classes" },
      { name: "description", content: "Campus tours, topper talks and faculty videos from Gurukul Science Classes." },
      { property: "og:title", content: "Videos — Gurukul Science Classes" },
      { property: "og:url", content: "/videos" },
    ],
    links: [{ rel: "canonical", href: "/videos" }],
  }),
  component: Videos,
});

function Videos() {
  return (
    <>
      <PageHero title="Video Library" subtitle="Watch our classrooms, toppers and campus stories." crumbs={[{ label: "Videos" }]} />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Watch" title="Stories from Gurukul" />
          <div className="grid sm:grid-cols-2 gap-8">
            {VIDEOS.map((v, i) => (
              <div key={v.title} className="group rounded-3xl overflow-hidden border border-border bg-white shadow-soft hover:shadow-glow transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <img src={COVERS[i % COVERS.length]} alt={v.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-brand-ink/40 flex items-center justify-center">
                    <a href={`https://www.youtube.com/watch?v=${v.youtubeId}`} target="_blank" rel="noopener noreferrer" aria-label={`Play ${v.title}`} className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand shadow-glow group-hover:scale-110 transition-transform">
                      <PlayCircle className="h-8 w-8 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-brand-ink">{v.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}