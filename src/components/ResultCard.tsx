import { Award } from "lucide-react";

interface Result {
  name: string;
  exam: string;
  score: string;
  college: string;
}

export function ResultCard({ result }: { result: Result }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border bg-white p-6 text-center shadow-soft transition-all hover:shadow-glow hover:-translate-y-1">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow transition-transform group-hover:scale-110">
        <Award className="h-7 w-7" />
      </div>
      <h4 className="mt-4 text-lg font-bold text-brand-ink">{result.name}</h4>
      <p className="text-xs font-semibold tracking-wide text-brand-red uppercase">{result.exam}</p>
      <p className="mt-3 text-2xl font-extrabold text-gradient-brand">{result.score}</p>
      <p className="mt-1 text-xs text-muted-foreground">{result.college}</p>
    </div>
  );
}