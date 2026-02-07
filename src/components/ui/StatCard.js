"use client";
import { AnimatedSection } from "./AnimatedSection";

export function StatCard({ value, label, suffix = "", delay = 0 }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="glass-card p-6 text-center">
        <div className="text-3xl md:text-4xl font-serif text-foreground mb-2">
          {typeof value === "number" ? value.toLocaleString() : value}
          <span className="text-accent-teal">{suffix}</span>
        </div>
        <div className="text-sm text-foreground-tertiary uppercase tracking-wider">
          {label}
        </div>
      </div>
    </AnimatedSection>
  );
}
