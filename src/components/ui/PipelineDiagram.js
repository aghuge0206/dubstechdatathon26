"use client";
import { AnimatedSection } from "./AnimatedSection";

export function PipelineDiagram({ steps }) {
  return (
    <div className="relative">
      {/* Vertical line connecting steps */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-teal/50 via-accent-amber/50 to-accent-coral/50 hidden md:block" />

      <div className="space-y-8">
        {steps.map((step, i) => (
          <AnimatedSection key={step.number} delay={i * 0.1}>
            <div className="flex gap-6 items-start">
              {/* Step number circle */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-background-tertiary border border-accent-teal/30 flex items-center justify-center">
                <span className="font-mono text-accent-teal text-sm font-bold">
                  {String(step.number).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 glass-card p-5">
                <h3 className="font-serif text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground-secondary text-sm leading-relaxed mb-3">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 text-xs font-mono bg-background-secondary rounded border border-white/10 text-foreground-tertiary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
