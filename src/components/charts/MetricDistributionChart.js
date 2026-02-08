"use client";

import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
  ReferenceLine,
} from "recharts";

/**
 * Small multiples chart showing distribution of a single metric across all subgroups.
 * Highlights where top groups and national average fall.
 */
export function MetricDistributionChart({ data, dataKey, title, color }) {
  // Sort by the metric value for distribution view
  const sortedData = useMemo(() => {
    return [...data]
      .filter(d => d[dataKey] != null)
      .sort((a, b) => b[dataKey] - a[dataKey]);
  }, [data, dataKey]);

  // Find national average
  const nationalAvg = data.find(d => d.subgroup === "18 years and older");
  const avgValue = nationalAvg ? nationalAvg[dataKey] : null;

  // Find top 3 subgroups
  const top3Subgroups = new Set(sortedData.slice(0, 3).map(d => d.subgroup));

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4">
      <h4 className="font-serif text-sm text-foreground mb-2">{title}</h4>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sortedData}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          >
            <XAxis
              dataKey="subgroup"
              tick={false}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 'auto']}
              tick={{ fontSize: 10, fill: "#64748B" }}
              tickLine={false}
              axisLine={false}
              width={30}
              tickFormatter={(v) => `${v}%`}
            />
            <Tooltip
              content={({ payload, active }) => {
                if (!active || !payload || !payload.length) return null;
                const d = payload[0].payload;
                return (
                  <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded shadow">
                    <p className="font-medium">{d.subgroup}</p>
                    <p>{d[dataKey]}%</p>
                  </div>
                );
              }}
            />
            {avgValue && (
              <ReferenceLine
                y={avgValue}
                stroke="#6366F1"
                strokeDasharray="4 4"
                strokeWidth={2}
                label={{
                  value: `Avg: ${avgValue}%`,
                  position: "insideTopRight",
                  fill: "#6366F1",
                  fontSize: 10,
                }}
              />
            )}
            <Bar dataKey={dataKey} radius={[2, 2, 0, 0]}>
              {sortedData.map((entry) => {
                const isTop3 = top3Subgroups.has(entry.subgroup);
                return (
                  <Cell
                    key={entry.subgroup}
                    fill={isTop3 ? color : "#E2E8F0"}
                  />
                );
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-[10px] text-foreground-tertiary mt-2 text-center">
        76 subgroups ranked high → low. Colored = top 3. Dashed line = national avg.
      </p>
    </div>
  );
}
