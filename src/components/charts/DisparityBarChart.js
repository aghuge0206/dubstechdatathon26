"use client";
import dynamic from "next/dynamic";
import { chartTheme } from "@/lib/chartTheme";

const BarChart = dynamic(() => import("recharts").then((m) => m.BarChart), { ssr: false });
const Bar = dynamic(() => import("recharts").then((m) => m.Bar), { ssr: false });
const XAxis = dynamic(() => import("recharts").then((m) => m.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then((m) => m.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import("recharts").then((m) => m.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then((m) => m.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then((m) => m.ResponsiveContainer), { ssr: false });
const ErrorBar = dynamic(() => import("recharts").then((m) => m.ErrorBar), { ssr: false });

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div
      className="rounded-lg p-3 border text-sm"
      style={{
        background: chartTheme.tooltip.background,
        borderColor: chartTheme.tooltip.border,
        color: chartTheme.tooltip.text,
      }}
    >
      <div className="font-medium mb-1">{d.group}</div>
      <div>Estimate: {d.estimate}%</div>
      <div className="text-xs opacity-70">CI: {d.lci}% - {d.uci}%</div>
    </div>
  );
}

export function DisparityBarChart({ data }) {
  // Add error bar data
  const chartData = data.map((d) => ({
    ...d,
    errorY: [d.estimate - d.lci, d.uci - d.estimate],
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridColor} horizontal={false} />
          <XAxis type="number" tick={{ fill: chartTheme.axisColor, fontSize: 12 }} domain={[0, "auto"]} unit="%" />
          <YAxis type="category" dataKey="group" tick={{ fill: chartTheme.axisColor, fontSize: 12 }} width={75} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.05)" }} />
          <Bar 
            dataKey="estimate" 
            fill={chartTheme.colors.coral} 
            radius={[0, 4, 4, 0]} 
            barSize={20}
            isAnimationActive={false}
          >
            <ErrorBar dataKey="errorY" width={4} stroke={chartTheme.colors.slate} strokeWidth={1.5} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
