"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RubricTag } from "@/components/ui/RubricTag";
import { RankingsTable } from "@/components/ui/RankingsTable";
import { RiskScoreChart } from "@/components/charts/RiskScoreChart";
import { SECTION_IDS } from "@/data/constants";

export function RankingsSection({ data }) {
  // Show top 15 in table, top 10 in chart
  const topForTable = data.slice(0, 15);
  const topForChart = data.slice(0, 10);

  return (
    <section id={SECTION_IDS.rankings} className="bg-white border-b border-slate-200">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <RubricTag label="Entities Ranked" />
          </div>
          <SectionHeading
            title="Who Has the Worst Access?"
            description={`All ${data.length} demographic subgroups ranked by Care Gap Risk Score. Higher = worse access.`}
          />
        </AnimatedSection>

        {/* Chart */}
        <AnimatedSection delay={0.1}>
          <div className="mt-8 mb-12">
            <h3 className="font-serif text-lg text-foreground mb-4">Top 10 Highest-Risk Groups</h3>
            <RiskScoreChart data={topForChart} />
          </div>
        </AnimatedSection>

        {/* Table */}
        <AnimatedSection delay={0.2}>
          <h3 className="font-serif text-lg text-foreground mb-4">Full Rankings (Top 15)</h3>
          <RankingsTable data={topForTable} />
        </AnimatedSection>
      </div>
    </section>
  );
}
