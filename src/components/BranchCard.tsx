import { MapPin, Phone } from "lucide-react";
import type { Branch } from "@/data/site";

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-brand opacity-10 transition-transform group-hover:scale-150" />
      <div className="relative">
        {branch.badge && (
          <span className="inline-flex rounded-full bg-gradient-brand px-3 py-0.5 text-[10px] font-bold tracking-widest text-white uppercase">
            {branch.badge}
          </span>
        )}
        <h3 className="mt-3 text-lg font-bold text-brand-ink">{branch.name}</h3>
        <p className="text-xs font-semibold tracking-wide text-brand-red uppercase">{branch.area}</p>
        <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brand-orange" />
          {branch.address}
        </p>
        <a
          href={`tel:${branch.phoneRaw}`}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand-red hover:bg-gradient-brand hover:text-white transition-colors"
        >
          <Phone className="h-4 w-4" /> {branch.phone}
        </a>
      </div>
    </div>
  );
}