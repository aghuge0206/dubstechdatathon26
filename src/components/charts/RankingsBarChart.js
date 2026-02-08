"use client";
import dynamic from "next/dynamic";
import { chartTheme, getSeverityColor } from "@/lib/chartTheme";
import { useIsMobile } from "@/hooks/useIsMobile";

const BarChart = dynamic(() => import("recharts").then((m) => m.BarChart), { ssr: false });
const Bar = dynamic(() => import("recharts").then((m) => m.Bar), { ssr: false });
const XAxis = dynamic(() => import("recharts").then((m) => m.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then((m) => m.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import("recharts").then((m) => m.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then((m) => m.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then((m) => m.ResponsiveContainer), { ssr: false });
const Cell = dynamic(() => import("recharts").then((m) => m.Cell), { ssr: false });

export function RankingsBarChart({ data, thresholds }) {
  const isMobile = useIsMobile();

  return (
    <div style={{ width: "100%", height: Math.max(300, data.length * 35) }}>
      <ResponsiveContainer>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: isMobile ? 60 : 120, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridColor} horizontal={false} />
          <XAxis type="number" domain={[0, 100]} tick={{ fill: chartTheme.axisColor, fontSize: 12 }} />
          <YAxis
            type="category"
            dataKey="group"
            tick={{ fill: chartTheme.axisColor, fontSize: 12 }}
            width={isMobile ? 55 : 115}
            tickFormatter={isMobile ? (v) => (v.length > 12 ? v.slice(0, 12) + "\u2026" : v) : undefined}
          />
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
            {data.map((entry) => (
              <Cell key={entry.group} fill={getSeverityColor(entry.score, thresholds)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
