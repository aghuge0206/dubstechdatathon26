"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { KeyFindingCard } from "@/components/ui/KeyFindingCard";
import { RubricTag } from "@/components/ui/RubricTag";
import { SECTION_IDS } from "@/data/constants";

export function KeyFindingSection({ data }) {
  return (
    <section id={SECTION_IDS.keyFinding} className="bg-white border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title="Key Finding"
            description="The subgroup with the highest composite Care Gap Risk Score."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-8">
            <KeyFindingCard topGroup={data[0]} />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-4">
            <RubricTag label="Metric Created" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
