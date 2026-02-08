"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/data/constants";

export function IntroductionSection() {
  return (
    <section id={SECTION_IDS.introduction} className="bg-white border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading title="Introduction" centered={false} />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-foreground-secondary mt-8 max-w-4xl text-lg leading-relaxed">
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
          <div className="card-secondary mt-10 max-w-4xl text-left">
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-red-600 mb-4 font-bold">
              Our Research Questions
            </p>
            <ol className="grid md:grid-cols-3 gap-6 text-slate-600">
              <li className="flex flex-col gap-2">
                <span className="text-red-600 font-bold font-mono">01.</span>
                <span className="text-sm font-medium">Where does care break down, and which populations are at risk?</span>
              </li>
              <li className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                <span className="text-red-600 font-bold font-mono">02.</span>
                <span className="text-sm font-medium">How do barriers differ by age, gender, income, and other demographics?</span>
              </li>
              <li className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                <span className="text-red-600 font-bold font-mono">03.</span>
                <span className="text-sm font-medium">Which subgroups have the highest rates of delayed or unmet care?</span>
              </li>
            </ol>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
