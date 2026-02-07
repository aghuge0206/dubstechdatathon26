"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InsightCard } from "@/components/ui/InsightCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SECTION_IDS } from "@/data/constants";

export function InsightsSection({ data }) {
  return (
    <section id={SECTION_IDS.insights}>
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title={data.heading}
            rubricLabel={data.rubricLabel}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.cards.map((card, i) => (
            <InsightCard
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
