import { AppLink } from "@/components/AppLink";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Course } from "@/data/site";

const toneBg: Record<Course["tone"], string> = {
  red: "from-brand-red/10 to-brand-orange/10",
  yellow: "from-brand-yellow/20 to-brand-orange/10",
  orange: "from-brand-orange/15 to-brand-yellow/15",
  deep: "from-brand-deep/10 to-brand-red/10",
};

const toneIcon: Record<Course["tone"], string> = {
  red: "bg-gradient-brand text-white",
  yellow: "bg-brand-yellow text-brand-ink",
  orange: "bg-brand-orange text-white",
  deep: "bg-brand-deep text-white",
};

export function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;
  return (
    <AppLink
      to={course.path}
      className={cn(
        "group relative flex flex-col rounded-3xl border border-border bg-white p-6 shadow-soft transition-all duration-300",
        "hover:-translate-y-2 hover:shadow-glow hover:border-brand-red/30",
      )}
    >
      <div className={cn("absolute inset-0 rounded-3xl opacity-0 bg-gradient-to-br transition-opacity duration-300 group-hover:opacity-100", toneBg[course.tone])} />
      <div className="relative flex flex-col h-full">
        <div className="flex items-center justify-between">
          <div className={cn("flex h-14 w-14 items-center justify-center rounded-2xl shadow-soft transition-transform group-hover:scale-110 group-hover:rotate-6", toneIcon[course.tone])}>
            <Icon className="h-7 w-7" />
          </div>
          <span className="rounded-full bg-brand-light px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-red uppercase">
            {course.category}
          </span>
        </div>
        <h3 className="mt-5 text-xl font-bold text-brand-ink">{course.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{course.short}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {course.subjects.map((s) => (
            <span key={s} className="rounded-full bg-brand-cream px-2.5 py-1 text-[11px] font-medium text-brand-ink/70">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
          <span className="text-sm font-semibold text-brand-red">View Details</span>
          <ArrowRight className="h-4 w-4 text-brand-red transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </AppLink>
  );
}
