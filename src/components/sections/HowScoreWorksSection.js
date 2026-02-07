"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RubricTag } from "@/components/ui/RubricTag";
import { SECTION_IDS } from "@/data/constants";

const STEPS = [
  {
    number: 1,
    title: "Normalize",
    description: "Convert each metric to a 0–1 scale so medical, mental health, and medication needs are comparable.",
  },
  {
    number: 2,
    title: "Combine",
    description: "Sum the normalized values into a single composite score for each demographic subgroup.",
  },
  {
    number: 3,
    title: "Rank",
    description: "Sort all 76 subgroups from highest to lowest. Higher score = greater access barriers.",
  },
];

export function HowScoreWorksSection() {
  return (
    <section id={SECTION_IDS.methodology} className="bg-background-secondary border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <RubricTag label="Process Explained" />
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
            <span>→</span>
            <span className="px-3 py-1 bg-red-50 text-red-700 rounded font-medium">risk_score</span>
            <span>→</span>
            <span className="px-3 py-1 bg-slate-800 text-white rounded">rank</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
