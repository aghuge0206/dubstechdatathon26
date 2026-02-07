"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RankingsTable } from "@/components/ui/RankingsTable";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ChartWrapper } from "@/components/charts/ChartWrapper";
import { RankingsBarChart } from "@/components/charts/RankingsBarChart";
import { SECTION_IDS } from "@/data/constants";

export function RankingsSection({ data }) {
  return (
    <section id={SECTION_IDS.rankings} className="bg-background-secondary">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title={data.heading}
            description={data.description}
            rubricLabel={data.rubricLabel}
          />
        </AnimatedSection>

        {/* Table */}
        <div className="mb-12">
          <RankingsTable data={data.data} />
        </div>

        {/* Bar Chart */}
        <AnimatedSection>
          <ChartWrapper title="HEGI Score by Demographic Group" className="glass-card p-6">
            <RankingsBarChart
              data={data.data}
              thresholds={data.severityThresholds}
            />
          </ChartWrapper>
        </AnimatedSection>
      </div>
    </section>
  );
}
