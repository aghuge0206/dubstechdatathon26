"use client";
import { useCountUp } from "@/hooks/useCountUp";

export function HeroStat({ value, label, prefix = "", suffix = "" }) {
  const count = useCountUp(value, 2000);

  return (
    <div className="text-center">
      <div className="text-5xl md:text-7xl font-serif text-foreground mb-2">
        {prefix}
        {count.toLocaleString()}
        <span className="text-accent-teal">{suffix}</span>
      </div>
      <div className="text-foreground-secondary text-lg">{label}</div>
    </div>
  );
}
