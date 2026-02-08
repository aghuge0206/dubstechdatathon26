"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MetricFormula } from "@/components/ui/MetricFormula";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ChartWrapper } from "@/components/charts/ChartWrapper";
import { MetricDistributionChart } from "@/components/charts/MetricDistributionChart";
import { SECTION_IDS } from "@/data/constants";

export function MetricSection({ data }) {
  return (
    <section id={SECTION_IDS.metric}>
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            title={data.heading}
            description={data.description}
          />
        </AnimatedSection>

        {/* Formula */}
        <div className="mb-12">
          <MetricFormula formula={data.formula} />
        </div>

        {/* Interpretation Scale */}
        <AnimatedSection>
          <div className="card-secondary p-8 mb-12">
            <h3 className="font-serif text-xl text-foreground mb-3">
              {data.interpretation.title}
            </h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              {data.interpretation.description}
            </p>
            <div className="flex flex-wrap gap-6">
              {data.interpretation.scale.map((level) => (
                <div key={level.label} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded shadow-sm border border-black/5"
                    style={{ backgroundColor: level.color }}
                  />
                  <span className="text-sm font-medium text-slate-600">
                    0-{level.max}: <span className="text-foreground">{level.label}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Distribution Chart */}
        <AnimatedSection>
          <ChartWrapper title={data.distribution.title} className="card-secondary p-8">
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
