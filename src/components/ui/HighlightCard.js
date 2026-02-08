"use client";
import { AnimatedSection } from "./AnimatedSection";

const colorMap = {
  red: { border: "border-red-100", text: "text-red-600", bg: "bg-red-50/50" },
  slate: { border: "border-slate-100", text: "text-slate-600", bg: "bg-slate-50/50" },
};

export function HighlightCard({ title, stat, description, color = "red", delay = 0 }) {
  const colors = colorMap[color] || colorMap.red;

  return (
    <AnimatedSection delay={delay}>
      <div className={`card-secondary p-8 border-l-4 ${colors.border} ${colors.bg}`}>
        <div className={`text-xs font-mono uppercase tracking-[0.2em] ${colors.text} mb-3 font-bold`}>
          {title}
        </div>
        <div className={`text-5xl font-serif ${colors.text} mb-4`}>
          {stat}
        </div>
        <p className="text-slate-600 text-sm leading-relaxed font-medium italic">
          {description}
        </p>
      </div>
    </AnimatedSection>
  );
}
