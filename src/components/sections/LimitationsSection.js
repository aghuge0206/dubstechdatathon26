"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/data/constants";

const LIMITATIONS = [
  {
    title: "Self-reported data",
    body: "NHIS responses reflect participant recall and willingness to disclose, introducing potential recall and social desirability bias.",
  },
  {
    title: "Individual variations within groups",
    body: "Subgroup averages mask individual variation. Not every member of a high-risk group experiences the same barriers.",
  },
  {
    title: "Cost barriers only",
    body: "All three indicators measure cost-related barriers. Non-cost barriers like transportation, language access, wait times, and discrimination are not captured in this dataset.",
  },
  {
    title: "Correlation, not causation",
    body: "High-risk subgroups may share overlapping demographic factors. The composite score identifies associations, not causal mechanisms.",
  },
  {
    title: "Equal weighting assumption",
    body: "The 1:1:1 weighting treats all three barrier dimensions as equally important. Alternative schemes could produce different rankings.",
  },
  {
    title: "Cross-sectional snapshot",
    body: "This analysis uses a single survey period. It cannot detect whether disparities are improving, worsening, or stable over time.",
  },
];

export function LimitationsSection() {
  return (
    <section id={SECTION_IDS.limitations} className="bg-background-secondary border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title="Limitations & Honesty"
            description="What this analysis cannot tell you."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {LIMITATIONS.map((limitation, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="card h-full">
                <h3 className="font-serif text-base text-foreground mb-2">{limitation.title}</h3>
                <p className="text-foreground-secondary text-sm">{limitation.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
