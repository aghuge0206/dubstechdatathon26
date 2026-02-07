"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MetricFormula } from "@/components/ui/MetricFormula";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ChartWrapper } from "@/components/charts/ChartWrapper";
import { MetricDistributionChart } from "@/components/charts/MetricDistributionChart";
import { RubricTag } from "@/components/ui/RubricTag";
import { SECTION_IDS } from "@/data/constants";

export function MetricSection({ data }) {
  return (
    <section id={SECTION_IDS.metric}>
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title={data.heading}
            description={data.description}
            rubricLabel={data.rubricLabel}
          />
          {data.rubricLabel2 && (
            <RubricTag label={data.rubricLabel2} className="mt-2" />
          )}
        </AnimatedSection>

        {/* Formula */}
        <div className="mb-12">
          <MetricFormula formula={data.formula} />
        </div>

        {/* Interpretation Scale */}
        <AnimatedSection>
          <div className="glass-card p-6 mb-12">
            <h3 className="font-serif text-xl text-foreground mb-2">
              {data.interpretation.title}
            </h3>
            <p className="text-foreground-tertiary text-sm mb-4">
              {data.interpretation.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {data.interpretation.scale.map((level) => (
                <div key={level.label} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: level.color }}
                  />
                  <span className="text-sm text-foreground-secondary">
                    0-{level.max}: {level.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Distribution Chart */}
        <AnimatedSection>
          <ChartWrapper title={data.distribution.title} className="glass-card p-6">
            <MetricDistributionChart
              data={data.distribution.data}
              thresholds={data.interpretation.scale}
            />
          </ChartWrapper>
        </AnimatedSection>
      </div>
    </section>
  );
}
