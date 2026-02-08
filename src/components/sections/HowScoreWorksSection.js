"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/data/constants";

const STEPS = [
  {
    number: 1,
    title: "Normalize",
    description: "Each metric (medical, mental health, medication) is rescaled to a 0\u20131 range using min-max normalization: (value \u2212 min) / (max \u2212 min). This makes the three metrics directly comparable regardless of their different ranges.",
  },
  {
    number: 2,
    title: "Combine",
    description: "The three normalized values are summed with equal weights (1:1:1) to produce a single composite score ranging from 0-3, where 0 indicates the lowest healthcare risk and 3 the highest risk. Equal weighting was chosen because the NHIS data provides no empirical basis to prioritize one barrier dimension over another.",
  },
  {
    number: 3,
    title: "Rank",
    description: "All 76 subgroups are sorted from highest to lowest composite score. A higher score indicates a greater barrier to care.",
  },
];

export function HowScoreWorksSection() {
  return (
    <section id={SECTION_IDS.methodology} className="bg-background-secondary border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
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
            <span className="px-3 py-1 bg-red-50 text-red-700 rounded font-medium italic">risk score</span>
            <span>&rarr;</span>
            <span className="px-3 py-1 bg-slate-800 text-white rounded">rank</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          {/* Worked Example */}
          <div className="mt-10 bg-white border border-slate-200 rounded-lg p-6 max-w-3xl mx-auto">
            <h4 className="font-serif text-base text-foreground mb-4">
              Worked Example: Bisexual Subgroup (Rank #1)
            </h4>
            <div className="font-mono text-xs space-y-2">
              <div className="flex flex-wrap gap-4">
                <div className="bg-slate-50 rounded p-3 flex-1 min-w-[200px]">
                  <p className="text-foreground-tertiary mb-1">Medical: 20.1%</p>
                  <p className="text-foreground">(20.1 − 1.2) ÷ (25.0 − 1.2) = <span className="text-red-600 font-bold">0.79</span></p>
                </div>
                <div className="bg-slate-50 rounded p-3 flex-1 min-w-[200px]">
                  <p className="text-foreground-tertiary mb-1">Mental: 28.5%</p>
                  <p className="text-foreground">(28.5 − 0.5) ÷ (28.5 − 0.5) = <span className="text-red-600 font-bold">1.00</span></p>
                </div>
                <div className="bg-slate-50 rounded p-3 flex-1 min-w-[200px]">
                  <p className="text-foreground-tertiary mb-1">Medication: 19.7%</p>
                  <p className="text-foreground">(19.7 − 1.4) ÷ (25.8 − 1.4) = <span className="text-red-600 font-bold">0.75</span></p>
                </div>
              </div>
              <div className="bg-red-50 rounded p-3 text-center border border-red-100">
                <span className="text-foreground-secondary">Risk Score = </span>
                <span className="text-red-600">0.79 + 1.00 + 0.75 = </span>
                <span className="text-red-700 font-bold text-sm">2.54</span>
              </div>
            </div>
            <p className="text-[10px] text-foreground-tertiary mt-3">
              Min/max values derived from the full dataset: Medical (1.2%–25.0%), Mental (0.5%–28.5%), Medication (1.4%–25.8%).
            </p>
          </div>

          <div className="mt-8 space-y-4 max-w-2xl mx-auto text-center">
            <p className="text-sm font-medium text-slate-600 italic">
              A risk score of 0 means a subgroup had the lowest value across all three indicators. A score near 3 means it had the highest. Most subgroups fall between 0.2 and 0.8.
            </p>
            <p className="text-[10px] text-foreground-tertiary uppercase tracking-wider">
              Equal weighting assumes each barrier dimension contributes equally to overall care access risk.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
