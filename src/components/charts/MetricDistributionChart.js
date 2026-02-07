"use client";
import dynamic from "next/dynamic";
import { chartTheme, getSeverityColor } from "@/lib/chartTheme";

const BarChart = dynamic(() => import("recharts").then((m) => m.BarChart), { ssr: false });
const Bar = dynamic(() => import("recharts").then((m) => m.Bar), { ssr: false });
const XAxis = dynamic(() => import("recharts").then((m) => m.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then((m) => m.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import("recharts").then((m) => m.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then((m) => m.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then((m) => m.ResponsiveContainer), { ssr: false });
const Cell = dynamic(() => import("recharts").then((m) => m.Cell), { ssr: false });

const defaultThresholds = [
  { max: 25, label: "Low", color: "#2DD4BF" },
  { max: 50, label: "Moderate", color: "#FBBF24" },
  { max: 75, label: "High", color: "#FB7185" },
  { max: 100, label: "Critical", color: "#EF4444" },
];

export function MetricDistributionChart({ data, thresholds = defaultThresholds }) {
  const sorted = [...data].sort((a, b) => b.score - a.score);

  return (
    <div style={{ width: "100%", height: Math.max(300, sorted.length * 35) }}>
      <ResponsiveContainer>
        <BarChart data={sorted} layout="vertical" margin={{ top: 5, right: 30, left: 120, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridColor} horizontal={false} />
          <XAxis type="number" domain={[0, 100]} tick={{ fill: chartTheme.axisColor, fontSize: 12 }} />
          <YAxis type="category" dataKey="group" tick={{ fill: chartTheme.axisColor, fontSize: 12 }} width={115} />
          <Tooltip
            contentStyle={{
              background: chartTheme.tooltip.background,
              border: `1px solid ${chartTheme.tooltip.border}`,
              borderRadius: 8,
              color: chartTheme.tooltip.text,
            }}
            formatter={(value) => [`${value}`, "HEGI Score"]}
          />
          <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={18}>
            {sorted.map((entry) => (
              <Cell key={entry.group} fill={getSeverityColor(entry.score, thresholds)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
