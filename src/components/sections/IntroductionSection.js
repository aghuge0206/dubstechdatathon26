"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/data/constants";

export function IntroductionSection() {
  return (
    <section id={SECTION_IDS.introduction} className="bg-white border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading title="Introduction" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-foreground-secondary mt-6 max-w-3xl">
            The National Health Interview Survey (NHIS) is a nationally
            representative household survey conducted by the CDC&apos;s National
            Center for Health Statistics. It collects data on health status,
            healthcare access, and health behaviors across the U.S. adult
            population. Our analysis uses the Access to Care dataset, which
            captures self-reported barriers across medical, mental health, and
            medication domains.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="card mt-6 max-w-3xl">
            <ol className="list-decimal list-inside space-y-3 text-foreground-secondary">
              <li>
                Where does care break down, and which populations are at risk?
              </li>
              <li>
                How do barriers differ by age, gender, income, and other
                demographics?
              </li>
              <li>
                Which subgroups have the highest rates of delayed or unmet care?
              </li>
            </ol>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
