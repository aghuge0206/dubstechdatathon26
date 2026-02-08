"use client";
import { AnimatedSection } from "./AnimatedSection";

export function StatCard({ value, label, suffix = "", delay = 0 }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="card-secondary p-8 text-center">
        <div className="text-4xl md:text-5xl font-serif text-foreground mb-3">
          {typeof value === "number" ? value.toLocaleString() : value}
          <span className="text-red-600">{suffix}</span>
        </div>
        <div className="text-sm text-foreground-tertiary uppercase tracking-wider">
          {label}
        </div>
      </div>
    </AnimatedSection>
  );
}
