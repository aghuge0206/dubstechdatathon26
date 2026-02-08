"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { KeyFindingCard } from "@/components/ui/KeyFindingCard";
import { SECTION_IDS } from "@/data/constants";

const SUMMARIES = {
  "Bisexual": "All three barriers are over 2 times the national average, with unmet mental health care needs reaching nearly 5 times the national baseline.",
  "Uninsured": "Lack of insurance drives medical and medication barriers to over 3 times their respective national averages.",
  "Black and White": "Medication access is the primary driver of this group's risk, at over 2 times the national average of 7.8%."
};

export function KeyFindingSection({ data }) {
  const topThree = data.slice(0, 3).map(group => ({
    ...group,
    summary: SUMMARIES[group.subgroup] || `This group faces significant barriers across multiple care dimensions.`
  }));

  return (
    <section id={SECTION_IDS.keyFinding} className="bg-white border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title="The Highest-Risk Groups"
            description="The three groups facing barriers farthest beyond the national average."
          />
        </AnimatedSection>

        <div className="space-y-6 mt-8">
          {topThree.map((group, i) => (
            <AnimatedSection key={group.subgroup} delay={0.1 * (i + 1)}>
              <KeyFindingCard 
                topGroup={group} 
                rank={i + 1} 
                customSummary={group.summary}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
