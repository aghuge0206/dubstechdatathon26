"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RubricTag } from "@/components/ui/RubricTag";
import { SECTION_IDS } from "@/data/constants";

const STEPS = [
  {
    number: 1,
    title: "Normalize",
    description: "Each metric (medical, mental health, medication) is rescaled to a 0\u20131 range using min-max normalization: (value \u2212 min) / (max \u2212 min). This makes the three metrics directly comparable regardless of their original scales.",
  },
  {
    number: 2,
    title: "Combine",
    description: "The three normalized values are summed with equal weights (1:1:1) to produce a single composite score. Equal weighting was chosen because the NHIS data provides no empirical basis to prioritize one barrier dimension over another.",
  },
  {
    number: 3,
    title: "Rank",
    description: "All 76 subgroups are sorted from highest to lowest composite score. Scores range from 0.004 (lowest risk) to 2.544 (highest risk). A higher score indicates greater compounding barriers to care.",
  },
];

export function HowScoreWorksSection() {
  return (
    <section id={SECTION_IDS.methodology} className="bg-background-secondary border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <RubricTag label="Process Explained" />
            <RubricTag label="Metric Described" />
          </div>
          <SectionHeading
            title="How the Score Works"
            description="Three steps to create a single, actionable ranking."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="card h-full">
                <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mb-4">
                  <span className="font-mono font-bold">{step.number}</span>
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground-secondary text-sm">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Visual pipeline */}
        <AnimatedSection delay={0.4}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm font-mono text-foreground-tertiary">
            <span className="px-3 py-1 bg-slate-100 rounded">medical</span>
            <span>+</span>
            <span className="px-3 py-1 bg-slate-100 rounded">mental</span>
            <span>+</span>
            <span className="px-3 py-1 bg-slate-100 rounded">medication</span>
            <span>&rarr;</span>
            <span className="px-3 py-1 bg-red-50 text-red-700 rounded font-medium">risk_score</span>
            <span>&rarr;</span>
            <span className="px-3 py-1 bg-slate-800 text-white rounded">rank</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <p className="mt-6 text-sm text-foreground-tertiary text-center max-w-2xl mx-auto">
            Equal weighting assumes each barrier dimension contributes equally to overall care access risk.
            Sensitivity analysis with alternative weighting schemes is noted as future work.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
