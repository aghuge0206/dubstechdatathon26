"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MetricDistributionChart } from "@/components/charts/MetricDistributionChart";
import { SensitivityTable } from "@/components/ui/SensitivityTable";
import { SECTION_IDS } from "@/data/constants";

export function ExplorationSection({ data }) {
  return (
    <section id="exploration" className="bg-white border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title="Exploring the Data"
            description="Before building the composite score, we examined how each metric distributes across subgroups and tested whether our conclusions hold under different assumptions."
          />
        </AnimatedSection>

        {/* Metric Distributions */}
        <AnimatedSection delay={0.1}>
          <h3 className="font-serif text-lg text-foreground mb-4 mt-8">
            How do the three metrics distribute across groups?
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <MetricDistributionChart
              data={data}
              dataKey="medical_unmet_pct"
              title="Unmet Medical Needs"
              color="#F87171"
            />
            <MetricDistributionChart
              data={data}
              dataKey="mental_unmet_pct"
              title="Unmet Mental Health Needs"
              color="#A78BFA"
            />
            <MetricDistributionChart
              data={data}
              dataKey="medication_unmet_pct"
              title="Unmet Medication Needs"
              color="#34D399"
            />
          </div>
        </AnimatedSection>

        {/* Sensitivity Analysis */}
        <AnimatedSection delay={0.2}>
          <h3 className="font-serif text-lg text-foreground mb-4 mt-10">
            Are the rankings sensitive to weighting changes?
          </h3>
          <SensitivityTable data={data} />
        </AnimatedSection>
      </div>
    </section>
  );
}
