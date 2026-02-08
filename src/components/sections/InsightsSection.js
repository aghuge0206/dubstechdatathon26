"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/data/constants";

const INSIGHTS = [
  {
    title: "Sexual orientation and insurance status drive more risk than age, race, or gender",
    body: "The two highest-scoring subgroups are defined by sexual orientation (Bisexual, 2.54) and insurance status (Uninsured, 2.47), suggesting that identity and coverage gaps may increase healthcare barriers more severely than factors that typically dominate health equity discussions.",
  },
  {
    title: "Insurance status drives medical and medication gaps disproportionately",
    body: "Uninsured adults rank #2 with a composite score of 2.47, posting the highest unmet medical (25.0%) and medication (25.8%) rates of any subgroup. Their mental health gap (13.6%) is comparatively lower, indicating barriers concentrate in cost-driven care domains.",
  },
  {
    title: "Medication affordability is the most common national barrier",
    body: "At 7.8%, medication affordability is the highest national average of the three indicators, exceeding both unmet medical care (7.4%) and unmet mental health care (5.9%). This makes prescription costs the single most widespread barrier to care across all demographics.",
  },
];

export function InsightsSection() {
  return (
    <section id={SECTION_IDS.insights} className="bg-background-secondary border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title="What This Tells Us"
            description="Patterns emerging from composite risk score analysis of 76 demographic subgroups."
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
