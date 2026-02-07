"use client";
import { AnimatedSection } from "./AnimatedSection";

export function MetricFormula({ formula }) {
  return (
    <AnimatedSection>
      <div className="glass-card p-8">
        {/* Main formula */}
        <div className="text-center mb-8">
          <code className="font-mono text-lg md:text-2xl text-accent-teal">
            {formula.expression}
          </code>
        </div>

        {/* Component breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formula.components.map((comp, i) => (
            <AnimatedSection key={comp.symbol} delay={i * 0.1}>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background-secondary/50">
                <span className="font-mono text-accent-amber text-sm font-bold flex-shrink-0">
                  w={comp.weight}
                </span>
                <div>
                  <div className="font-mono text-foreground text-sm mb-1">
                    {comp.symbol}
                  </div>
                  <div className="text-foreground-tertiary text-xs leading-relaxed">
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
