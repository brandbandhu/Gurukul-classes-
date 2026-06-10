import { useEffect, useRef, useState } from "react";
import { CalendarCheck, GraduationCap, MapPin, Trophy, type LucideIcon } from "lucide-react";
import { STATS } from "@/data/site";

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return n;
}

const STAT_ICONS: LucideIcon[] = [Trophy, GraduationCap, CalendarCheck, MapPin];

function StatItem({
  value,
  suffix,
  label,
  start,
  Icon,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
  Icon: LucideIcon;
}) {
  const n = useCountUp(value, start);
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-brand-red/10 bg-white px-4 py-5 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-gradient-brand opacity-80" />
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-light text-brand-red transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-3 text-4xl font-extrabold leading-none text-gradient-brand md:text-5xl">
        <span>{n.toLocaleString()}</span>
        <span>{suffix}</span>
      </div>
      <div className="mt-3 text-xs font-extrabold uppercase tracking-wide text-brand-ink/70 md:text-sm">{label}</div>
    </div>
  );
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} className="relative -mt-14 z-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white p-3 shadow-[0_24px_70px_-28px_rgba(26,26,26,0.35)] md:p-4">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-brand" />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {STATS.map((s, index) => (
              <StatItem key={s.label} {...s} start={start} Icon={STAT_ICONS[index]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
