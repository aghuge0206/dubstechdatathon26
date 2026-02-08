"use client";
import { Fragment } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

function getHeatColor(value, min, max) {
  const ratio = (value - min) / (max - min || 1);
  if (ratio < 0.33) return { bg: "rgba(45, 212, 191, 0.2)", text: "#2DD4BF" };
  if (ratio < 0.66) return { bg: "rgba(251, 191, 36, 0.2)", text: "#FBBF24" };
  return { bg: "rgba(251, 113, 133, 0.2)", text: "#FB7185" };
}

export function DemographicHeatmap({ conditions, demographics, values }) {
  const isMobile = useIsMobile();
  const allValues = values.flat();
  const min = Math.min(...allValues);
  const max = Math.max(...allValues);

  return (
    <div className="overflow-x-auto">
      <div
        className="inline-grid gap-1"
        style={{
          gridTemplateColumns: `${isMobile ? 100 : 140}px repeat(${demographics.length}, 1fr)`,
        }}
      >
        {/* Header row */}
        <div />
        {demographics.map((d) => (
          <div
            key={d}
            className="text-xs font-mono text-foreground-tertiary text-center px-2 py-2 truncate"
          >
            {d}
          </div>
        ))}

        {/* Data rows */}
        {conditions.map((condition, rowIdx) => (
          <Fragment key={condition}>
            <div
              className="text-sm text-foreground-secondary px-2 py-3 flex items-center"
            >
              {condition}
            </div>
            {values[rowIdx].map((val, colIdx) => {
              const colors = getHeatColor(val, min, max);
              return (
                <div
                  key={`${condition}-${demographics[colIdx]}`}
                  className="rounded px-2 py-3 text-center text-sm font-mono transition-colors hover:opacity-80"
                  style={{ background: colors.bg, color: colors.text }}
                  title={`${condition} / ${demographics[colIdx]}: ${val}%`}
                >
                  {val}
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
