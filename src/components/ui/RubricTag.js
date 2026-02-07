"use client";

/**
 * Small tag indicating rubric alignment.
 */
export function RubricTag({ label }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-green-700 bg-green-50 px-2 py-1 rounded border border-green-200">
      <span>✓</span>
      <span>{label}</span>
    </span>
  );
}
