"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PipelineDiagram } from "@/components/ui/PipelineDiagram";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SECTION_IDS } from "@/data/constants";

export function ProcessSection({ data }) {
  return (
    <section id={SECTION_IDS.process}>
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title={data.heading}
            description={data.description}
            rubricLabel={data.rubricLabel}
          />
        </AnimatedSection>

        <div className="max-w-3xl mt-16">
          <PipelineDiagram steps={data.steps} />
        </div>
      </div>
    </section>
  );
}
