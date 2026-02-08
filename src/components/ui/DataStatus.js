"use client";

/**
 * Shows whether we're viewing placeholder or final NHIS data.
 */
export function DataStatus({ isPlaceholder }) {
  if (isPlaceholder) {
    return (
      <div className="inline-flex items-center gap-1.5 text-sm text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
        <span>⚠️</span>
        <span>Placeholder data</span>
      </div>
    );
  }
}
