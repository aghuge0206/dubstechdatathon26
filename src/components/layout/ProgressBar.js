"use client";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-background-tertiary/50">
      <div
        className="h-full bg-gradient-to-r from-accent-teal to-accent-coral transition-transform duration-150 origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
