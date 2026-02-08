"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/data/constants";

const NEXT_STEPS = [
  {
    title: "Weight sensitivity analysis",
    description:
      "We experimented with alternative weighting schemes to test ranking stability. Future work could include literature research to determine whether empirical evidence justifies weighting certain barriers more heavily than others.",
  },
  {
    title: "Cross-demographic analysis",
    description:
      "Cross demographic categories (e.g., uninsured + disability) to identify compounding risk factors that single-axis analysis cannot capture.",
  },
  {
    title: "Survey across multiple years",
    description:
      "Compare NHIS data across multiple survey years to detect whether care gap disparities are widening, narrowing, or stable over time.",
  },
  {
    title: "Validate across external data sources",
    description:
      "Cross-reference NHIS rankings against other nationwide medical surveys like BRFSS to test whether the same subgroups consistently appear at the top, increasing confidence in our findings.",
  },
];

export function NextStepsSection() {
  return (
    <section id={SECTION_IDS.nextSteps} className="bg-white border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title="Next Steps"
            description="Directions for extending this analysis."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {NEXT_STEPS.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="card h-full">
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mb-4">
                  <span className="font-mono font-bold text-sm">{i + 1}</span>
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground-secondary text-sm">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
