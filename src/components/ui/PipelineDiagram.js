"use client";
import { AnimatedSection } from "./AnimatedSection";
import {
  SiPython,
  SiPandas,
  SiJupyter,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNumpy
} from "react-icons/si";
import { TbFileTypeCsv, TbChartBar } from "react-icons/tb";
import { HiChartBar } from "react-icons/hi";

// Map tool names to their icons and colors
const toolIconMap = {
  "Python": { icon: SiPython, color: "#3776AB" },
  "Pandas": { icon: SiPandas, color: "#150458" },
  "Jupyter": { icon: SiJupyter, color: "#F37726" },
  "CSV": { icon: TbFileTypeCsv, color: "#10B981" },
  "NumPy": { icon: SiNumpy, color: "#013243" },
  "React": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "Recharts": { icon: HiChartBar, color: "#8B5CF6" },
  "TailwindCSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Statistical Modeling": { icon: TbChartBar, color: "#EF4444" },
};

export function PipelineDiagram({ steps }) {
  return (
    <div className="relative">
      {/* Vertical line connecting steps */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-red-600 via-red-300 to-transparent hidden md:block" />

      <div className="space-y-8">
        {steps.map((step, i) => (
          <AnimatedSection key={step.number} delay={i * 0.1}>
            <div className="flex gap-6 items-center">
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
                <div className="flex flex-wrap gap-3">
                  {step.tools.map((tool) => {
                    const toolInfo = toolIconMap[tool];
                    const Icon = toolInfo?.icon;

                    return (
                      <div
                        key={tool}
                        className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        title={tool}
                      >
                        {Icon && (
                          <Icon
                            className="w-4 h-4 flex-shrink-0"
                            style={{ color: toolInfo.color }}
                          />
                        )}
                        <span className="text-xs font-medium text-slate-700">
                          {tool}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
