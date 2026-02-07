"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { PullQuote } from "@/components/ui/PullQuote";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ChartWrapper } from "@/components/charts/ChartWrapper";
import { DisparityBarChart } from "@/components/charts/DisparityBarChart";
import { TrendLineChart } from "@/components/charts/TrendLineChart";
import { DemographicHeatmap } from "@/components/charts/DemographicHeatmap";
import { SECTION_IDS } from "@/data/constants";

export function ExplorationSection({ data }) {
  return (
    <section id={SECTION_IDS.exploration} className="bg-background-secondary">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title={data.heading}
            description={data.description}
            rubricLabel={data.rubricLabel}
          />
        </AnimatedSection>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {data.stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Bar Chart */}
        <AnimatedSection>
          <ChartWrapper title={data.barChart.title} className="glass-card p-6 mb-8">
            <p className="text-foreground-tertiary text-sm mb-4">{data.barChart.description}</p>
            <DisparityBarChart data={data.barChart.data} />
          </ChartWrapper>
        </AnimatedSection>

        {/* Line Chart */}
        <AnimatedSection>
          <ChartWrapper title={data.lineChart.title} className="glass-card p-6 mb-8">
            <p className="text-foreground-tertiary text-sm mb-4">{data.lineChart.description}</p>
            <TrendLineChart series={data.lineChart.series} />
          </ChartWrapper>
        </AnimatedSection>

        {/* Pull Quote */}
        <PullQuote text={data.pullQuote.text} source={data.pullQuote.source} />

        {/* Heatmap */}
        <AnimatedSection>
          <ChartWrapper title={data.heatmap.title} className="glass-card p-6">
            <p className="text-foreground-tertiary text-sm mb-4">{data.heatmap.description}</p>
            <DemographicHeatmap
              conditions={data.heatmap.conditions}
              demographics={data.heatmap.demographics}
              values={data.heatmap.values}
            />
          </ChartWrapper>
        </AnimatedSection>
      </div>
    </section>
  );
}
