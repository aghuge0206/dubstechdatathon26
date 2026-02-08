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
          <div className="max-w-3xl space-y-5 text-lg text-foreground-secondary leading-relaxed">
            <p>
              Millions of Americans can’t afford the care that they need. They skip medications, delay getting medical care, and go without mental health treatment, not because these services don’t exist, but because <span className="text-foreground font-medium">cost stands in the way</span>.
            </p>
            <p>
              But these barriers are not equal for everyone: depending on your age, race, gender, income, disability status, or sexual orientation, the gap between needing care and getting it can be significantly different.
            </p>
            <p>
              Using data from the National Health Interview Survey (NHIS), we built a <span className="text-red-600 font-semibold">Care Gap Risk Score</span> that ranks demographic groups by how strongly cost prevents them from receiving care. We focused on the 2024 survey year to capture the current healthcare landscape and answer three core questions:
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="card-secondary mt-10 max-w-4xl text-left">
            <ol className="grid md:grid-cols-3 gap-6 text-slate-600">
              <li className="flex flex-col gap-2">
                <span className="text-red-600 font-bold font-mono text-xs uppercase tracking-widest">Question 01</span>
                <span className="text-sm font-medium text-foreground">Which subgroups experience the greatest cost barriers to care?</span>
              </li>
              <li className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                <span className="text-red-600 font-bold font-mono text-xs uppercase tracking-widest">Question 02</span>
                <span className="text-sm font-medium text-foreground">How do those barriers differ across medical, mental health, and medication needs?</span>
              </li>
              <li className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                <span className="text-red-600 font-bold font-mono text-xs uppercase tracking-widest">Question 03</span>
                <span className="text-sm font-medium text-foreground">Where should resources to address these issues be directed first?</span>
              </li>
            </ol>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
