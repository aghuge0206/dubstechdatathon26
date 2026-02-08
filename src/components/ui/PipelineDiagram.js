"use client";
import { AnimatedSection } from "./AnimatedSection";

export function PipelineDiagram({ steps }) {
  return (
    <div className="relative">
      {/* Vertical line connecting steps */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-red-600 via-red-300 to-transparent hidden md:block" />

      <div className="space-y-8">
        {steps.map((step, i) => (
          <AnimatedSection key={step.number} delay={i * 0.1}>
            <div className="flex gap-6 items-start">
              {/* Step number circle */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-red-600 flex items-center justify-center shadow-lg shadow-red-100">
                <span className="font-mono text-red-600 text-sm font-bold">
                  {String(step.number).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 card-secondary p-6">
                <h3 className="font-serif text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-[10px] font-mono font-bold bg-slate-50 rounded border border-slate-100 text-slate-500 uppercase tracking-wider"
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
