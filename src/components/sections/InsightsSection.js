"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/data/constants";

const INSIGHTS = [
  {
    title: "Sexual orientation shows highest risk",
    body: "Bisexual adults rank #1 with the highest unmet mental health needs (28.5%) of any group, signaling a significant gap in mental health access for LGBTQ+ populations.",
  },
  {
    title: "Insurance status is a primary driver",
    body: "Uninsured adults rank #2 overall, with 25% reporting unmet medical needs more than double the population average.",
  },
  {
    title: "Disability compounds access barriers",
    body: "Adults with disabilities rank #4, facing barriers across both medical (12.8%) and mental health (11.2%) access despite higher care needs.",
  },
];

export function InsightsSection({ data }) {
  return (
    <section id={SECTION_IDS.insights} className="bg-background-secondary border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title="What This Tells Us"
            description="Key patterns from the Care Gap Risk Score rankings."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {INSIGHTS.map((insight, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="card h-full">
                <h3 className="font-serif text-lg text-foreground mb-3">
                  {insight.title}
                </h3>
                <p className="text-foreground-secondary text-sm">
                  {insight.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
