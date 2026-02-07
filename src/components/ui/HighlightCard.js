"use client";
import { AnimatedSection } from "./AnimatedSection";

const colorMap = {
  teal: { border: "border-accent-teal/30", text: "text-accent-teal", bg: "bg-accent-teal/10" },
  coral: { border: "border-accent-coral/30", text: "text-accent-coral", bg: "bg-accent-coral/10" },
  amber: { border: "border-accent-amber/30", text: "text-accent-amber", bg: "bg-accent-amber/10" },
};

export function HighlightCard({ title, stat, description, color = "teal", delay = 0 }) {
  const colors = colorMap[color] || colorMap.teal;

  return (
    <AnimatedSection delay={delay}>
      <div className={`glass-card p-6 border ${colors.border}`}>
        <div className={`text-sm font-mono uppercase tracking-wider ${colors.text} mb-3`}>
          {title}
        </div>
        <div className={`text-4xl md:text-5xl font-serif ${colors.text} mb-3`}>
          {stat}
        </div>
        <p className="text-foreground-secondary text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </AnimatedSection>
  );
}
