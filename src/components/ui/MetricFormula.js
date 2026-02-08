"use client";
import { AnimatedSection } from "./AnimatedSection";

export function MetricFormula({ formula }) {
  return (
    <AnimatedSection>
      <div className="card-secondary p-10">
        {/* Main formula */}
        <div className="text-center mb-10">
          <code className="font-mono text-xl md:text-3xl text-red-600 bg-red-50/50 px-6 py-3 rounded-lg border border-red-100/50">
            {formula.expression}
          </code>
        </div>

        {/* Component breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formula.components.map((comp, i) => (
            <AnimatedSection key={comp.symbol} delay={i * 0.1}>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100/50">
                <span className="font-mono text-red-600 text-sm font-bold flex-shrink-0 bg-white px-2 py-0.5 rounded shadow-sm">
                  w={comp.weight}
                </span>
                <div>
                  <div className="font-mono text-foreground font-semibold text-sm mb-1.5 uppercase tracking-wide">
                    {comp.symbol}
                  </div>
                  <div className="text-slate-500 text-xs leading-relaxed font-medium">
                    {comp.description}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
