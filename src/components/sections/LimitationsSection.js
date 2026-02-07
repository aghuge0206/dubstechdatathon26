"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/data/constants";

const LIMITATIONS = [
  "Survey data reflects self-reported access barriers, not clinical records.",
  "Correlation does not imply causation high-risk groups may share multiple overlapping factors.",
  "Aggregated subgroup data may mask within-group variation.",
  "The NHIS sampling methodology may under-represent certain populations.",
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

        <AnimatedSection delay={0.1}>
          <div className="card mt-6">
            <ul className="space-y-3">
              {LIMITATIONS.map((limitation, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground-secondary">
                  <span className="text-foreground-tertiary mt-0.5">•</span>
                  <span>{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
