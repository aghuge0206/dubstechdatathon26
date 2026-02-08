"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/data/constants";

const INSIGHTS = [
  {
    title: "Sexual orientation is the strongest predictor of compounding barriers",
    body: "Bisexual adults rank #1 with a composite score of 2.54, showing severe gaps across all three dimensions: 28.5% unmet mental health, 20.1% unmet medical, and 19.7% unmet medication needs. Unlike most high-risk groups that spike on a single metric, this subgroup faces barriers across the board.",
  },
  {
    title: "Insurance status drives medical and medication gaps disproportionately",
    body: "Uninsured adults rank #2 with a composite score of 2.47, posting the highest unmet medical (25.0%) and medication (25.8%) rates of any subgroup. Their mental health gap (13.6%) is comparatively lower, indicating barriers concentrate in cost-driven care domains.",
  },
  {
    title: "Disability creates persistent multi-dimensional barriers",
    body: "Adults with disabilities rank #4 with a composite score of 1.38, showing elevated gaps across medical (12.8%), mental health (11.2%), and medication (13.5%). The consistency across all three dimensions suggests systemic rather than isolated barriers to care.",
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
