"use client";
import dynamic from "next/dynamic";
import { chartTheme } from "@/lib/chartTheme";

const LineChart = dynamic(() => import("recharts").then((m) => m.LineChart), { ssr: false });
const Line = dynamic(() => import("recharts").then((m) => m.Line), { ssr: false });
const XAxis = dynamic(() => import("recharts").then((m) => m.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then((m) => m.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import("recharts").then((m) => m.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then((m) => m.Tooltip), { ssr: false });
const Legend = dynamic(() => import("recharts").then((m) => m.Legend), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then((m) => m.ResponsiveContainer), { ssr: false });

export function TrendLineChart({ series }) {
  // Merge all series into one flat array keyed by year
  const years = [...new Set(series.flatMap((s) => s.data.map((d) => d.year)))].sort();
  const merged = years.map((year) => {
    const point = { year };
    series.forEach((s) => {
      const match = s.data.find((d) => d.year === year);
      point[s.name] = match ? match.estimate : null;
    });
    return point;
  });

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={merged} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridColor} />
          <XAxis dataKey="year" tick={{ fill: chartTheme.axisColor, fontSize: 12 }} />
          <YAxis tick={{ fill: chartTheme.axisColor, fontSize: 12 }} unit="%" />
          <Tooltip
            contentStyle={{
              background: chartTheme.tooltip.background,
              border: `1px solid ${chartTheme.tooltip.border}`,
              borderRadius: 8,
              color: chartTheme.tooltip.text,
            }}
          />
          <Legend
            wrapperStyle={{ color: chartTheme.axisColor, fontSize: 12 }}
          />
          {series.map((s) => (
            <Line
              key={s.name}
              type="monotone"
              dataKey={s.name}
              stroke={s.color}
              strokeWidth={2}
              dot={{ fill: s.color, r: 3 }}
              activeDot={{ r: 5 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
