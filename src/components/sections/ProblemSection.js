"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { HighlightCard } from "@/components/ui/HighlightCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SECTION_IDS } from "@/data/constants";

export function ProblemSection({ data }) {
  return (
    <section id={SECTION_IDS.problem} className="bg-background-secondary">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title={data.heading}
            description={data.description}
            rubricLabel={data.rubricLabel}
          />
        </AnimatedSection>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {data.stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.highlightCards.map((card, i) => (
            <HighlightCard
              key={card.title}
              title={card.title}
              stat={card.stat}
              description={card.description}
              color={card.color}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
